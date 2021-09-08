const functions = require("firebase-functions");
const express = require("express")
const cors =  require("cors")
const stripe = require("stripe")('sk_test_51JXAamL4KDfhVlMyUYvfG7pUCRBkU9CxtAlSAPvpInjGvDWTlatFrqtnFhYh6ngZHDJDUK5RAwKh6NLmS5DoamZm005Xn0vKOP')

//API//


//App config//
const app =express()



//middlewares//

app.use(cors({origin:true}));
app.use(express.json());




//Api routes//

// app.get('/',(request, response)=> response.status(200).send ('hello world'))

app.post('/Payments/create', async (request, response) => {
const total = request.query.total;
console.log('payment request recieved', total)

const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:'usd'
})
response.status(201).send({
    clientSecret:paymentIntent.client_secret,
})


}) 



//listen Command//


exports.api = functions.https.onRequest(app)




//   example endpoint//
// http://localhost:5001/buy-tech-ac05c/us-central1/api //



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
