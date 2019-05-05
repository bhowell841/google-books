const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes")

const PORT = process.env.PORT || 3003;
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
  
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT);
});