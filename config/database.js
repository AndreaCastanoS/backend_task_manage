const mongoose = require("mongoose");
const connection = async () => {
  try {
    //
    mongoose.connect(
      process.env.DB,
      {}
    );
    console.log("connected to dabase");
  } catch (err) {
    console.log(err.message);
  }
};
connection();
