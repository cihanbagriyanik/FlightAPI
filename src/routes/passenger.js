"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Flight API
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const passenger = require("../controllers/passenger");

const permissions = require("../middlewares/permissions");

/* -------------------------------------------------------------------------- */
//! URL: /passengers
router
  .route("/")
  .get(permissions.isStaffOrisAdmin, passenger.list)
  .post(permissions.isLogin, passenger.create);

router
  .route("/:id")
  .get(permissions.isStaffOrisAdmin, passenger.read)
  .put(permissions.isStaffOrisAdmin, passenger.update)
  .patch(permissions.isStaffOrisAdmin, passenger.update)
  .delete(permissions.isStaffOrisAdmin, passenger.delete);

/* ------------------------------------------------------- */
module.exports = router;
