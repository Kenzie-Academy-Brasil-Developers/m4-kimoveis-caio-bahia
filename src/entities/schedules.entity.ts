import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "./user.entity"
import { realEstate } from "./realState.entity"

@Entity("schedules")
export class schedule {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ type: "date" })
  date: string
  @Column({ type: "time" })
  hour: string
  @ManyToOne(() => User, (u) => u.schedule)
  user: User
  @ManyToOne(() => realEstate)
  realEstate: realEstate
}
