# Express Server

This project sets up a simple Express server that listens on port 8001. It uses Nodemon for automatic code reloading during development.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-2reb3zwv.git
   cd express-server
   ```

2. **Install dependencies**:
   You can use Yarn to install the necessary dependencies. If you don't have Yarn installed, you can install it by following the instructions on the [Yarn website](https://yarnpkg.com/getting-started/install).

   ```
   yarn install
   ```

3. **Run the server**:
   To start the server with automatic reloading, use the following command:
   ```
   yarn start
   ```

   The server will be running on `http://localhost:8001`.

## Docker

To run the server in a Docker container, you can build the Docker image and run it using the following commands:

1. **Build the Docker image**:
   ```
   docker build -t express-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.