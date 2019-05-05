const router = require("express").Router();
const db = require('./../models/bookSchema');

router.get("/api/books", function(req, res){
    db.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

router.post("/api/books", function(req, res){
    db.create(req.body)
    .then(() => {
        console.log(res)
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.delete("/api/books", function(req, res){
    console.log("server side: " + req.params.id)
    db.findOne({ id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
})

module.exports = router;