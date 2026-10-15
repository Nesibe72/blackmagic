# Express Vanilla App

This is a simple Express.js application with a vanilla JavaScript frontend that allows users to submit their name and a message through a form. The application demonstrates basic server-client interaction using Express and standard web technologies.

## Project Structure

```
express-vanilla-app
├── public
│   ├── index.html       # HTML structure of the frontend application
│   ├── styles.css       # CSS for styling the application
│   └── script.js        # JavaScript for handling frontend logic
├── src
│   └── server.js        # Entry point of the Express.js application
├── package.json         # npm configuration file
└── README.md            # Documentation for the project
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd express-vanilla-app
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To start the server, run the following command:

```
node src/server.js
```

The application will be available at `http://localhost:3000`.

### Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Fill in your name and message in the form.
3. Click the "Speichern" button to submit the form.
4. The server will process the data and respond accordingly.

### Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

### License

This project is licensed under the MIT License. See the LICENSE file for details.