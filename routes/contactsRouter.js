const express = require("express");
const validateBody = require("../middlewares/validateBody.js");
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} = require("../controllers/contactsControllers.js");
const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("../schemas/contactsSchemas.js");
const isValidId = require("../middlewares/isValidId.js");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  isValidId,
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  isValidId,
  updateContact
);

module.exports = contactsRouter;