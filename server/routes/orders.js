module.exports = (router, mongoose) => {
    var Orders = mongoose.model('Orders');

    // Get all orders
    router.get('/', (req, res) => {
    
    });

    return router;
}