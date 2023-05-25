const express = require("express");
const router = express.Router();
const {getContacts, CreateContact,UpdateContact,DeleteContact,GetContactById} = require("../controllers/contactController.js");

router.route("/").get(getContacts).post(CreateContact);

router.route("/:id").get(GetContactById).put(UpdateContact).delete(DeleteContact);

module.exports = router;