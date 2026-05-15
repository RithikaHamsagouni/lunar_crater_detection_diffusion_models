import torch
import torch.nn as nn
from torch.utils.data import DataLoader
from model import UNet
from dataset import LunarCraterDataset
import matplotlib.pyplot as plt
from tqdm import tqdm

def train():
    # Parameters
    DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
    LEARNING_RATE = 1e-4
    BATCH_SIZE = 8
    NUM_EPOCHS = 15
    IMG_DIR = "datasets/ohrc_images/images"
    MASK_DIR = "datasets/ohrc_images/masks"

    model = UNet(in_channels=1, out_channels=1).to(DEVICE)
    loss_fn = nn.BCELoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)

    # Simplified loading
    # dataset = LunarCraterDataset(img_dir=IMG_DIR, mask_dir=MASK_DIR)
    # train_loader = DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True)

    print(f"Starting training on {DEVICE}...")
    
    # Training Loop Placeholder (for Demo)
    # Complete code would include epoch iteration, backprop, and validation
    # This structure is designed for immediate export to Google Colab

if __name__ == "__main__":
    train()
