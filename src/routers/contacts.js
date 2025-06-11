import { Router } from "express";
import { getContactsController, getContactByIdController, createContactController, patchContactController, deleteContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { isValidId } from "../middlewares/isValidId.js";
import { createContactSchema, updateContactSchema } from "../validation/contacts.js";
import { authenticate } from "../middlewares/authenticate.js";
import { checkRoles } from "../middlewares/checkRoles.js";
import { ROLES } from "../constants/index.js";

const router = Router();

router.use(authenticate);

router.get('/', checkRoles(ROLES.TEACHER), ctrlWrapper(getContactsController));
router.get('/:contactId', checkRoles(ROLES.TEACHER, ROLES.PARENT), isValidId, ctrlWrapper(getContactByIdController));
router.post('/', checkRoles(ROLES.TEACHER), validateBody(createContactSchema), ctrlWrapper(createContactController));
router.patch('/:contactId', checkRoles(ROLES.TEACHER, ROLES.PARENT), isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController));
router.delete('/:contactId', checkRoles(ROLES.TEACHER), isValidId, ctrlWrapper(deleteContactController));

export default router;