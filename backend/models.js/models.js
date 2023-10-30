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
    phone_number: {
      type: int,
      required: true
    },
    hiring_date: {
      type: Date,
      required: true
    }
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
    tracking_number: {
      type: varchar(45),
      required: true
    },
    emp_id: {
      type: int,
      required: true
    },
    exp_deliver_date: {
      type: Date,
      required: false 
    },
    exp_cost: {
      type: int,
      required: false
    },
    delivery_fees: {
      type: Boolean,
      required: true
    },
    delivery_service: {
      type: varchar(45),
      required: true
    },
  },
    {
      collection: 'order'
    }
)