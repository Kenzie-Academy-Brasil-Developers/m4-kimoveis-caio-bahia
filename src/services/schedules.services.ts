// Agenda uma visita a um imóvel POST /schedules
// lista todos os agendamentos de um imóvel GET /schedules/realEstate/:id

import { RealEstate, Schedule, User } from "../entities"
import { AppError } from "../errors"
import { scheduleCreate } from "../interfaces"
import { realEstateRepository, shceduleRepository, userRepository } from "../repositories"

const create = async (payload: scheduleCreate, userId: number) => {
  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
    id: Number(payload.realEstateId)
  })
  const hour = Number(payload.hour.split(":")[0])
  const date = new Date(payload.date).getDay()
  const user: User | null = await userRepository.findOneBy({
    id: userId
  })

  if (!realEstate) throw new AppError("RealEstate not found", 404)
  if (hour < 8 || hour > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
  if (date == 0 || date == 6)
    throw new AppError("Invalid date, work days are monday to friday", 400)
  if (!user) throw new AppError("User not found", 404)

  const userSchedulesSearch = await userRepository
    .createQueryBuilder("users")
    .leftJoinAndSelect("users.schedule", "client")
    .where("client.hour = :hour", { hour: payload.hour })
    .andWhere("client.date = :date", {
      date: payload.date
    })
    .andWhere("client.userId = :userId", {
      userId
    })
    .getOne()

  const realEstateScheduleSearch = await shceduleRepository
    .createQueryBuilder("schedule")
    .select()
    .where("schedule.hour= :hour AND schedule.date = :date", {
      hour: payload.hour,
      date: payload.date
    })
    .getOne()

  if (userSchedulesSearch)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    )
  if (realEstateScheduleSearch)
    throw new AppError("Schedule to this real estate at this date and time already exists", 409)

  const CreateSchedule: Schedule = shceduleRepository.create({
    ...payload,
    user,
    realEstate
  })
  await shceduleRepository.save(CreateSchedule)
  return { message: "Schedule created" }
}

export default { create }
