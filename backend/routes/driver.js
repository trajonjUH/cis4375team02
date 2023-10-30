const express = require('express')
const router = express.Router()

const org = process.env.ORG

// GET/READ

//GET 10 most recent drivers
router.get('/', (req, res, next) => {
    drivers
        .find({ orgs: org}, (error, data) => {
            // error will pop up
            if (error) {
                return next(error)
            } else {
            // show the drivers
                return res.json(data)
            }
        })
        .sort({ updatedAt: -1})
        // limit how many drivers will be shown
        .limit(10)
})

//GET 1 driver by ID
router.get('/id/:id', (req, res, next) => {
    // use findOne instead of find to not return array
    clients.findOne({ _id: req.params.id, orgs: org }, (error, data) => {
      if (error) {
        return next(error)
      } else if (!data) {
        res.status(400).send('Client not found')
      } else {
        res.json(data)
      }
    })
})

//GET driver by first name and last name
router.get('/search', (req, res, next) => {
    const dbQuery = { orgs: org }
    switch (req.query.searchBy) {
      case 'name':
        dbQuery.firstName = { $regex: `^${req.query.firstName}`, $options: 'i' }
        dbQuery.lastName = { $regex: `^${req.query.lastName}`, $options: 'i' }
        break
      case 'number':
        dbQuery['phoneNumber.primary'] = {
          $regex: `^${req.query['phoneNumber.primary']}`,
          $options: 'i'
        }
        break
      default:
        return res.status(400).send('invalid searchBy')
    }
    clients.find(dbQuery, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})

// POST/CREATE

//POST driver
router.post('/', (req, res, next) => {
    const newDriver = req.body
    newDriver.orgs = [org]
    Driver.create(newDriver, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})

// PUT/UPDATE

//PUT driver by ID
router.put('/update/:id', (req, res, next) => {
    clients.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})

//PUT Driver that already existing
router.put('/register/:id', (req, res, next) => {
    driver.findByIdAndUpdate(
      req.params.id,
      { $push: { orgs: org } },
      (error, data) => {
        if (error) {
          console.log(error)
          return next(error)
        } else {
          res.send('Driver has been updated')
        }
      }
    )
})

// DELETE/DELETE

//DELETE driver by ID
router.delete('/:id', (req, res, next) => {
    driver.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else if (!data) {
        res.status(400).send('Driver not found')
      } else {
        res.send('Driver deleted')
      }
    })
})

