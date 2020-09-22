const express = require('express')
const path = require("path")
const hbs = require('hbs')

const app = express();



app.set('view engine',hbs)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));




app.use((req,res,next)=>{

  let requestDate = new Date();
  let day = requestDate.getUTCDay() 
  let time = requestDate.getUTCHours() 

  if(day>5 || time<9 || time>17 )  
  res.render('NotInWork.hbs')
  
  next()
})


  app.get('/contact', (req, res) => {

    const data = {
      name : "Societé BM"
      ,tel:"+2200220022002"
      ,adress:"tunis,Tunisia"
    }

    res.render('contact.hbs',{data});
  });
  
  app.get('/services', (req, res) => {
    res.render('services.hbs');
  });

  app.use( (req, res) => {
    res.render('index.hbs');
  });
  



const port = 5000 ;
app.listen(5000,(err)=>{
    if(err) console.log(err)
    console.log("running in port : "+port)
})