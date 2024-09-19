const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use default middlewares (like CORS, static, etc.)
server.use(middlewares);

// Route the JSON Server to serve your mock database
server.use(router);

// Start the server
const PORT =  "https://react-query-online-shop.vercel.app";
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
