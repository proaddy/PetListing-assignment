Project Setup

To set up the project, simply clone the repository and run the following command in your command line while in the correct directory:

```javascript
npm install
```

This will install all the necessary dependencies.

Prerequisite: Ensure you have Node.js installed before attempting to clone the project.

After the dependencies are installed, run:

```javascript
npm run dev
```

This will start the Vite server which renders the React application.
Project Structure

The project consists of the following structure:

    Config Files
    Public Folder
        Contains the website icon image
    Components
        Navigation.jsx
        PetList.jsx
    Pages
        HomePage.jsx
        PetDetails.jsx
        SearchForm.jsx
    src Folder
        App.jsx - Handles the routing to the three different pages

We have used TailwindCSS for design and styling. The fonts are sourced from Google Fonts, so no additional setup is required for fonts.
Design Decision

My initial approach was to create a storyboard to determine the number of events and states needed. In this case, a single API call was sufficient, simplifying the website design and implementation.

Changes were made during development, but the goal was to maintain a simple and user-friendly design.