# Password Generator
 
## Overview
The main focus of this project is to develop a password generator that creates a password within the criteria specified by the user. The available options are as follows: Uppercase letters, lowercase letters, numbers, symbols and length of password.

## User Goals
1. Intuitive interface.
2. Easiness to use regardless of device type.
3. Provides the desired result (a random password) within the random algorithm range available on JavaScript.

## User Stories
1. As a visiting user I would like to be able to create a password with specific types of characters.
2. As a visiting user I would like to be able to easily identify the information that I need to provide to receive my randomly generated password.

## Features
### Password Generator box
this box will contain all of the items of the password generator.
![Generator Box](https://github.com/nellymaw/password-generator/blob/main/readmeContent/featureGeneratorBox.png)
#### Password Generated
This box will display the password generated within the criteria specified by the user.
![Password Generated Box](https://github.com/nellymaw/password-generator/blob/main/readmeContent/featureGeneratedBox.png)
#### Password length field
This field will take the number that the input recieve and inform the program just how long the password to be generated has to be (between 4 and 20 characters).
![Password Length Field](https://github.com/nellymaw/password-generator/blob/main/readmeContent/featureLengthField.png)
#### Contain Uppercase checkbox
This option, when clicked, will add uppercase letters to the pool of available characters to be used in the password generation.
![Contain Uppercase checkbox](https://github.com/nellymaw/password-generator/blob/main/readmeContent/featureContainUppercase.png)
#### Contain Lowercase checkbox
This option, when clicked, will add lowercase letters to the pool of available characters to be used in the password generation.
![Contain Lowercase checkbox](https://github.com/nellymaw/password-generator/blob/main/readmeContent/featureContainLowercase.png)
#### Contain Numbers checkbox
This option, when clicked, will add numbers to the pool of available characters to be used in the password generation.
![Contain Uppercase checkbox](https://github.com/nellymaw/password-generator/blob/main/readmeContent/featureContainNumber.png)
#### Contain Symbols checkbox
This option, when clicked, will add symbols to the pool of available characters to be used in the password generation.
![Contain Uppercase checkbox](https://github.com/nellymaw/password-generator/blob/main/readmeContent/featureContainSymbols.png)
#### Generate Password Button
This button will run the password generator program and return a password generated with the specified criteria.
![Generate Password Button](https://github.com/nellymaw/password-generator/blob/main/readmeContent/featureGeneratedBox.png)

## Future implementations
1. Add a way to store the passwords generated in a database available only for the user.
2. Create an app to access the password generator.

## Technologies Used
### Languages Used
1. [HTML5](https://en.wikipedia.org/wiki/HTML5)

2. [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

3. [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used
1. [Balsamiq] (https://https://balsamiq.com/)
    Balsamiq was used to create the wireframes used on this project.
2. [Git](https://git-scm.com/)
    Git was used for version control by utilizing the Github Desktop app to commit to Git and Push to GitHub.
3. [GitHub:](https://github.com/)
    GitHub is used to store the projects code after being pushed from Git.
4. [Font Awesome:](https://fontawesome.com/)
    Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
5. [Google Fonts:](https://fonts.google.com/)
    Google fonts were used to import the 'Lato' font into the style.css file which is used on all pages throughout the project.
6. [Gimp:](https://www.gimp.org/)
    Gimp was used to create the brands logo.

### Tools
Visual Studio Code was used to build the project. Several extensions are used to assist including, but not limited to: Auto Close Tag v0.5.13, HTML CSS Support v1.10.2,IntelliSense for CSS class names in HTML v1.20.0.

## Testing

### Validation Results
HTML

[W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnellymaw.github.io%2Fpassword-generator%2F)

CSS

[(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnellymaw.github.io%2Fpassword-generator%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

JSHint
[JSHint](https://jshint.com/) test completed with no error or warnings.

Lighthouse



Result for Desktop 

![Lighthouse Validation](https://github.com/nellymaw/password-generator/blob/main/readmeContent/lighthouseDesktopScore.png)

Result for Mobile

![Lighthouse Validation](https://github.com/nellymaw/password-generator/blob/main/readmeContent/lighthouseMobileScore.png)

### Test Cases

### Bug fixes
Undefined text when no criteria is selected.
Bug where even if all criterias are selected not necessarily all of them are met.

### Known Bugs

### Supported screens and browsers

All mobile testing was done through Google Chrome's responsive tool.
- Moto 4G
- Glaxy S5
- Pixel 2
- Pixel 2 XL
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro
- Surface Duo
- Nest Hub
- Nest Hub Max
- Google Chrome
- Mozilla Firefox

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/nellymaw/pilates-4-life)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://nellymaw.github.io/pilates-4-life/index.html) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/nellymaw/pilates-4-life)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/nellymaw/pilates-4-life)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

## Credits

[SampleREADME](https://github.com/Code-Institute-Solutions/SampleREADME)

[Pilates4Life README](https://github.com/nellymaw/pilates-4-life/blob/main/README.md)

Icons used was taken from [Font Awesome](https://fontawesome.com/)

Favicon used was taken from [Favicon.io](https://favicon.io/favicon-converter/)

[Traversy Media](https://www.youtube.com/watch?v=duNmhKgtcsI)

[Web Dev Simplified](https://www.youtube.com/watch?v=iKo9pDKKHnc)

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)

[Lastpass](https://www.lastpass.com/)

## Media
Favicon art was designed and created by me.