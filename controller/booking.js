require("dotenv").config();
const express = require('express');
const router = express.Router();
const { response } = require('express');
const app = express();
const db = require("../models");

app.use(express.static(`${__dirname}/public`));

// booking page 
router.get('/', (req, res) => {
    db.Item.find( { category: 'departure' })
    .then((items) => {
    res.render('booking', {items})
    })
    .catch(err=>{
    console.log(err)
    res.status.apply(503).send({message: 'Database asleep?'})
    })
})

router.get('/departureOne', (req, res) => {
    res.render('departureOne')
})

router.get('/departureTwo', (req, res) => {
    res.render('departureTwo')
})
router.get('/departureThree', (req, res) => {
    res.render('departureThree')
})

// suit page 
// router.get('/suit', (req, res) => {
//     db.Item.find( { category: 'suit' })
//     .then((items) => {
//     console.log(items)
//     res.render('suit', {items})
//     })
//     .catch(err=>{
//     console.log(err)
//     res.status.apply(503).send({message: 'Database asleep?'})
//     })
// })

router.post('/suit', (req,res) => 
{   
    db.User.create(req.body)
    .then(createdUser => {
        console.log(createdUser)
        res.render('suit', {'userId':createdUser._id})
        console.log(createdUser._id)
    })
    .catch(err => {
        console.log('Error while creating new post', err)
        if(err.name === 'Valication Error'){
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(503).send({message: "Database or server error!"})
        }
    })
})

router.put('/:id/edit', (req,res)=>
{
    db.User.findOneAndUpdate({
        _id:req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedUser => {
        res.render('cabin', {"user":updatedUser._id})
        console.log(updatedUser)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: 'server error'})
    })
})

router.put('/cabin/:id/edit', (req,res)=>
{
    db.User.findOneAndUpdate({
        _id:req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedUser => {
        res.render('dining', {"user":updatedUser._id})
        console.log(updatedUser)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: 'server error'})
    })
})


router.put('/diet/:id/edit', (req,res)=>
{
    db.User.findOneAndUpdate({
        _id:req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedUser => {
        res.render('confirm', {updatedUser})
        console.log(updatedUser)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: 'server error'})
    })
})


router.get('/discovery', (req, res) => {
    res.render('discovery')
})



// router.get('/:id', (req,res) =>
// {
//     db.Post.findById(req.params('id'))
//     .then(foundPost => {
//         if(foundPost){
//             res.send(foundPost)
//         }else{
//             res.status(404).send({message: 'Resource not located'})
//         }
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(503).send({message: 'Service Unavailable'})
//     })
// })


// router.put('/:id', (req,res)=>{
//     db.User.findOneAndUpdate({
//         '_id':req.params.id
//     },
//     req.body,
//     {
//         new: true
//     })
//     .then(element => {
//         res.send(element)
//         console.log(element)
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(503).send({message: 'server error'})
//     })
// })

//dining page
router.get('/dining', (req, res) => {
    db.Item.find( { category: 'diet' })
    .then((items) => {
    console.log(items)
    res.render('dining', {items})
    })
    .catch(err=>{
    console.log(err)
    res.status.apply(503).send({message: 'Database asleep?'})
    })

})

// cabin page 
router.get('/cabin', (req, res) => {
    db.Item.find( { category: 'cabin' })
    .then((items) => {
    console.log(items)
    res.render('cabin', {items})
    })
    .catch(err=>{
    console.log(err)
    res.status.apply(503).send({message: 'Database asleep?'})
    })

})


module.exports = router;