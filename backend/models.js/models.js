const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// collection for Drivers
const driversDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    f_name: {
      type: String,
      required: true
    },
    l_name: {
      type: String,
      required: true
    },
    emp_id: {
      type: int,
      required: true
    },
  },
  {
    collection: 'drivers'
  }
)

// collection for Orders
const orderDataSchema = new Schema(
    {
        _id: { type: String, default: uuid.v1 },
        order_id: {
            type: int,
            required: true
      },
      emp_id: {
        type: int,
        required: true
      },
      cont_id: {
        type: int,
        required: true
      }
    },
    {
      collection: 'order'
    }
  )