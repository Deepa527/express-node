const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get All Contacts
//@route GET /api/contacts
//@access public 
const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create New Contact
//@route POST /api/contacts
//@access public 
const CreateContact = asyncHandler(async (req,res)=>{
    console.log("Request body", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email ||!phone){
        res.status(400);
        throw new Error("All fields are mandatory"); 
    }
    const contact = await Contact.create({name, email,phone})
    res.status(201).json(contact);
});

//@desc Get Contact
//@route GET /api/contact/:id
//@access public 
const GetContactById = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact);
});

//@desc Update Contact
//@route PUT /api/contact/:id
//@access public 
const UpdateContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updatedContact);
});

//@desc Delete Contact
//@route DELETE /api/contact/:id
//@access public 
const DeleteContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).json(contact);
});

module.exports = {getContacts, CreateContact,UpdateContact,DeleteContact,GetContactById};
