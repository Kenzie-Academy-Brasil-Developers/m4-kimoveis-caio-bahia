// Criação de um imóvel POST /realEstate
// Lista todos os imóveis GET/realEstate

import { AppDataSource } from "../data-source"
import { Address, Category, RealEstate } from "../entities"
import { AppError } from "../errors"
import { CategoryRepo, realEstateCreate, realEstateRepo } from "../interfaces"
import { addressCreate, addressRepo } from "../interfaces/address.interface"
import { addressRepository, categoryRepository, realEstateRepository } from "../repositories"

const create = async (payload: realEstateCreate): Promise<RealEstate> => {
  const CheckAdress: Address | null = await addressRepository.findOneBy({
    number: String(payload.address.number)
  })
  const CheckStreet: Address | null = await addressRepository.findOneBy({
    number: String(payload.address.street)
  })
  const CheckCity: Address | null = await addressRepository.findOneBy({
    number: String(payload.address.city)
  })
  const CheckState: Address | null = await addressRepository.findOneBy({
    number: String(payload.address.state)
  })

  if (CheckAdress && CheckCity && CheckState && CheckStreet) {
    throw new AppError("Address already exists", 409)
  }

  const CreateAddress: addressCreate = addressRepository.create(payload.address)
  await addressRepository.save(CreateAddress)

  const checkCategory: Category | null = await categoryRepository.findOneBy({
    id: Number(payload.categoryId)
  })

  if (!checkCategory) {
    throw new AppError("Category not found", 404)
  }

  const realEstateCreate: RealEstate = realEstateRepository.create({
    ...payload,
    address: CreateAddress,
    category: checkCategory
  })

  await realEstateRepository.save(realEstateCreate)
  return realEstateCreate
}
const read = async (): Promise<Array<RealEstate>> => {
  const GetAll: Array<RealEstate> = await realEstateRepository.find({
    relations: { address: true }
  })

  return GetAll
}
export default { create, read }
