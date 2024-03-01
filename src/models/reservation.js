"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | HotelAPI
----------------------------------------------------------------------------- */
//? Requaring
const { mongoose } = require("../configs/dbConnection");

/* -------------------------------------------------------------------------- */
// {
//   "flightId": "",
//   "passengers": [
//       "",
//       ""
//   ]
// }

/*
! Reservation Plus
If there is a passenger with the already logged in user the given ID , add it to the reservation auto. If you want to create a name and surname via e-mail, not with an ID like a for other passengers(exp: friend, etc...).
   - If there is a passenger belonging to this e-mail, get his/her ID and add it.
   - If there is none, create the passenger and then add its ID.
*/

// {
//   "flightID": "",
//   "passengers": [
//       "",
//       "",
//       {
//           "firstName": "xxxxx",
//           "lastName": "yyyyy",
//           "email": "xxxxx@site.com",
//       }
//   ]
// }
/* -------------------------------------------------------------------------- */
//? Reservation Model:
const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    passengers: [],
  },

  {
    collection: "reservations",
    timestamps: true,
  }
);

/* -------------------------------------------------------------------------- */
module.exports = mongoose.model("Reservation", ReservationSchema);
