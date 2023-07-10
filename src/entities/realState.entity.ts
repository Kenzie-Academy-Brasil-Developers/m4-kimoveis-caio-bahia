import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { Category } from "./categories.entity"
import { Address } from "./addresses.entity"
import { Schedule } from "./schedules.entity"

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ type: "boolean", default: false })
  sold: boolean
  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string
  @Column({ type: "integer" })
  size: number
  @CreateDateColumn({ type: "date" })
  createdAt: string | Date
  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date

  @ManyToOne(() => Category, (c) => c.realEstate)
  category: Category

  @OneToOne(() => Address, (a) => a.RealEstate)
  @JoinColumn()
  address: Address

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Array<Schedule>
}
