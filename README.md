# Node JS example project

Source: Blunt, Booker; Sanders, Rafael; Farmer, Miguel; Richard, Boozman. Building Scalable Applications with Node.js: Learn How to Build Fast and Efficient Server-Side Applications

## Chapter 1: Introduction to Node.js
- [x] Setting Up the Node.js Development Environment

## Chapter 3: Asynchronous Programming in Node.js
- [x] Practical Example: Building an Asynchronous File Reader

## Chapter 4: Building Your First HTTP Server with Node.js
- [x] Practical Example: Build a Basic "Hello World" HTTP Server and Expand It to Handle Different Routes

## Chapter 5: Introduction to Express.js
- [ ] Practical Example: Build a Simple Web Server for a To-Do List Application

## Chapter 6: RESTful API Design with Node.js and Express
- [ ] Practical Example: Build a RESTful API for Managing a List of Tasks

## Chapter 7: Working with Databases in Node.js
- [ ] Practical Example: Build a Database-Backed Task Manager with MongoDB Using Mongoose

## Chapter 8: User Authentication and Authorization
- [ ] Example: authenticate user for task management, including 2 users with different tasks

## Chapter 9: Error Handling and Debugging in Node.js
- [ ] Practical Example: Implement a Custom Error Handler and Log Errors to a File

## Chapter 10: Building Real-Time Applications with Node.js
- [ ] Practical Example: Build a Real-Time Chat Application Using Socket.io

## Chapter 11: Performance Optimization in Node.js
- [ ] Optimizing Node.js Performance
- [ ] Caching with Redis

## Chapter 12: Building Scalable Applications
- [ ] Practical Example: Build a Simple Microservice Architecture with Multiple Node.js Applications

## Chapter 13: Testing Node.js Applications
- [ ] Practical Example: Write Unit Tests for Your REST API Routes

## Chapter 14: Deploying Node.js Applications
- [ ] Practical Example: Deploy a Node.js App to Heroku

## Chapter 15: Advanced Node.js Concepts and Beyond
- [ ] Exploring Advanced Node.js Modules
- [ ] Advanced Tools: Worker Threads and Node.js Streams API
- [ ] Exploring GraphQL with Node.js

## Conclusion
- [ ] Building Fast and Scalable Apps
- [ ] Scalability: Preparing for Growth

## Book in exercise form
### Chapter 1: Set up your node environment
1. Perform initial node setup
2. Create file `app.js`
3. Create a basic `http` server that response to any request with response code 200 and text "`Hello node!`"
4. Set the server to listen to port `3000`

**Test:** Confirm it works by running `node app.js`, going to `http://locahost:3000` and seeing "`Hello node!`" in the browser

### Chapter 3: Asynchronous programming
1. Create a new file `fileReader.js`
2. Import `fs/promises`
3. Create async function `readFile` that accepts argument `fileName`
4. Add a `try/catch` block
5. In the `try` block, use `await` to read the file and echo the contents to console
6. In the `catch` block, catch the error and echo to console
7. Outside the above function, call `readFile("example.txt")`
8. Create a file naemd `example.txt` with the text "This is a test file"

**Test:** Run `fileReader.js` using `node` and confirm the file content is echoed in console

### Chapter 4: HTTP routing
1. Use the same http server from `Set up your node environment` and file `app.js`
2. Set headers to send code `200` and content type `text/plain`
3. If the route is `/hello`, send response `Hello node!`
4. If the route is `/goodbye`, send response `Goodbye for now!`
5. For all other routes, send response `Welcome to the server!`

**Test:** Run the server and confirm routes `/`, `/hello`, and `/goodbye` send correct responses

