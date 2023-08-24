<div align="center">
  <a href="https://github.com/SGLara/pokedex-web">
    <img src="./public/pokeball-icon.png" alt="Logo" width="80" height="80">
  </a>

<h2 align="center">Pokedex WEB</h2>
<h3 align="center">This is a Pokedex app that allows you to create pokemons teams</h3>
</div>

<br />

## Built With
[![HTML5][HTML5]][HTML5-url] [![JS][JS]][JS-url] [![React][React.js]][React-url] 

## Prerequisites

Before getting started with the Pokedex WEB application, ensure that you have the following prerequisites installed on your system:

- Node.js (version 14 or higher)
- Git

## Installation

Follow the steps below to clone the repository and install the required dependencies:

1. Clone the repository using Git:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd pokedex-web
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Environment Variables

To run the Pokedex WEB application, you need to set up the required environment variables. Follow the steps below to configure your environment:

1. Copy the `.env.example` file to a new file named `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file in a text editor and add the following Firebase environment variables, provided by Firebase:

   ```plaintext
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   VITE_FIREBASE_MEASUREMENT_ID=
   ```

   Fill in the respective values for each variable.

## Firebase Authentication Setup

To enable authentication with Google and Facebook, follow the steps below:

1. Go to the Firebase console and open your project.

2. Navigate to the "Authentication" section.

3. Enable Google and Facebook as sign-in providers. Follow the provided instructions to configure the authentication settings.

4. Once the configuration is complete, you need to add the OAuth redirect URL for Facebook. To obtain the redirect URL, follow these steps:

   - Go to the Facebook developer dashboard (https://developers.facebook.com/).
   - Open your app and navigate to the "Settings" tab.
   - Under "Basic," find the "Valid OAuth Redirect URIs" field.
   - Add the URL: `https://{YOUR_APP_URL_PROVIDED_BY_FIREBASE}/__/auth/handler`.

5. Save the changes.

## Realtime Database Setup

To enable the realtime database functionality for your Pokedex WEB application, follow these steps to set up Firebase Realtime Database:

1. Go to the Firebase console and open your project.

2. Navigate to the ```Compilation > Realtime Database``` section.

3. Click on "Create database" to set up a new Firebase Realtime Database.

4. Choose the "Start in test mode" option for now. You can adjust the security rules later based on your application's needs.

5. Once the database is created, you'll see its URL. It will look something like: `https://<your-project-id>.firebaseio.com/`.

6. Open the `.env` file in your project's root directory.

7. Add the following environment variable to your `.env` file:

   ```plaintext
   VITE_FIREBASE_REALTIME_DATABASE_URL=<your-firebase-realtime-database-url>
   ```
8. Save the `.env` file.

9. In your application code, you can now use the Firebase Realtime Database SDK to interact with the database. You can import the SDK and start using it in your components or services.

> Feel free to explore the Firebase Realtime Database documentation for more information on reading and writing data: [Firebase Realtime Database Documentation](https://firebase.google.com/docs/database).
>
> With the Firebase Realtime Database integrated into your Pokedex WEB application, you can now store and retrieve data in real time for a dynamic user experience.
>
> Make sure to replace `<your-firebase-realtime-database-url>` with the actual URL you obtained from Firebase. This addition to your documentation should provide users with a clear guide on how to set up and use the Firebase Realtime Database in your Pokedex WEB application. 

## Usage

To start the Pokedex WEB application, run the following command:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

## Additional Information

- This project uses React Router for client-side routing.
- The application retrieves Pokemon data from an external API and displays it in an organized manner.
- Users can search for specific Pokemon and view detailed information about them.
- The application utilizes Firebase for authentication and stores user data in the Firebase database.

Feel free to explore the application and enjoy using the Pokedex WEB!


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[JS]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JS-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
