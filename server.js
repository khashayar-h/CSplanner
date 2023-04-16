var express = require('express');
const app = express();
const resultRouter = require('./routes/result.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("views"));

app.use('/result', resultRouter);   

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app;
