const express  = require("express")

const app = express();

// function cons("") {
//     console.log("")
// }
// test()


// external/internal api call e.g file read or

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
  });


app.get('/', (req, res) => {
    res.send("--------this is the reponse---");
});
app.get('/redirect', (req, res) => {
    console.log("=====redirect==========")
    // db insertion // mail bhejhni thi // msg // 
    res.redirect("redirectroute");
});

app.get('/redirectroute', (req, res) => {

    console.log("=====redirectroute==========")
    res.send("--------this is the reponse redirectroute---");
});

































app.get('/register/signup', (req, res) => {
    res.send("--------this new route with xyz api end point--");
});


app.get('/register/sendotp', (req, res) => {
    res.send("--------this new route with xyz api end point--");
});



app.get('/register/validateOTP', (req, res) => {
    res.send("--------this new route with xyz api end point--");
});





app.get('/dashboard/', (req, res) => {
    res.send("--------this new route with xyz api end point--");
});

app.get('/dashboard/getuserlist', (req, res) => {
    res.send("--------this new route with xyz api end point--");
});

console.log("1")

console.log("2")
console.log("3")


