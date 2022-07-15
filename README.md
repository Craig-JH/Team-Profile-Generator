# Team-Profile-Generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
The Team Profile Generator was created to display a team's basic information for a manager so that they have quick access to the employees' id numbers, email addresses, and GitHub profiles.

The following were the requirements of the project:
- When the user is prompted to enter their team members' information and their information via the command line, an HTML file is generated that displays a nicely formatted team roster based on user input.
- When the user clicks on the email address in the HTML, their default email program opens and populates the TO field of the email with the address.
- When the user clicks on the GitHub username, the employee's GitHub profile opens in a new tab.
- When the user starts the application, they are prompted to enter their name, employee ID, email address, and office number as the team manager.
- When the user is presented with a menu with the option to add an engineer or an intern or to finish building my team, when selecting the engineer option, the user is prompted to enter the engineer’s name, ID, email, and GitHub username, and they are taken back to the menu.
- When the user is presented with a menu with the option to add an engineer or an intern or to finish building my team, when selecting the intern option, the user is prompted to enter the intern’s name, ID, email, and school, and they are taken back to the menu.
- When the user decides to finish building their team, they will exit the application and their HTML is generated.

## Table of Contents
- [Installation](#installation)
- [Links](#links)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation
Visit the GitHub repository, Team-Profile-Generator (see the link below), to fork and clone the repository. The JSON file will have the necessary dependencies. Use:
````````````
npm install
````````````
The .gitignore file is set up in the root directory along with the index.js file that contains most of the command line code. The utils folder contains the generatepage file, which contains the fs functions that write the HTML file and copy the CSS file and the module.export to index.js. The src folder will contain the page-template file, which contains the template for the HTML file and the module.export to index.js, and the CSS styles sheet that will be copied to the dist folder. The dist folder will contain the generated HTML index.html and the copied styles.css.

## Links
- [GitHub Repository](https://github.com/amklenk/Team-Profile-Generator)
- [Walkthrough Video Link](https://drive.google.com/file/d/1Fj4wTc_1ZEU2ECtfpXfdbUQ0fyzAE-wy/view?usp=sharing)

## Usage
The following images are project screenshots.

CLI App
![CLI image](./images/commandline.png)

Example of a Generated HTML File
![Example HTML File](./images/HTML.png)

Screenshot of the HTML File Opened in the Browser
![Example Deployed HTML](./images/site.png)

The application is navigable via opening the index.js file in an integrated terminal. All of the user data is entered using Inquirer prompts. The generated files will appear in the dist folder.

## License
The badge at the top of the page shows that this project is licensed under MIT. The link for that license is shown below.
- [License: MIT](https://opensource.org/licenses/MIT)
## How to Contribute
Please fork and clone the repository and use a pull request to add or make changes to the current repository.

## Questions
Please direct any questions to amandamklenk3@gmail.com. To see more projects, visit the link below for amklenk's respository: 
- [GitHub Repository](https://github.com/amklenk)
# Team-Profile-Generator
# Team-Profile-Generator
