const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render('home.hbs')
})

app.get('/about', function (req, res) {
    res.render('about.hbs')
  })

app.get('/project', function (req, res) {
     res.render('project.hbs')
  })

app.get('/services', function (req, res) {
    res.render('services.hbs')
  })

app.get('/contact', function (req, res) {
    res.render('contact.hbs')
  })
 
app.listen(3000 , () => {
    console.log("The server is running on port 3000");
})