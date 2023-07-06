import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { schedule } from "./schedules.entity"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ length: 45 })
  name: string
  @Column({ length: 45, unique: true })
  email: string
  @Column({ default: false })
  admin: boolean
  @Column({ length: 120 })
  password: string
  @CreateDateColumn({ type: "date" })
  createdAt: string
  @UpdateDateColumn({ type: "date" })
  updatedAt: string
  @DeleteDateColumn({ type: "date" })
  deletedAt: string | null
  @OneToMany(() => schedule, (r) => r.userId)
  schedule: Array<schedule>
}
