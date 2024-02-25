const express = require("express");
const ctrlWrapper = require("../helpers");
const { validateBody, isValidId, auth } = require("../midlewares");

const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("../schemas");

const {
  getAllContacts,
  getContactById,
  createContact,
  updateContactById,
  updateStatusContact,
  deleteContact,
} = require("../controllers/contacts");

const contactsRouter = express.Router();

contactsRouter.get("/", auth, ctrlWrapper(getAllContacts));

contactsRouter.get(
  "/:id",
  auth,
  isValidId,
  ctrlWrapper(getContactById)
);

contactsRouter.delete(
  "/:id",
  auth,
  isValidId,
  ctrlWrapper(deleteContact)
);

contactsRouter.post(
  "/",
  auth,
  validateBody(createContactSchema),
  ctrlWrapper(createContact)
);

contactsRouter.put(
  "/:id",
  auth,
  validateBody(updateContactSchema),
  isValidId,
  ctrlWrapper(updateContactById)
);

contactsRouter.patch(
  "/:id/favorite",
  auth,
  validateBody(updateFavoriteSchema),
  isValidId,
  ctrlWrapper(updateStatusContact)
);

module.exports = contactsRouter;
