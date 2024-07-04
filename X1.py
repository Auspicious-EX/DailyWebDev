import os

# Function to create folders and files with the specified structure
def create_folders_and_files():
    # Loop to create folders from Day 21 to Day 100
    for day in range(21, 101):
        # Create the folder name
        folder_name = f"Day {day}"
        
        # Create the folder if it does not exist
        os.makedirs(folder_name, exist_ok=True)
        
        # Define the file name with the respective tutorial number
        file_name = f"Tutorial{day}.md"
        
        # Define the path to the file within the folder
        file_path = os.path.join(folder_name, file_name)
        
        # Write the specified content into the file
        with open(file_path, 'w') as file:
            file.write(f"# Tutorial **{day}** Notes")

# Run the function
create_folders_and_files()
