var Cvrcles = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
  let newPokemon = new Pokemons({
    number: req.body.number,
    name: req.body.name,
    types: [req.body.types],
    imageUrl: req.body.imageUrl
  })
  newPokemon.save((err) => {
    if (err) {
      throw err;
    } else {
      res.status(201);
      res.send(req.body);
    }
  })
};

exports.retrieve = function (req, res) {
  Pokemons.find({}, (err, results) => {
    if (err) {
      console.log(err);
      res.send(404);
    } else {
      res.status(200);
      res.send(results);
    }
  })
};

exports.retrieveOne = function (req, res) {
    Pokemons.find({ number: req.params.number }, (err, results) => {
    if (err) {
      console.log(err);
      res.send(404);
    } else {
      res.status(200);
      res.send(results);
    }
  })
};

exports.updateOne = function (req, res) {
  Pokemons.findOneAndUpdate({ number: req.params.number }, { $set: {
      name: req.body.name,
      number: req.body.number,
      types: [req.body.types],
      imageUrl: req.body.imageUrl
    }}, { new: true }, (err, result) => {
      if (err) {
        console.log(err);
        res.send(404);
      } else {
        res.status(200);
        res.send(result);
      }
    } 
  )
};

exports.delete = function (req, res) {
   Pokemons.find({}, (err, results) => {
    if (err) {
      console.log(err);
      res.send(404);
    } else {
      let removedItem = results;
      Pokemons.remove({}, (err, removed) => {
        if (err) {
          console.log(err);
          res.send(404);
        } else {
          res.status(200);
          res.send(removedItem);
        }
      })
    }
  })
};

exports.deleteOne = function (req, res) {
  let removedItem;
  Pokemons.find({ number: req.params.number }, (err, results) => {
    if (err) {
      console.log(err);
      res.send(404);
    } else {
      let removedItem = results;
      Pokemons.remove({ number: req.params.number }, (err, removed) => {
        if (err) {
          console.log(err);
          res.send(404);
        } else {
          res.status(200);
          res.send(removedItem);
        }
      })
    }
  })
};
