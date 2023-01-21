const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// const connection = mongoose.connect(
//   "mongodb+srv://saurabh:saurabh1234@cluster0.w0azhgz.mongodb.net/user"
// );
const connection = mongoose.connect(
  "mongodb+srv://saurabh:saurabh@mock12api.awfc2uv.mongodb.net/mock12"
);
module.exports = { connection };
