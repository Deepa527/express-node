const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json("Get All Contacts");
});

router.route("/:id").get((req,res)=>{
    res.status(200).json(`Get Contact ${req.params.id}`);
});

router.route("/").post((req,res)=>{
    res.status(200).json("Create Contact");
});

router.route("/:id").put((req,res)=>{
    res.status(200).json(`Update Contact ${req.params.id}`);
});

router.route("/:id").delete((req,res)=>{
    res.status(200).json(`Delete Contact ${req.params.id}`);
});

module.exports = router;