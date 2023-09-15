const express = require('express');

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

router.get('/', ctrl.getAll);

router.get('/:contactId',isValidId, ctrl.getById);

router.post('/', validateBody(schemas.schemaAdd), ctrl.add);

router.delete('/:contactId', isValidId, ctrl.deleteById);

router.put('/:contactId', isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite); 

router.patch("/:contactId/favorite", isValidId, validateBody)
module.exports = router;