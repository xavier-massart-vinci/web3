const express = require('express');
const router = require('express').Router()
const Person = require('../models/person')
const NotFoundError = require('../utils/NotFoundError')

router.get("/", (req, res, next) => {
  Person.find({})
    .then(persons => res.json(persons))
    .catch(err => next(err))
})

router.get("/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        throw new NotFoundError()
      }
    })
    .catch(err => next(err))
})


router.delete("/:id", (req, res) => {
  Person.findByIdAndDelete(req.params.id)
  .then(result => {
    res.status(204).end();
  })
  .catch(err => next(err))
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
      .catch(err => next(err))
    }
  })
  .catch(err => next(err))
 
})


router.put("/:id", (req, res, next) => {
  const body = req.body
  const errorMessages = []
  if (!body.name) errorMessages.push("name must be present")
  if (!body.number) errorMessages.push("number must be present")
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages })
    return
  }

  const person = {
    name: body.name,
    number: body.number,
  }
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      if (updatedPerson) {
        res.json(updatedPerson)
      } else {
        throw new NotFoundError()
      }
    })
    .catch(error => next(error))
})


module.exports = router
