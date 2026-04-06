#!/usr/bin/env python3
"""
修复特定 logo：添加深色背景而不是透明
"""

import os
from PIL import Image

def add_dark_background(input_path, output_path, bg_color=(51, 65, 85, 255)):  # slate-700
    """给图片添加深色背景"""
    try:
        img = Image.open(input_path).convert("RGBA")

        # 创建深色背景
        background = Image.new('RGBA', img.size, bg_color)

        # 将原图粘贴到背景上
        background.paste(img, (0, 0), img)

        # 转为 RGB（无透明）
        result = background.convert('RGB')

        result.save(output_path, 'PNG')
        print(f"✓ 已修复: {os.path.basename(input_path)}")
        return True
    except Exception as e:
        print(f"✗ 失败: {os.path.basename(input_path)} - {e}")
        return False

def process_logo(name):
    """处理单个 logo"""
    clients_dir = os.path.join(os.path.dirname(__file__), "..", "public", "clients")
    original_dir = os.path.join(os.path.dirname(__file__), "..", "客户logo")

    # 查找原始文件
    for ext in ['.avif', '.webp', '.png']:
        original_path = os.path.join(original_dir, name + ext)
        if os.path.exists(original_path):
            output_path = os.path.join(clients_dir, name + ".png")
            return add_dark_background(original_path, output_path)

    print(f"✗ 未找到: {name}")
    return False

if __name__ == "__main__":
    logos_to_fix = [
        "户外出行-inmotion",
        "灯光-shehds",
        "户外出行-gotrax",
        "户外出行-navee",
        "工具-workpro",
        "安防-tapo"
    ]

    for logo in logos_to_fix:
        process_logo(logo)

    print("\n完成!")
