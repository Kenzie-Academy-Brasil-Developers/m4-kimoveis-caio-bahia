import { AppDataSource } from "../data-source"
import { Address, User } from "../entities"

export default AppDataSource.getRepository(Address)
