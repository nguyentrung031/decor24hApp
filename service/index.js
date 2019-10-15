const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const Data = require('./database/Decor24hDB.json');
const user = require('./database/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send('hello from server!')
});
app.get('/api/TinTuc', (req, res) => {
    res.json(Data);
});
app.get('/api/getEmail', (rep, res) =>{
    res.json(user)
});
app.post('/api/addEmail',(rep, res) =>{
    var param = rep.body;
    var Email = param.Email;
    var resData = {
        "Email":Email
    }
    res.status(200).send({ success:true,massage:'Thanh cong', user:resData});
    res.json(user.push(resData));
});
app.listen(5000, () => {
    console.log('App listening on port 5000')
})