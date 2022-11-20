const express = require("express");
const App = express();
const bodyparser = require("body-parser");
const serverConfig = require("./config/server.config");
const router = require("./router/");
App.use(bodyparser.json());
App.use(router);

App.listen(serverConfig.PORT, () => {
  console.log(`Serveris running on http://localhost:${serverConfig.PORT}`);
});
 