# -*- coding: utf-8 -*-
"""
Created on Fri Feb  4 23:13:07 2022

@author: starg
"""

from PIL import Image
import os
import PIL
import glob

index = 1

# while True:
    
#         img = Image.open(f'cake{index}.jpg')
#         img.resize((500,500))
#         img.save(f'cake{index}.jpg')
#         index += 1
    
images = [file for file in os.listdir() if file.endswith(('jpeg', 'png', 'jpg'))]
for image in images:
    img = Image.open(image)
    img.resize((600,600))
    img.save(image, optimize=True, quality=40)