> Project Summery:

This project is a React application that uses React Router for navigation and has a number of different components. The project's key features include managing a shopping cart, getting data from a server using API calls, and using JWT tokens and cookies for user authentication.

The components used in the project are as follows:

> LoginForm: Responsible for rendering a login form for user authentication.

> Home: Represents the homepage of the application.

> Books: Displays a list of books.

> BookItemDetails: Shows detailed information about a specific book.

> Cart: Displays the items added to the shopping cart.

> NotFound: Renders a "Not Found" page for any invalid routes.

> ProtectedRoute: A custom component that wraps around other routes and ensures that the user is authenticated before accessing protected routes.

The project also includes context management using the CartContext. The CartContext provides the necessary methods and state to manage the shopping cart. It includes functionality for adding, removing, and updating the quantity of cart items.

The main logic for managing the cart resides in the App component, which is the entry point of the application. The App component sets up the routes using React Router and provides the CartContext.Provider to make the cart functionality available to all child components.

In terms of authentication, the project uses JWT tokens and cookies to store the user's authentication state. The LoginForm component handles the login process and, upon successful authentication, stores the JWT token in a cookie.

Additionally, the project makes API calls to fetch data from a server. The specific endpoints and methods used for fetching data are not shown in the provided code snippet.

Overall, this project provides a user-friendly interface for browsing books, adding them to a shopping cart, and managing the cart. It incorporates user authentication, data fetching from a server, and context-based state management for the cart functionality.

Note: Due to lack of books API calls I have used existing API call related to a shopping website. This API urls can be easily modified with the new books urls.

> githubLink: https://github.com/praveentamarapalli/ReactJS-furationTech

> gooleDriveLink: https://drive.google.com/drive/folders/1vlf7SDH7Tw_M_B3grSDfKhZf6aHHL45B?usp=drive_link

> pojectLiveLik: https://ptftbooks.ccbp.tech
