const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
// require('./models/Questions');
require('./services/passport');
const cors = require('cors')
const question_routes = require("./routes/Questions")

const app = express();

mongoose.connect(keys.mongoURI, {
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
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT);

module.exports = db;