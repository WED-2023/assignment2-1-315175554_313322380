## Project Components

This table outlines the components in the project, their purpose, and their current status.

| **Component Name**       | **Type**      | **Purpose**                                                                                             | **Status**                                                                                                  |
|--------------------------|---------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `App.vue`                 | Layout/Page   | Root component for the application. Handles global layout and navigation bar, including login state.      | **Completed**: Includes authentication-based navigation and dynamic routing.                               |
| `MainPage.vue`            | Page          | Displays random recipes and last viewed recipes.                                                         | **Completed**: Optimized for user login state; profile and favorites buttons removed.                       |
| `LoginPage.vue`           | Page          | Handles user login through a form.                                                                       | **Completed**: Login form with validation using Bootstrap.                                                  |
| `RegisterPage.vue`        | Page          | Handles user registration through a form.                                                                | **Completed**: Registration form with validation using Bootstrap.                                           |
| `SearchPage.vue`          | Page          | Allows users to search for recipes.                                                                      | **Basic Structure**: Search form is there, needs actual search functionality.                               |
| `NotFoundPage.vue`        | Page          | Displays a 404 error page when a route is not found.                                                      | **Completed**: Fun design with a creative 404 message.                                                      |
| `ProfilePage.vue`         | Page          | Displays user profile information and saved data.                                                        | **Not Completed**: Page exists, but user-specific profile functionality is pending.                         |
| `FavoritesPage.vue`       | Page          | Displays a list of recipes saved as favorites by the user.                                                | **Not Completed**: Page exists, but functionality for displaying favorite recipes needs implementation.     |
| `RecipePreview.vue`       | Component     | Displays a single recipe preview, including image, title, and quick stats (e.g., likes, time).            | **Completed**: Used in recipe lists across multiple pages.                                                   |
| `RecipePreviewList.vue`   | Component     | Displays a list of recipes using the `RecipePreview` component.                                           | **Completed**: Used for showing random and last viewed recipes.                                              |
| `Navbar.vue`              | Component     | Displays the main navigation bar, including links to pages and user status (login/logout/profile/favorites). | **Completed**: Includes Bootstrap icons for profile and favorites; dynamic based on user authentication.    |
| `RecipeForm.vue`          | Component     | A form component to allow users to submit recipes.                                                        | **Not Completed**: Component structure needed, functionality to add recipes is pending.                     |
| `ShoppingList.vue`        | Component     | Displays and manages a list of ingredients the user can add to their shopping list.                       | **Not Completed**: Requires structure and logic for adding/removing ingredients from the shopping list.      |
| `routes.js`               | Configuration | Manages the routing for all pages (e.g., MainPage, LoginPage, ProfilePage).                               | **Completed**: Routing for all pages added, including lazy loading for optimization.                        |

## Component Status Overview

- **Completed Components**:
  - `App.vue`, `MainPage.vue`, `LoginPage.vue`, `RegisterPage.vue`, `NotFoundPage.vue`, `RecipePreview.vue`, `RecipePreviewList.vue`, `Navbar.vue`, `routes.js`
  
- **Not Completed Components**:
  - `ProfilePage.vue`: Requires development to handle user-specific data.
  - `FavoritesPage.vue`: Needs to show the list of favorite recipes.
  - `RecipeForm.vue`: Needs implementation to allow users to submit new recipes.
  - `ShoppingList.vue`: Needs structure and functionality for managing ingredients.
  
- **Basic Structure**:
  - `SearchPage.vue`: The structure is there but requires the search logic and functionality to be implemented.## Project Components

This table outlines the components in the project, their purpose, and their current status.

