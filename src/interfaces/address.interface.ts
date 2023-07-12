import { z } from "zod"
import { Repository } from "typeorm"
import { Address } from "../entities"
import { addressSchemaCreate } from "../schemas"

type addressRepo = Repository<Address>
type addressCreate = z.infer<typeof addressSchemaCreate>

export { addressRepo, addressCreate }
