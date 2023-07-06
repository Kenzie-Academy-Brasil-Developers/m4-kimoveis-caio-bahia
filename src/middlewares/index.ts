import { validateBody } from "./validateBody.middleware"
import { idExists } from "./idExists.middleware"
import { handleError } from "./handleError.middleware"

export default { validateBody, idExists, handleError }
