module.exports = (router, mongoose) => {
    const Users = mongoose.model('Users');

    // Get all users
    router.get('/', (req, res) => {
    
    });

    // save user
    router.post('/register', (req, res) => {
        let userData = req.body;
        let user = new Users(userData);
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