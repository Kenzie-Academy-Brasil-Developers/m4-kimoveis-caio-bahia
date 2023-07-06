import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ type: "date" })
  date: string
  @Column({ type: "time" })
  hour: string
}
