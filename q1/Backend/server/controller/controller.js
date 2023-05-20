var userDB = require('../model/model');

// Create and save user
exports.create = (req, res) => {
    // Validate 
    if(!req.body){
        res.status(400).send({message: "content cannot be empty"})
        return;
    }
    // New user
    const user = new userDB({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        query:req.body.query
    })

    // Save data in the database
    user.save(user)
    .then(() => {
        res.redirect('/')
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "some error occured while create operation"
        })
    })

}