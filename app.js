const express = require('express');
const path = require('path');
const articlesRouter = require('./routes/articleRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/articles', articlesRouter);

app.get('/', (req, res) => {
    res.redirect('/articles');
});

app.listen(5000, () => {
    console.log('port 5000');
})