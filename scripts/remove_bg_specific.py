#!/usr/bin/env python3
"""
为特定 logo 移除白色背景
"""

import os
from PIL import Image
import numpy as np

def remove_white_background(input_path, output_path, threshold=240):
    """移除白色背景"""
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)
        r, g, b, a = data.T
        white_areas = (r > threshold) & (g > threshold) & (b > threshold)
        data[..., 3][white_areas.T] = 0
        result = Image.fromarray(data)
        result.save(output_path, 'PNG')
        print(f"✓ 已处理: {os.path.basename(input_path)}")
        return True
    except Exception as e:
        print(f"✗ 失败: {os.path.basename(input_path)} - {e}")
        return False

def process_logo(name):
    """处理单个 logo"""
    original_dir = os.path.join(os.path.dirname(__file__), "..", "客户logo")
    clients_dir = os.path.join(os.path.dirname(__file__), "..", "public", "clients")

    # 查找原始文件
    for ext in ['.avif', '.webp', '.png', '.jpg']:
        original_path = os.path.join(original_dir, name + ext)
        if os.path.exists(original_path):
            output_path = os.path.join(clients_dir, name + ".png")
            return remove_white_background(original_path, output_path)

    print(f"✗ 未找到: {name}")
    return False

if __name__ == "__main__":
    logos = [
        "户外出行-inmotion",
        "户外出行-gotrax",
        "户外出行-navee",
        "灯光-shehds",
        "工具-workpro",
        "安防-tapo"
    ]

    for logo in logos:
        process_logo(logo)

    print("\n完成!")
