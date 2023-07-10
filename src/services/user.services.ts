import { UserCreate, UserRead, UserReturn } from "../interfaces"
import { User } from "../entities"
import { userRepository } from "../repositories"
import { userReadSchema, userReturnSchema } from "../schemas"

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload)
  await userRepository.save(user)
  return userReturnSchema.parse(user)
}
const read = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepository.find({ withDeleted: true }))
}

const update = async (user: User, userId: number): Promise<UserReturn> => {
  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId
  })
  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...user
  })
  await userRepository.save(newUserData)

  const updateUserReturn: UserReturn = userReturnSchema.parse(newUserData)

  return updateUserReturn
}

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user)
}

export default { create, read, destroy }
