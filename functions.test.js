const axios = require('axios');

describe('URL Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(200);
        }
    })
})

describe('/login Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/login');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(200);
        }
    })
})

describe('/dashboard Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/dashboard');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/movieInfo Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/movieInfo');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/reserve Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/reserve');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema1/block1 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema1/block1');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema1/block2 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema1/block2');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema1/block3 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema1/block3');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema1/block4 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema1/block4');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema1/block5 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema1/block5');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema1/block6 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema1/block6');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema2/block1 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema2/block1');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema2/block2 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema2/block2');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema2/block3 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema2/block3');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema2/block4 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema2/block4');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema2/block5 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema2/block5');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema2/block6 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema2/block6');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema3/block1 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema3/block1');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema3/block2 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema3/block2');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema3/block3 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema3/block3');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema3/block4 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema3/block4');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema3/block5 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema3/block5');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema3/block6 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema3/block6');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema4/block1 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema4/block1');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema4/block2 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema4/block2');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema4/block3 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema4/block3');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema4/block4 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema4/block4');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema4/block5 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema4/block5');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})

describe('/cinema4/block6 Status Test', () => {
    it('should return a successful status code', async () =>{
        try{
            const response = await axios.get('https://wd77p-cinemate.onrender.com/cinema4/block6');

            expect(response.status).toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(403);
        }
    })
})
