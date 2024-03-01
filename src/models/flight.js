"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Flight API
----------------------------------------------------------------------------- */
//? Requaring
const { mongoose } = require("../configs/dbConnection");
/* -------------------------------------------------------------------------- */
// {
//     "flightNumber": "LFT 101",
//     "airline": "Lufthansa",
//     "departure": "Munich",
//     "departureDate": "2024-01-01 10:00:00",
//     "arrival": "Antalya",
//     "arrivalDate": "2024-01-01 16:00:00",
//     "createdId": ""
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
      required: true,
    },

    arrival: {
      type: String,
      trim: true,
      required: true,
    },

    arrivalDate: {
      type: Date,
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
