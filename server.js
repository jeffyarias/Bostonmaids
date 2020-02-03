<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const stripe = require('stripe')('sk_test_JeQ2cigQcaMk3INVX6NW1uTX');
const axios = require('axios');
var path = require('path');
var Router = require('router');
const cors = require('cors');


var router = Router();
mongoose.connect
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//app.post('/api/stripe', (req, res) => {console.log(req.body)});
app.post('/api/stripe', async (req, res) => {
    //console.log(req.body.total2)
   console.log(req.body)
   let error;
   let status;

   try { 
   const  { total2, token } = req.body;
   

const customer = await stripe.customers.create({
 email: token.email,
 source: token.id

   });
   const charge = await stripe.charges.create({
       
    amount: total2 *100,
    currency: 'usd',    
    description: 'Cleaning Services',
    customer: customer.id,
    receipt_email: token.email
    
    
    });
    console.log(charge);
   status = "success";

    


    
} catch(error) {

    console.error("Error: ", error);
    status = "failure";
}
 
 res.json({ error, status});  
    
    
    
  



});


    // app.post('/api/form', (req, res) => {
    //     // var newprice = req.body.price
     
    //      console.log(req.body);
     
     
     
         
    //      nodemailer.createTestAccount((err, account)=>{
    //      const htmlEmail = `<h3>Contact Detail</h3>
    //      <ul>
    //      <li>Name: ${req.body.name}</li>
    //      <li>Email: ${req.body.email}</li>
    //      <li>Address: ${req.body.address}</li>
    //      <li>Bedrooms: ${req.body.bedrooms}</li>
    //      <li>Bathrooms: ${req.body.bathrooms}</li>
    //      <li>Price: ${req.body.price}</li>
         
     
    //      </ul>
         
    //      `
    //      let transporter = nodemailer.createTransport({
    //      service: 'gmail',
    //      auth: {
    //       user: 'jeffreyarias21@gmail.com',
    //       pass: '182177!Scorpion'
          
     
    //      }
      
     
    //      });
     
    //      let mailOptions = {
    //       from: 'Boston Maids',
    //       to: 'jeffreyarias21@gmail.com' ,
    //       subject: 'Cleaning',
    //       text: 'Cleaning Booking',
    //       html: htmlEmail,
     
     
     
     
    //      }
         
    //  transporter.sendMail(mailOptions, (err, info)=>{
     
    //  if(err) {
     
    //  console.log(err);
     
    //  }else {
    //   console.log("Email send: " + info.response);
     
     
    //  }
     
    //  });
     
     
    //      });
    //  });
     







//app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 3001;


=======
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const stripe = require('stripe')('sk_test_JeQ2cigQcaMk3INVX6NW1uTX');


mongoose.connect
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
   
    nodemailer.createTestAccount((err, account)=>{
    const htmlEmail = `<h3>Contact Detail</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Address: ${req.body.address}</li>
    <li>Bedrooms: ${req.body.bedrooms}</li>
    <li>Bathrooms: ${req.body.bathrooms}</li>
    <li>Price: ${req.body.price}</li>
    <li>Token: ${req.body.newtoken}</li>

    </ul>
    
    `
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: 'jeffreyarias21@gmail.com',
     pass: '182177!Scorpion'
     

    }
 

    });

    let mailOptions = {
     from: 'Boston Maids',
     to: 'glorysgomez@gmail.com' ,
     subject: 'Cleaning',
     text: 'Cleaning Booking',
     html: htmlEmail,




    }
    
transporter.sendMail(mailOptions, (err, info)=>{

if(err) {

console.log(err);

}else {
 console.log("Email send: " + info.response);


}

});


    });
});

//app.post('/api/stripe', (req, res) => {console.log(req.body)});
app.post('/api/stripe', async (req, res) => {
   
   const charge = await stripe.charges.create({
        amount: 5000,
        currency: 'usd',
        description: 'Cleaning Services',
        source: req.body.id
        

    })
    

    
     
     



});


//app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 3001;


>>>>>>> e6ca041f8984e019191b23abc25f401e7a164900
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));