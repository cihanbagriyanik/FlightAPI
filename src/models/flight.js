"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Flight API
----------------------------------------------------------------------------- */
//? Requaring
const { mongoose } = require("../configs/dbConnection");
/* -------------------------------------------------------------------------- */
// {
//     "flightNumber": "ABC777",
//     "airline": "Lufthansa",
//     "departure": "Munich",
//     "departureDate": "01.01.2024",
//     "arrival": "Antalya",
//     "arrivalDate": "01.01.204",
// }
/* -------------------------------------------------------------------------- */
//? Flight Model:
const FlightSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    airline: {
      type: String,
      trim: true,
      required: true,
    },

    departure: {
      type: String,
      trim: true,
      required: true,
    },

    departureDate: {
      type: Date,
      trim: true,
      required: true,
    },

    arrival: {
      type: String,
      trim: true,
      required: true,
    },

    arrivalDate: {
      type: Date,
      trim: true,
      required: true,
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    collection: "flights",
    timestamps: true,
  }
);

/* -------------------------------------------------------------------------- */
module.exports = mongoose.model("Flight", FlightSchema);
