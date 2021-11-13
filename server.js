projectData = {};
const express =require('express');
const cors =require('cors');
const bodyParser= require('body-parser');
const app = express(); 
app.use(cors());

app.use(express.static('website'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port =3000;
const server = app.listen(port,serving);
function serving (){
    console.log (`ur port is : ${port}\n it is local host  `);
};


app.get('/all',(req,res)=>{
    "use strict";
    res.send(projectData)
});

app.post('/postData',(req,res)=>{
    "use strict";
 projectData={...req.body};
 res.send();

})
