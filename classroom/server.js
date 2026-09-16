const express = require("express");
const app = express(); 
const user = require("./routes/user.js");
const post = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secratecode"));

app.get("/getsignedcookie",(req,res)=>{
    res.cookie("made-in", "India",{signed:true});
    res.send("signed cookie sent");
})

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
});

app.get("/getcookies",(req,res)=>{
    res.cookie("greet","hello");
    res.cookie("madeIn","India");
    res.send("sent you some cookies!");
});

app.get("/",(req, res)=>{
    let{name = "anonymous"} = req.cookies;
    res.send(`Hi, ${name}`);
})

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hi, I am root!");
});

app.use("/users", user);
app.use("/posts", post);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});