const express = require("express");
const router = express.Router();
const axios = require('axios');
const {check, validationResult} = require('express-validator');

const user1 = {
    trialName: "TestUser",
    trialEmail: "test@test.com",
    trialPassword: "12345678"
};

router.get("/", (req, res)=>{
    res.render("loginViews", {title: "Login"});
});

router.get("/login", (req, res)=>{
    res.render("loginViews", {title: "Login"});
});

router.post("/login", [
    check('email')
    .notEmpty()
    .withMessage('email is required.'),

    check('password')
    .notEmpty()
    .withMessage('password is required.')
    .isLength({min:8})
    .withMessage('password must be at least 8 characters.')
]


,async (req, res)=>{
    //const email = req.body.email;
    //const password = req.body.password;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log(errors);
        res.render('loginViews',{title:'Login', dataError: 'Please check your input' });
    }

    const { email, password } = req.body;

    try {
        const response = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
    
        if (response.data.length === 1) {
            req.session.user = response.data[0];
            res.redirect("/dashboard")
        } else {
            res.render('loginViews', {title: 'Login', dataError:'user not found'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
    //else{
//         if(user1.trialEmail==req.body.email && user1.trialPassword == req.body.password){
//             req.session.user = user1.trialName;
//             res.redirect("/dashboard")
//         } else if(user1.trialEmail==req.body.email || user1.trialPassword == req.body.password) {
//             res.render('loginViews', {title: 'Login', pwError:'incorrect user/password'})
//         } else {
//         res.render('loginViews', {title: 'Login', dataError:'user not found'})
//     }
// }
});


router.get("/dashboard", async (req, res)=>{

    if(req.session.user){

    const comingSoon = await axios.get('https://imdb8.p.rapidapi.com/title/get-coming-soon-movies', {
        params: {
            homeCountry: 'US',
            purchaseCountry: 'US',
            currentCountry: 'US'
          },
          headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
          }
    })

    let movieList=[];

    for(let i=0; i<10; i++){
        let endpoint = comingSoon.data[i].id;
        let startIndex = endpoint.indexOf('/title/') + 7;
        let endIndex = endpoint.indexOf('/', startIndex);

        if (startIndex !== -1 && endIndex !== -1){
            let imdbID = endpoint.substring(startIndex,endIndex);
            movieList.push(imdbID);
        }else {
            console.log('Pattern not found in URL.');
        }
    }

    // console.log(movieList); tbc - insert axios to get movie details

    res.render("dashViews", {title: "Dashboard", user:req.session.user});
    }else{
        res.sendStatus(403);
    }
});

router.get('/movieInfo', async(req,res)=>{
if(req.session.user){
        try{
            const cinema1 = await axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt26533869&currentCountry=US', {
                headers:{'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
            });
            const cinema2 = await axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt13086266&currentCountry=US', {
                headers:{'X-RapidAPI-Key':  process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
            })
            const cinema3 = await axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt10160976&currentCountry=US', {
                headers:{'X-RapidAPI-Key':  process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
            })
        
            const cinema4 = await axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt22687790&currentCountry=US', {
                headers:{'X-RapidAPI-Key':  process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
            })
        
            res.render('movieInfoViews', {title: 'Movie Info', c1Title:cinema1.data.title.title, c1Genre:cinema1.data.genres, c1Rating:cinema1.data.ratings.rating, c1Plot:cinema1.data.plotOutline.text, c1Image:cinema1.data.title.image.url,c2Title:cinema2.data.title.title, c2Genre:cinema2.data.genres, c2Rating:cinema2.data.ratings.rating, c2Plot:cinema2.data.plotOutline.text, c2Image:cinema2.data.title.image.url,c3Title:cinema3.data.title.title, c3Genre:cinema3.data.genres, c3Rating:cinema3.data.ratings.rating, c3Plot:cinema3.data.plotOutline.text, c3Image:cinema3.data.title.image.url,c4Title:cinema4.data.title.title, c4Genre:cinema4.data.genres, c4Rating:cinema4.data.ratings.rating, c4Plot:cinema4.data.plotOutline.text, c4Image:cinema4.data.title.image.url})
        } catch (error) {
            console.error(error);
            res.status(500).send('Error');
        }
    }else{
        res.sendStatus(403);
    }
})


router.get("/reserve", async (req, res)=>{
    if(req.session.user){
        try{
            const cinema1 = await axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt26533869&currentCountry=US', {
                headers:{'X-RapidAPI-Key':  process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
            });
            const cinema2 = await axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt13086266&currentCountry=US', {
                headers:{'X-RapidAPI-Key':  process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
            })
            const cinema3 = await axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt10160976&currentCountry=US', {
                headers:{'X-RapidAPI-Key':  process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
            })
        
            const cinema4 = await axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt22687790&currentCountry=US', {
                headers:{'X-RapidAPI-Key':  process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
            })
        
            res.render('selectMovieViews', {title: 'Select Movie', c1Title:cinema1.data.title.title, c2Title:cinema2.data.title.title, c3Title:cinema3.data.title.title, c4Title:cinema4.data.title.title, c1Image:cinema1.data.title.image.url, c2Image:cinema2.data.title.image.url, c3Image:cinema3.data.title.image.url, c4Image:cinema4.data.title.image.url})
        } catch (error) {
            console.error(error);
            res.status(500).send('Error');
        }
    }else{
        res.sendStatus(403);
    }
});

router.get("/cinema1/block1", (req, res)=>{
    // if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    // }else{
    //     res.sendStatus(403);
    // }
});

router.get("/cinema1/block2", (req, res)=>{
    // if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    // }else{
    //     res.sendStatus(403);
    // }
});

router.get("/cinema1/block3", (req, res)=>{
    // if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    // }else{
    //     res.sendStatus(403);
    // }
});

router.get("/cinema1/block4", (req, res)=>{
    // if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    // }else{
    //     res.sendStatus(403);
    // }
});

router.get("/cinema1/block5", (req, res)=>{
    // if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    // }else{
    //     res.sendStatus(403);
    // }
});

router.get("/cinema1/block6", (req, res)=>{
    // if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    // }else{
    //     res.sendStatus(403);
    // }
});

router.get("/cinema2", (req, res)=>{
    if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    }else{
        res.sendStatus(403);
    }
});

router.get("/cinema3", (req, res)=>{
    if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    }else{
        res.sendStatus(403);
    }
});

router.get("/cinema4", (req, res)=>{
    if(req.session.user){
        res.render("cinemaSeatViews", {title: "Select Seat"});
    }else{
        res.sendStatus(403);
    }
});

router.get("/logout", (req, res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.render('loginViews', {title: 'Login', dataError:'logged out successfully!'});
        }
    });
});



module.exports = router;