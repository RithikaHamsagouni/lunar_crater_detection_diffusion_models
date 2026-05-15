import cv2
import numpy as np
import torch

def diffusion_denoise_step(image):
    """
    Simulates a diffusion-inspired denoising step.
    While real diffusion involves iterative reverse noise estimation,
    for lightweight lunar imagery we use a hybrid anisotropic diffusion approach.
    """
    # Contrast Limited Adaptive Histogram Equalization for detail enhancement
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    enhanced = clahe.apply(image)
    
    # Bilateral filtering: smooths while preserving edges (diffusion-like behavior)
    denoised = cv2.bilateralFilter(enhanced, d=9, sigmaColor=75, sigmaSpace=75)
    
    return denoised

def get_crater_type(area):
    """
    Classify crater based on pixel area.
    """
    if area < 500:
        return "Small Crater"
    elif area < 2000:
        return "Medium Crater"
    else:
        return "Large Crater"

def analyze_detections(mask, threshold=0.5):
    """
    Identify individual craters and classify.
    """
    mask = (mask > threshold).astype(np.uint8) * 255
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    craters = []
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area > 10: # Remove noise
            M = cv2.moments(cnt)
            if M["m00"] != 0:
                cX = int(M["m10"] / M["m00"])
                cY = int(M["m01"] / M["m00"])
                
                crater_type = get_crater_type(area)
                craters.append({
                    "center": (cX, cY),
                    "area": area,
                    "type": crater_type,
                    "contour": cnt
                })
    return craters
