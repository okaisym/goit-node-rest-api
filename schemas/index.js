const {
    createContactSchema,
    updateContactSchema,
    updateFavoriteSchema,
  } = require("./contactsSchemas");
  
  const { registerSchema, loginSchema, verifySchema, } = require("./userSchemas");
  
  module.exports = {
    createContactSchema,
    updateContactSchema,
    updateFavoriteSchema,
    registerSchema,
    loginSchema,
    verifySchema,
  };