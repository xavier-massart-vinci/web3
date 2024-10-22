const router = require('express').Router()
const Person = require('../models/person')

router.get("/", (req, res) => {
  Person.find({}).then(result => {
    res.send(result);
  })
})


router.get("/:id", (req, res) => {
  Person.findById(req.params.id)
  .then(person => {
    if(person){
      res.json(person);
    }else{
      res.status(404).end();
    }
  })
  .catch(error => {
    res.status(500).end();
  })

})


router.delete("/:id", (req, res) => {
  Person.findByIdAndDelete(req.params.id)
  .then(result => {
    res.status(204).end();
  })
  .catch(error => {
    res.status(500).end();
  })
})


router.post("/", (req, res) => {
  const personPayload = req.body


  const errorMessages = []
  if (!personPayload.name) {
    errorMessages.push("name must be present")
  }
  if (!personPayload.number) {
    errorMessages.push("number must be present")
  }

  Person.find({name: personPayload.name})
  .then(result => {
    if (result.length > 0) {
      errorMessages.push("name must be unique")
      return res.status(422).json({ errorMessages })

    }else{
      const person = new Person(personPayload);
      person.save().then(result => {
        return res.json(result);
      })
    }
  })
 
})


router.put("/:id", (req, res) => {
  Person.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(result => {
    res.json(result);
  })
  .catch(error => {
    res.status(500).end();
  })

})


module.exports = router
