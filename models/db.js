const mongoose = require("mongoose");

/* ----- Your DB ------ */
const dbUrl =
  "mongodb://capsule:azerty@saidazgl-0zpfc.mongodb.net/mymovizapp?retryWrites=true&w=majority";
/* --------------------- */

/* ----- DB Options ------ */
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log("Your database is operational...");
  }
});
