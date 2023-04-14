const express = require('express');
const app = express();
const port = 8080;

// app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
// app.set('view engine', 'pug'); // Sử dụng pug làm view engine

// app.get('/', function(req, res){
// 	res.send("<h2>This is my first app</h2>");
//     // res.send("Hello World");
// })

app.get('/users', function (req, res) {
    var users = [{ name: "User1", email: "user1@gmail.com" }, { name: "User2", email: "user2@gmail.com" }]
    res.render('users/index', { users: users });
})

// app.get('/users', function(req, res){
// 	res.send('<div class="users"><table><thead><tr><th> Name </th><th> Email </th></tr></thead><tbody><tr><td> User1 </td><td> user1@gmail.com </td></tr><tr><td> User2 </td><td> user2@gmail.com </td></tr></tbody></table></div>')
// })

app.listen(port, function () {
    console.log("Your app running on port " + port);
})
