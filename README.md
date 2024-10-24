# Recipe Explorer - Client

This project is the client-side of Recipe Explorer, an interactive web application designed to help users discover, search, and manage their favorite recipes. Built using Vue.js, this application provides an engaging user experience with responsive design and dynamic features.

## Key Features

- **Mobile-Friendly Design**: Responsive layout using Bootstrap ensures the application works smoothly across various devices and screen sizes.
- **Dynamic User Interface**: The application offers a seamless experience with real-time updates and interactions powered by Vue.js.
- **Search and Filter Options**: Users can easily search recipes and apply filters based on cuisine, diet, or intolerances. Sorting by preparation time and popularity is also available.
- **User Session Management**: The app stores session data, including favorite recipes and user preferences, using Vuex state management.
- **Custom Recipe Management**: Users can add, edit, and manage their own recipes within the application.

## Tech Stack

- **Vue.js**: The primary JavaScript framework used to build the client-side of the application.
- **Bootstrap**: Ensures a consistent and responsive design across all devices.
- **Axios**: Handles all API requests for retrieving and managing recipe data.
- **Vue Router**: Manages navigation between pages and components.
- **Vuex**: Manages state across the app for efficient data flow and session persistence.

## Development Highlights

- **Modular Architecture**: Components are designed in a modular way, promoting code reuse and maintainability.
- **API Integration**: Connected with external APIs, such as Spoonacular, to provide up-to-date recipe data.
- **User Experience Enhancements**: Includes features such as progress indicators during API calls, user-friendly error messages, and notifications for user actions.
- **Custom Theme**: The website features a clean, custom-designed layout that matches the theme of a recipe management tool.

## Unique Aspects

- **Component Reusability**: The application leverages reusable components, such as recipe previews , to make the codebase more organized and scalable.
- **User Recipe Management**: Users can create and manage their own recipe collections, allowing for personalized content in addition to external recipe data.
- **Loading & Error Feedback**: Interactive feedback is provided during data fetches, ensuring the user knows the app is actively processing their requests.

This project provides a comprehensive solution for users looking to discover and manage recipes, whether it be from external sources or their own creations.
