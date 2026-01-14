# Express Server

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code updates during development.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd express-server
   ```

2. **Install dependencies:**
   You can use Yarn to install the necessary dependencies:
   ```bash
   yarn install
   ```

3. **Run the server:**
   Use the following command to start the server with nodemon:
   ```bash
   yarn start
   ```

4. **Access the server:**
   Open your browser and navigate to `http://localhost:8001` to see the server running.

## Docker

To run the server in a Docker container, you can build the Docker image and run it using the following commands:

1. **Build the Docker image:**
   ```bash
   docker build -t express-server .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 8001:8001 express-server
   ```

## License

This project is licensed under the MIT License.