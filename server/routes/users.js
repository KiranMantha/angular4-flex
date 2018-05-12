module.exports = (router, mongoose) => {
    const Users = mongoose.model('Users');
    // Get all user
    router.get('/', (req, res) => {
    
    });

    // save user
    router.post('/register', (req, res) => {
        let userData = req.body;
        console.log('userData: ', userData);
        let user = new Users(userData);
        console.log('userModel Mongoose: ', user);
        user.save((err, regUser) => {
            if(err) {
                console.log(err);
            } else {
                res.status(200).send(regUser);
            }
        });
    });

    return router;
}