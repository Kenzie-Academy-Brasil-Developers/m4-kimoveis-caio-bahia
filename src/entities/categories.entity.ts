import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { realEstate } from "./realState.entity"

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ length: 45, unique: true })
  name: string

  @OneToMany(() => realEstate, (r) => r.category)
  realEstate: Array<realEstate>
}
