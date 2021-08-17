const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
// const keys = require('./config/keys');
require('dotenv').config()
require('./models/User');
// require('./models/Questions');
require('./services/passport');
const cors = require('cors')
const question_routes = require("./routes/questions")

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }).then(() => {
    app.use("/api", question_routes)
    // app.use("/user", user_routes)
  });

const db = mongoose.connection;

db.on('connected', function() {
  console.log("db connected successfully");
})


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

require('./routes/authRoutes')(app);

// if (process.env.NODE_ENV === "production") {
//   //express will serve up production assets 
//   app.use(express.static('client/build'));

//   // express will serve up the html file if it doesn't recognize the route

//   const path = require('path');
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });

// }

const PORT = process.env.PORT || 9000;
app.listen(PORT);

module.exports = db;