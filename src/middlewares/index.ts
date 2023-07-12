import { validateBody } from "./validateBody.middleware"
import { idExists } from "./idExists.middleware"
import { handleError } from "./handleError.middleware"
import { isAdmin } from "./isAdmin.middleware"
import { verifyToken } from "./verifyToken.middleware"
import { isOwner } from "./isOwner.middleware"
import { uniqueCategory } from "./uniqueCategory.middleware"
import { uniqueEmail } from "./uniqueEmail.middleware"
import { CheckAdress } from "./checkAddress.middleware"
import { isDeleted } from "./isDeleted.middleware"

export default {
  validateBody,
  idExists,
  handleError,
  isAdmin,
  verifyToken,
  isOwner,
  uniqueCategory,
  uniqueEmail,
  CheckAdress,
  isDeleted
}
