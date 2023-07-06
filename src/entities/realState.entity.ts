import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"

@Entity("real_estate")
export class realEstate {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ default: false })
  sold: boolean
  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number
  @Column({ type: "integer" })
  size: number
  @CreateDateColumn({ type: "date" })
  createdAt: string
  @UpdateDateColumn({ type: "date" })
  updatedAt: string
}