| **Component Name**       | **Type**      | **Purpose**                                                                                             | **Status**                                                                                                  |
|--------------------------|---------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `App.vue`                 | Layout/Page   | Root component for the application. Handles global layout and navigation bar, including login state.      | **Completed**: Includes authentication-based navigation and dynamic routing.                               |
| `MainPage.vue`            | Page          | Displays random recipes and last viewed recipes.                                                         | **Completed**: Optimized for user login state; profile and favorites buttons removed.                       |
| `LoginPage.vue`           | Page          | Handles user login through a form.                                                                       | **Completed**: Login form with validation using Bootstrap.                                                  |
| `RegisterPage.vue`        | Page          | Handles user registration through a form.                                                                | **Completed**: Registration form with validation using Bootstrap.                                           |
| `SearchPage.vue`          | Page          | Allows users to search for recipes.                                                                      | **Basic Structure**: Search form is there, needs actual search functionality.                               |
| `NotFoundPage.vue`        | Page          | Displays a 404 error page when a route is not found.                                                      | **Completed**: Fun design with a creative 404 message.                                                      |
| `ProfilePage.vue`         | Page          | Displays user profile information and saved data.                                                        | **Not Completed**: Page exists, but user-specific profile functionality is pending.                         |
| `FavoritesPage.vue`       | Page          | Displays a list of recipes saved as favorites by the user.                                                | **Not Completed**: Page exists, but functionality for displaying favorite recipes needs implementation.     |
| `RecipePreview.vue`       | Component     | Displays a single recipe preview, including image, title, and quick stats (e.g., likes, time).            | **Completed**: Used in recipe lists across multiple pages.                                                   |
| `RecipePreviewList.vue`   | Component     | Displays a list of recipes using the `RecipePreview` component.                                           | **Completed**: Used for showing random and last viewed recipes.                                              |
| `Navbar.vue`              | Component     | Displays the main navigation bar, including links to pages and user status (login/logout/profile/favorites). | **Completed**: Includes Bootstrap icons for profile and favorites; dynamic based on user authentication.    |
| `RecipeForm.vue`          | Component     | A form component to allow users to submit recipes.                                                        | **Not Completed**: Component structure needed, functionality to add recipes is pending.                     |
| `ShoppingList.vue`        | Component     | Displays and manages a list of ingredients the user can add to their shopping list.                       | **Not Completed**: Requires structure and logic for adding/removing ingredients from the shopping list.      |
| `routes.js`               | Configuration | Manages the routing for all pages (e.g., MainPage, LoginPage, ProfilePage).                               | **Completed**: Routing for all pages added, including lazy loading for optimization.                        |

## Component Status Overview

- **Completed Components**:
  - `App.vue`, `MainPage.vue`, `LoginPage.vue`, `RegisterPage.vue`, `NotFoundPage.vue`, `RecipePreview.vue`, `RecipePreviewList.vue`, `Navbar.vue`, `routes.js`
  
- **Not Completed Components**:
  - `ProfilePage.vue`: Requires development to handle user-specific data.
  - `FavoritesPage.vue`: Needs to show the list of favorite recipes.
  - `RecipeForm.vue`: Needs implementation to allow users to submit new recipes.
  - `ShoppingList.vue`: Needs structure and functionality for managing ingredients.
  
- **Basic Structure**:
  - `SearchPage.vue`: The structure is there but requires the search logic and functionality to be implemented.
## Project Components

This table outlines the components in the project, their purpose, and their current status.

| **Component Name**       | **Type**      | **Purpose**                                                                                             | **Status**                                                                                                  |
|--------------------------|---------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `App.vue`                 | Layout/Page   | Root component for the application. Handles global layout and navigation bar, including login state.      | **Completed**: Includes authentication-based navigation and dynamic routing.                               |
| `MainPage.vue`            | Page          | Displays random recipes and last viewed recipes.                                                         | **Completed**: Optimized for user login state; profile and favorites buttons removed.                       |
| `LoginPage.vue`           | Page          | Handles user login through a form.                                                                       | **Completed**: Login form with validation using Bootstrap.                                                  |
| `RegisterPage.vue`        | Page          | Handles user registration through a form.                                                                | **Completed**: Registration form with validation using Bootstrap.                                           |
| `SearchPage.vue`          | Page          | Allows users to search for recipes.                                                                      | **Basic Structure**: Search form is there, needs actual search functionality.                               |
| `NotFoundPage.vue`        | Page          | Displays a 404 error page when a route is not found.                                                      | **Completed**: Fun design with a creative 404 message.                                                      |
| `ProfilePage.vue`         | Page          | Displays user profile information and saved data.                                                        | **Not Completed**: Page exists, but user-specific profile functionality is pending.                         |
| `FavoritesPage.vue`       | Page          | Displays a list of recipes saved as favorites by the user.                                                | **Not Completed**: Page exists, but functionality for displaying favorite recipes needs implementation.     |
| `RecipePreview.vue`       | Component     | Displays a single recipe preview, including image, title, and quick stats (e.g., likes, time).            | **Completed**: Used in recipe lists across multiple pages.                                                   |
| `RecipePreviewList.vue`   | Component     | Displays a list of recipes using the `RecipePreview` component.                                           | **Completed**: Used for showing random and last viewed recipes.                                              |
| `Navbar.vue`              | Component     | Displays the main navigation bar, including links to pages and user status (login/logout/profile/favorites). | **Completed**: Includes Bootstrap icons for profile and favorites; dynamic based on user authentication.    |
| `RecipeForm.vue`          | Component     | A form component to allow users to submit recipes.                                                        | **Not Completed**: Component structure needed, functionality to add recipes is pending.                     |
| `ShoppingList.vue`        | Component     | Displays and manages a list of ingredients the user can add to their shopping list.                       | **Not Completed**: Requires structure and logic for adding/removing ingredients from the shopping list.      |
| `routes.js`               | Configuration | Manages the routing for all pages (e.g., MainPage, LoginPage, ProfilePage).                               | **Completed**: Routing for all pages added, including lazy loading for optimization.                        |

