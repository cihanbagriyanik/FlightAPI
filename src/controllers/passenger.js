"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Flight API
----------------------------------------------------------------------------- */
//? Requaring
const Passenger = require("../models/passenger");

/* -------------------------------------------------------------------------- */
//? Passenger Controller:
module.exports = {
  //! GET
  list: async (req, res) => {
    /*
        #swagger.tags = ["Passengers"]
        #swagger.summary = "List Passengers"
        #swagger.description = `
            You can send query with endpoint for search[], sort[], page and limit.
            <ul> Examples:
              <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                <li>URL/?<b>page=2&limit=1</b></li>
            </ul>
        `
    */

    const data = await res.getModelList(Passenger);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Passenger),
      data,
    });
  },

  //* CRUD Processes:
  //! POST
  create: async (req, res) => {
    /*
        #swagger.tags = ["Passengers"]
        #swagger.summary = "Create Passenger"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                "username": "test",
                "password": "1234",
                "email": "test@site.com",
                "isActive": true,
                "isStaff": false,
                "isAdmin": false,
            }
        }
    */
    const data = await Passenger.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  //! /:id -> GET
  read: async (req, res) => {
    /*
        #swagger.tags = ["Passengers"]
        #swagger.summary = "Get Single Passenger"
    */

    const data = await Passenger.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  //! /:id -> PUT / PATCH
  update: async (req, res) => {
    /*
        #swagger.tags = ["Passengers"]
        #swagger.summary = "Update Passenger"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                "Passengername": "test",
                "password": "1234",
                "email": "test@site.com",
                "isActive": true,
                "isStaff": false,
                "isAdmin": false,
            }
        }
    */

    const data = await Passenger.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Passenger.findOne({ _id: req.params.id }),
    });
  },

  //! /:id -> DELETE
  delete: async (req, res) => {
    /*
        #swagger.tags = ["Passengers"]
        #swagger.summary = "Delete Passenger"
    */

    const data = await Passenger.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
