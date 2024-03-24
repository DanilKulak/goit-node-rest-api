import Contact from "../models/Contact.js";

const getAllContacts = () => Contact.find();

const getOneContact = id => Contact.findById(id);
   
const createContact = data => Contact.create(data);

const updateContact = (id, data) => Contact.findByIdAndUpdate(id, data);

const deleteContact = id => Contact.findByIdAndDelete(id);

const updateStatusContact = (contactId, body) => Contact.findByIdAndUpdate(contactId, { favorite: body.favorite }, { new: true });

export default {
    getAllContacts,
    getOneContact,
    deleteContact,
    createContact,
    updateContact,
    updateStatusContact,
};
