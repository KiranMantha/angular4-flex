module.exports = (router, mongoose) => { 
  /* GET api listing. */
  router.get('/', (req, res) => {
    res.send('api works');
  });

  // Get all posts
  router.get('/posts', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`${API}/posts`)
      .then(posts => {
        res.status(200).json(posts.data);
      })
      .catch(error => {
        res.status(500).send(error)
      });
  });

  return router;
}