const express = require('express')
const format = require('date-format')
const app = express()

const PORT = 4000 || process.env.PORT

app.get("/", (req, res)=> {
    res.status(200).send("Hello from PR")
})


app.get( "/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "patcard21",
        followers: 66,
        follows: 70,
        date: format.asString("MM.dd.yy - hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial);
});

app.get( "/api/v1/facebook", (req, res) => {
    const facebookSocial = {
        username: "patcard21",
        followers: 800,
        follows: 200,
        date: format.asString("MM.dd.yy - hh:mm:ss", new Date())
    };

    res.status(200).json(facebookSocial);
});


app.get( "/api/v1/linkedin", (req, res) => {
    const linkedinSocial = {
        username: "patcard21",
        followers: 2,
        follows: 10,
        date: format.asString("MM.dd.yy - hh:mm:ss", new Date())

    };

    res.status(200).json(linkedinSocial);
});


app.get( "/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    
    res.status(200).json( {param: req.params.token});
});



app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`);
}) 
