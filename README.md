﻿# rn-Assignment5-11332199
 Introduction
This project consists of a React Native application with two main screens: SettingsScreen and HomeScreen. The app supports a dark theme mode, allowing users to toggle between light and dark themes. This functionality is managed using React Context API.

Project Structure
The project is structured as follows:

Context
ThemeContext.js: Contains the context and provider for theme management.
Components
listData.js: Contains the data for the transactions listed in HomeScreen.
Screens
SettingsScreen.js: Displays various settings options including theme toggle.
HomeScreen.js: Displays a welcome message, a card image, various options (Send, Receive, Loan, TopUp), and a transaction list.
Theme Management
ThemeContext.js
ThemeContext: Created using createContext() to hold the theme state and toggle function.
ThemeProvider: A component that wraps around the application to provide theme state and toggle function to all child components. It uses useState to manage isDarkTheme state and toggleTheme function to switch themes.
Usage in Screens
SettingsScreen.js:

Utilizes useContext(ThemeContext) to access isDarkTheme and toggleTheme.
Contains a Switch component to toggle between light and dark themes.
Applies conditional styling based on the isDarkTheme value for different UI elements like background color, text color, and icons.
HomeScreen.js:

Uses useContext(ThemeContext) to access isDarkTheme.
Applies conditional styling to various components such as background colors, text colors, and images based on the theme.
Detailed Functionality
SettingsScreen.js
Header Section:

Displays the header text "Settings" with appropriate styling based on the theme.
List Items:

Contains multiple list items like "Language", "My Profile", "Contact Us", "Change Passwords", and "Privacy Policy".
Each item has a text description and a right arrow icon.
The text color and background color change based on the current theme.
Theme Toggle:

Includes a Switch component that toggles the theme when interacted with.
The Switch has different track colors for light and dark modes.
HomeScreen.js
Header Section:

Displays a profile picture, welcome message, user name, and a search icon.
Applies conditional styling to text and icons based on the theme.
Card Section:

Displays a card image with centralized alignment.
Circles Section:

Displays four options: Send, Receive, Loan, and TopUp.
Each option has an icon and text.
Background color and text color change based on the theme.
Transaction Section:

Displays a header with "Transaction" text and a "See All" link.
Uses a FlatList to render a list of transactions from listData.
Each transaction item includes an image, name, type, and price.
Applies conditional styling to background color, text color, and images based on the theme.
Conclusion
This project demonstrates the implementation of a dark theme toggle in a React Native application using Context API. The SettingsScreen and HomeScreen components are designed with conditional styling to reflect the current theme, providing a cohesive and user-friendly experience.

#LIGHT MODE
![light mode 1](https://github.com/bigslime911/rn-Assignment5-11332199/assets/145637377/a6b4819e-b500-4262-9152-43f74c0b8ec9)

![light mode 2](https://github.com/bigslime911/rn-Assignment5-11332199/assets/145637377/754b1edc-255c-4c39-a44b-e185b3112dc0)

#DARK MODE
![dark mode 1](https://github.com/bigslime911/rn-Assignment5-11332199/assets/145637377/9e20fcb3-0628-445c-baf0-2cbeb38eb630)
![dark mode 2](https://github.com/bigslime911/rn-Assignment5-11332199/assets/145637377/0ab2f5e4-2b7f-4f38-b7dd-5fc5efb2230d)









