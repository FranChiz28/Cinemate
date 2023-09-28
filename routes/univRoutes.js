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


,(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log(errors);
        res.render('loginViews',{title:'Login', dataError: 'Please check your input' });
    }else{
        if(user1.trialEmail==req.body.email && user1.trialPassword == req.body.password){
            req.session.user = user1.trialName;
            res.redirect("/dashboard")
        } else if(user1.trialEmail==req.body.email || user1.trialPassword == req.body.password) {
            res.render('loginViews', {title: 'Login', pwError:'incorrect user/password'})
        } else {
        res.render('loginViews', {title: 'Login', dataError:'user not found'})
    }
}
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

    let movieDetails = [];

    for(let i=0; i<10; i++){
        let imdbID = movieList[i];
        let url1 = 'https://imdb8.p.rapidapi.com/title/get-overview-details?tconst='
        let url2 = '&currentCountry=US'
        const response = await axios.get(url1.concat(imdbID.concat(url2)), {
            headers:{'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
        });

        movieDetails[i] = response.data;
    }


    res.render("dashViews", {title: "Dashboard", user:req.session.user, movie1ID:movieList[0], movie2ID:movieList[1], movie3ID:movieList[2], movie4ID:movieList[3], movie5ID:movieList[4], movie6ID:movieList[5], movie7ID:movieList[6], movie8ID:movieList[7], movie9ID:movieList[8], movie10ID:movieList[9], movie1Title:movieDetails[0].title.title, movie1Image:movieDetails[0].title.image.url, movie1Rating:movieDetails[0].ratings.rating, movie1Genre:movieDetails[0].genres, movie1Release:comingSoon.data[0].releaseDate, movie2Title:movieDetails[1].title.title, movie2Image:movieDetails[1].title.image.url, movie2Rating:movieDetails[1].ratings.rating, movie2Genre:movieDetails[1].genres, movie2Release:comingSoon.data[1].releaseDate, movie3Title:movieDetails[2].title.title, movie3Image:movieDetails[2].title.image.url, movie3Rating:movieDetails[2].ratings.rating, movie3Genre:movieDetails[2].genres, movie3Release:comingSoon.data[2].releaseDate, movie4Title:movieDetails[3].title.title, movie4Image:movieDetails[3].title.image.url, movie4Rating:movieDetails[3].ratings.rating, movie4Genre:movieDetails[3].genres, movie4Release:comingSoon.data[3].releaseDate, movie5Title:movieDetails[4].title.title, movie5Image:movieDetails[4].title.image.url, movie5Rating:movieDetails[4].ratings.rating, movie5Genre:movieDetails[4].genres, movie5Release:comingSoon.data[4].releaseDate, movie6Title:movieDetails[5].title.title, movie6Image:movieDetails[5].title.image.url, movie6Rating:movieDetails[5].ratings.rating, movie6Genre:movieDetails[5].genres, movie6Release:comingSoon.data[5].releaseDate, movie7Title:movieDetails[6].title.title, movie7Image:movieDetails[6].title.image.url, movie7Rating:movieDetails[6].ratings.rating, movie7Genre:movieDetails[6].genres, movie7Release:comingSoon.data[6].releaseDate, movie8Title:movieDetails[7].title.title, movie8Image:movieDetails[7].title.image.url, movie8Rating:movieDetails[7].ratings.rating, movie8Genre:movieDetails[7].genres, movie8Release:comingSoon.data[7].releaseDate, movie9Title:movieDetails[8].title.title, movie9Image:movieDetails[8].title.image.url, movie9Rating:movieDetails[8].ratings.rating, movie9Genre:movieDetails[8].genres, movie9Release:comingSoon.data[8].releaseDate, movie10Title:movieDetails[9].title.title, movie10Image:movieDetails[9].title.image.url, movie10Rating:movieDetails[9].ratings.rating, movie10Genre:movieDetails[9].genres, movie10Release:comingSoon.data[9].releaseDate});
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