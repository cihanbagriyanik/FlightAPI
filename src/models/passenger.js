"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Flight API
----------------------------------------------------------------------------- */
//? Requaring
const { mongoose } = require("../configs/dbConnection");
/* -------------------------------------------------------------------------- */
// {
//     "firstName": "cihan",
//     "lastName": "ccccc",
//     "gender": "M",
//     "email": "cihan@site.com",
//     "createdId": ""
// }
/* -------------------------------------------------------------------------- */
//? Passenger Model:
const PassengerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
    },

    gender: {
      type: String,
      trim: true,
      enum: ["Male", "Female", null],
      default: null,
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email field must be required"],
      unique: [true, "There is this email. Email field must be unique"],

      validate: [
        (email) => {
          const regexEmailCheck =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return regexEmailCheck.test(email);
        },
        "Email type is not correct.",
      ],
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    collection: "passengers",
    timestamps: true,
  }
);

/* -------------------------------------------------------------------------- */
module.exports = mongoose.model("Passenger", PassengerSchema);
