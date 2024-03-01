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
eğer verilen id ye ait bir yolcu var ise rezervasyona ekle id ile değil ad soyad mail ile oluşturulmak isteniyor ise
  - bu maile ait yolcu var ise onun id sini al ekle
  - yok ise yolcuyu oluştur sonra id sini ekle
*/

// {
//   "flightID": "",
//   "passengers": [
//       "",
//       "",
//       {
//           "firstName": "cihan",
//           "lastName": "ccccc",
//           "email": "cihan@site.com",
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
