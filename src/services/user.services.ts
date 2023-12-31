import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces"
import { User } from "../entities"
import { userRepository } from "../repositories"
import { UserUpdateSchema, userReadSchema, userReturnSchema } from "../schemas"

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload)
  await userRepository.save(user)
  return userReturnSchema.parse(user)
}
const read = async (admin: boolean): Promise<UserRead | undefined> => {
  if (admin) {
    const user: Array<User> = await userRepository.find({ withDeleted: true })
    return userReadSchema.parse(user)
  }
}

const update = async (user: User, userId: number): Promise<UserUpdate> => {
  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId
  })
  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...user
  })
  await userRepository.save(newUserData)

  const updateUserReturn: UserUpdate = UserUpdateSchema.parse(newUserData)

  return updateUserReturn
}

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user)
}

export default { create, read, destroy, update }
