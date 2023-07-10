import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "./user.entity"
import { RealEstate } from "./realState.entity"

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ type: "date" })
  date: string
  @Column({ type: "time" })
  hour: string
  @ManyToOne(() => User, (u) => u.schedule)
  user: User
  @ManyToOne(() => RealEstate)
  realEstate: RealEstate
}
