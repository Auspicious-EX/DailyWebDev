import os

# Get the current directory where the script is located
base_dir = os.path.dirname(os.path.abspath(__file__))

# Loop through Day 21 to Day 100
for day in range(101, 113):
    # Construct the folder name
    day_folder = f'Day {day}'
    # Construct the path to the day folder
    day_folder_path = os.path.join(base_dir, day_folder)
    
    # Create the day folder if it doesn't exist
    os.makedirs(day_folder_path, exist_ok=True)
    
    # Construct the path to the 'Tutorial n.md' file
    tutorial_file_path = os.path.join(day_folder_path, f'Tutorial {day}.md')
    
    # Create the 'Tutorial n.md' file if it doesn't exist
    if not os.path.exists(tutorial_file_path):
        with open(tutorial_file_path, 'w') as tutorial_file:
            tutorial_file.write(f"# Tutorial {day}\n\nWrite your content here.")

print("Tutorial files created successfully.")
