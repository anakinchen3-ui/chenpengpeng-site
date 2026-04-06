#!/usr/bin/env python3
"""
自动移除 logo 白色背景脚本
将接近白色的背景转换为透明
"""

import os
import sys
from PIL import Image
import numpy as np

def remove_white_background(input_path, output_path, threshold=240):
    """
    移除图片中的白色背景
    threshold: 白色阈值，0-255，越接近255越严格
    """
    try:
        # 打开图片
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)

        # 分离通道
        r, g, b, a = data.T

        # 检测白色区域（RGB 都大于 threshold）
        white_areas = (r > threshold) & (g > threshold) & (b > threshold)

        # 将白色区域设为透明
        data[..., 3][white_areas.T] = 0

        # 创建新图片
        result = Image.fromarray(data)

        # 保存
        result.save(output_path, 'PNG')
        print(f"✓ 已处理: {os.path.basename(input_path)}")
        return True

    except Exception as e:
        print(f"✗ 失败: {os.path.basename(input_path)} - {e}")
        return False

def process_all_logos(clients_dir):
    """处理 clients 目录下的所有图片"""
    supported_formats = ('.png', '.jpg', '.jpeg', '.webp', '.avif')

    processed = 0
    failed = 0

    for filename in os.listdir(clients_dir):
        if filename.lower().endswith(supported_formats):
            input_path = os.path.join(clients_dir, filename)

            # 输出为 PNG（支持透明）
            name = os.path.splitext(filename)[0]
            output_path = os.path.join(clients_dir, f"{name}.png")

            if remove_white_background(input_path, output_path):
                processed += 1
                # 如果原文件不是 PNG，删除原文件
                if not filename.lower().endswith('.png'):
                    os.remove(input_path)
                    print(f"  已删除原文件: {filename}")
            else:
                failed += 1

    print(f"\n处理完成: {processed} 成功, {failed} 失败")

if __name__ == "__main__":
    clients_dir = os.path.join(os.path.dirname(__file__), "..", "public", "clients")
    clients_dir = os.path.abspath(clients_dir)

    print(f"处理目录: {clients_dir}\n")
    process_all_logos(clients_dir)
