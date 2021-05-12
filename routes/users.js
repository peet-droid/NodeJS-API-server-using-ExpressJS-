const express = require('express');

const router = express.Router();

const Users = require('../models/user')
//get all
router.get('/' ,async (req, res) => {
        try {
                const users = await Users.find()
                res.json(users)
        } catch (error) {
             res.status(500).json({massage : error.message});   
        }
})

//get one

router.get('/:id' , getUser,(req, res) => {
        res.json({name: res.user.name,
                age: res.user.age
        })
})

//create a new 

router.post('/' , async (req, res) => {
        const user = new Users({
               name: req.body.name,
               age: req.body.age
        })

        try {
                const newuser = await user.save()
                res.status(201).json(newuser)
        } catch (error) {
                res.status(404).json({massage : error.message}); 
        }
})

//update
router.patch('/' , (req, res) => {

})

//delete one

router.delete('/:id' , getUser,async (req, res) => {
        try {
                await res.user.remove()
        }
        catch (err) {
                res.status(500)
        }
})

async function getUser(req, res, next) {
        let user
        try {
                user = await Users.findById(req.params.id)
                if(user == null){
                        res.send(404);
                }
        }
        catch (error){
                res.status(404).json({massage : error.message}); 
        }

        res.user = user;
        next();
}


module.exports = router