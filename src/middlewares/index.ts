import { validateBody } from "./validateBody.middleware"
import { idExists } from "./idExists.middleware"
import { handleError } from "./handleError.middleware"
import { isAdmin } from "./isAdmin.middleware"
import { verifyToken } from "./verifyToken.middleware"
import { isAdminOrOwner } from "./isAdminOrOwner.middleware"
import { uniqueCategory } from "./uniqueCategory.middleware"
import { uniqueEmail } from "./uniqueEmail.middleware"

export default {
  validateBody,
  idExists,
  handleError,
  isAdmin,
  verifyToken,
  isAdminOrOwner,
  uniqueCategory,
  uniqueEmail
}
