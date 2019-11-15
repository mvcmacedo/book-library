const server = require('./app');

server.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});
