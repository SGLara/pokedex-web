<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
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
   VITE_FIREBASE_DATABASE_URL=
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

## Usage

To start the Pokedex WEB application, run the following command:

```bash
npm start
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