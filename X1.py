import os

# Get the current directory where the script is located
base_dir = os.path.dirname(os.path.abspath(__file__))

# Loop through Day 21 to Day 100
for day in range(21, 101):
    # Construct the folder name
    day_folder = f'Day {day}'
    # Construct the path to the day folder
    day_folder_path = os.path.join(base_dir, day_folder)
    # Construct the path to the 'image' folder inside the day folder
    image_folder_path = os.path.join(day_folder_path, 'image')
    
    # Create the 'image' folder if it doesn't exist
    os.makedirs(image_folder_path, exist_ok=True)

print("Image folders created successfully.")
