import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"

@Entity("schedules")
export class schedule {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ type: "date" })
  date: string
  @Column({ type: "time" })
  hour: string
}
