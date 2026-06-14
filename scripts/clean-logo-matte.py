#!/usr/bin/env python3
"""Remove flat background fill from logo PNGs, keeping rainbow arcs and icons."""
from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def is_transparent(r: int, g: int, b: int, a: int) -> bool:
    return a == 0


def is_flat_purple_matte(r: int, g: int, b: int, a: int) -> bool:
    if a == 0:
        return False
    return abs(int(r) - 140) <= 25 and abs(int(g) - 82) <= 25 and int(b) >= 200


def is_edge_black_matte(r: int, g: int, b: int, a: int) -> bool:
    return a > 0 and max(int(r), int(g), int(b)) < 45


def flood_mask(arr: np.ndarray, predicate) -> np.ndarray:
    h, w = arr.shape[:2]
    visited = np.zeros((h, w), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    def seed(x: int, y: int) -> None:
        if visited[y, x]:
            return
        if predicate(*arr[y, x]):
            visited[y, x] = True
            queue.append((x, y))

    for x in range(w):
        seed(x, 0)
        seed(x, h - 1)
    for y in range(h):
        seed(0, y)
        seed(w - 1, y)

    while queue:
        x, y = queue.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[ny, nx] and predicate(*arr[ny, nx]):
                visited[ny, nx] = True
                queue.append((nx, ny))

    return visited


def remove_outer_matte(path: Path, *, remove_black_matte: bool) -> None:
    arr = np.array(Image.open(path).convert('RGBA'))

    purple_matte = flood_mask(
        arr,
        lambda r, g, b, a: is_transparent(r, g, b, a) or is_flat_purple_matte(r, g, b, a),
    )
    arr[purple_matte & (arr[:, :, 3] > 0), 3] = 0

    if remove_black_matte:
        black_matte = flood_mask(
            arr,
            lambda r, g, b, a: is_transparent(r, g, b, a) or is_edge_black_matte(r, g, b, a),
        )
        arr[black_matte & (arr[:, :, 3] > 0), 3] = 0

    Image.fromarray(arr).save(path, 'PNG')
    print(f'{path.relative_to(ROOT)}: kept {(arr[:, :, 3] > 0).sum()} opaque pixels')


def sync_copies(source: Path, targets: list[Path]) -> None:
    for target in targets:
        Image.open(source).save(target, 'PNG')


if __name__ == '__main__':
    essentialsy = ROOT / 'wiki/public/logo.png'
    discord = ROOT / 'discordlinkplus/public/logo.png'

    remove_outer_matte(essentialsy, remove_black_matte=True)
    sync_copies(essentialsy, [
        ROOT / 'wiki/public/favicon.png',
        ROOT / 'home/logos/essentialsy.png',
    ])

    remove_outer_matte(discord, remove_black_matte=False)
    sync_copies(discord, [
        ROOT / 'discordlinkplus/public/favicon.png',
        ROOT / 'home/logos/discordlinkplus.png',
    ])
