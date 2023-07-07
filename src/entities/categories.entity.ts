import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ unique: true })
  name: string
  // oneToMany RealStates
}
