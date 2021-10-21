const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/fastifycrud")
  .then(() => console.log("MongoDb connected..."))
  .catch((err) => console.log(err));
