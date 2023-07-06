import { Repository } from "typeorm"
import { UserCreate } from "../interfaces"
import { User } from "../entities"
import { AppDataSource } from "../data-source"
import { userRepository } from "../repositories"

const create = async (payload: UserCreate): Promise<User> => {
  const user: User = userRepository.create(payload)
  await userRepository.save(user)
  return user
}
const read = async (): Promise<Array<User>> => {
  return await userRepository.find()
}

// const update = async (): Promise => {
//   return
// }

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user)
}

export default { create, read, destroy }
