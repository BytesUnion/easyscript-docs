---
    name="Getting started"
    queue=2
---
# Getting Started

To get EasyScript up and running, follow the installation steps for your operating system:

### Windows Installation Steps

1. **Run the Installation Script**:
    - Locate and run the `install.bat` file included in the downloaded EasyScript release. This script will handle the initial setup.

   > Note: Currently, there is no dedicated installer for Windows; the `install.bat` file performs the necessary setup tasks.

### Linux Installation Steps

1. **Extract the Files**:
    - Extract the contents of the downloaded zip file to a desired location.

2. **Navigate to the Directory**:
    - Open a terminal and change to the directory where you extracted the files. You can use the `cd` command to navigate to the folder.

3. **Make the Installation Script Executable**:
    - Run the following command to give execute permissions to the installation script:
      ```bash
      chmod +x install.sh
      ```

4. **Run the Installation Script with Superuser Privileges**:
    - Execute the script using superuser privileges by entering:
      ```bash
      sudo ./install.sh
      ```

5. **Restart Your Terminal**:
    - To apply changes to your system PATH, restart your terminal.

### Writing your first program

1. Open your preferred text editor or IDE ([Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=BytesUnion.easyscript) is recommended)
2. Create a new file with `.ess` extension
3. Start with a simple Hello world program
 
   `
print("Hello, world!")
   `
4. Now use EasyScript interpreter to execute your script:
 
   `
   easyscript run yourfile.ess
   `
5. You should see the following output:
 
   `
   Hello, world!
   `