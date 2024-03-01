"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Flight API
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const reservation = require("../controllers/reservation");

const { isLogin } = require("../middlewares/permissions");

/* -------------------------------------------------------------------------- */
router.use(isLogin);

//! URL: /reservations
router
  .route("/")
  .get(isLogin, reservation.list)
  .post(isLogin, reservation.create);

router
  .route("/:id")
  .get(isLogin, reservation.read)
  .put(isLogin, reservation.update)
  .patch(isLogin, reservation.update)
  .delete(isLogin, reservation.delete);

/* ------------------------------------------------------- */
module.exports = router;