## Component Status Overview

- **Completed Components**:
  - `App.vue`, `MainPage.vue`, `LoginPage.vue`, `RegisterPage.vue`, `NotFoundPage.vue`, `RecipePreview.vue`, `RecipePreviewList.vue`, `Navbar.vue`, `routes.js`
  
- **Not Completed Components**:
  - `ProfilePage.vue`: Requires development to handle user-specific data.
  - `FavoritesPage.vue`: Needs to show the list of favorite recipes.
  - `RecipeForm.vue`: Needs implementation to allow users to submit new recipes.
  - `ShoppingList.vue`: Needs structure and functionality for managing ingredients.
  
- **Basic Structure**:
  - `SearchPage.vue`: The structure is there but requires the search logic and functionality to be implemented.## Project Components

This table outlines the components in the project, their purpose, and their current status.

| **Component Name**       | **Type**      | **Purpose**                                                                                             | **Status**                                                                                                  |
|--------------------------|---------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `App.vue`                 | Layout/Page   | Root component for the application. Handles global layout and navigation bar, including login state.      | **Completed**: Includes authentication-based navigation and dynamic routing.                               |
| `MainPage.vue`            | Page          | Displays random recipes and last viewed recipes.                                                         | **Completed**: Optimized for user login state; profile and favorites buttons removed.                       |
| `LoginPage.vue`           | Page          | Handles user login through a form.                                                                       | **Completed**: Login form with validation using Bootstrap.                                                  |
| `RegisterPage.vue`        | Page          | Handles user registration through a form.                                                                | **Completed**: Registration form with validation using Bootstrap.                                           |
| `SearchPage.vue`          | Page          | Allows users to search for recipes.                                                                      | **Basic Structure**: Search form is there, needs actual search functionality.                               |
| `NotFoundPage.vue`        | Page          | Displays a 404 error page when a route is not found.                                                      | **Completed**: Fun design with a creative 404 message.                                                      |
| `ProfilePage.vue`         | Page          | Displays user profile information and saved data.                                                        | **Not Completed**: Page exists, but user-specific profile functionality is pending.                         |
| `FavoritesPage.vue`       | Page          | Displays a list of recipes saved as favorites by the user.                                                | **Not Completed**: Page exists, but functionality for displaying favorite recipes needs implementation.     |
| `RecipePreview.vue`       | Component     | Displays a single recipe preview, including image, title, and quick stats (e.g., likes, time).            | **Completed**: Used in recipe lists across multiple pages.                                                   |
| `RecipePreviewList.vue`   | Component     | Displays a list of recipes using the `RecipePreview` component.                                           | **Completed**: Used for showing random and last viewed recipes.                                              |
| `Navbar.vue`              | Component     | Displays the main navigation bar, including links to pages and user status (login/logout/profile/favorites). | **Completed**: Includes Bootstrap icons for profile and favorites; dynamic based on user authentication.    |
| `RecipeForm.vue`          | Component     | A form component to allow users to submit recipes.                                                        | **Not Completed**: Component structure needed, functionality to add recipes is pending.                     |
| `ShoppingList.vue`        | Component     | Displays and manages a list of ingredients the user can add to their shopping list.                       | **Not Completed**: Requires structure and logic for adding/removing ingredients from the shopping list.      |
| `routes.js`               | Configuration | Manages the routing for all pages (e.g., MainPage, LoginPage, ProfilePage).                               | **Completed**: Routing for all pages added, including lazy loading for optimization.                        |

## Component Status Overview

- **Completed Components**:
  - `App.vue`, `MainPage.vue`, `LoginPage.vue`, `RegisterPage.vue`, `NotFoundPage.vue`, `RecipePreview.vue`, `RecipePreviewList.vue`, `Navbar.vue`, `routes.js`
  
- **Not Completed Components**:
  - `ProfilePage.vue`: Requires development to handle user-specific data.
  - `FavoritesPage.vue`: Needs to show the list of favorite recipes.
  - `RecipeForm.vue`: Needs implementation to allow users to submit new recipes.
  - `ShoppingList.vue`: Needs structure and functionality for managing ingredients.
  
- **Basic Structure**:
  - `SearchPage.vue`: The structure is there but requires the search logic and functionality to be implemented.
