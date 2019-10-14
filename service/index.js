const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const Data = require('./Decor24hDB.json');
const DataEmail = require('./EmailDB.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send('hello from server!')
});
app.get('/api/TinTuc', (req, res) => {
    res.json(Data);
});
app.get('/api/addEmail', (rep, res) =>{
    res.json(DataEmail)
});
app.post('/api/addEmail',(rep, res) =>{
    debugger
    var param = rep.body;
    var Email = param.Email;
    var resData = {
        "Email":Email
    }
        // DataEmail.handleClick(Email);
    res.status(200).send({ success:true,massage:'Thanh cong', data:resData});
    // res.status(200).send({ success:true,massage:'Thanh cong', data: responseData});
});
app.listen(5000, () => {
    console.log('App listening on port 5000')
})