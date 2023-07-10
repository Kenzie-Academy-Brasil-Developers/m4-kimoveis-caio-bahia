import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { realEstate } from "./realState.entity"

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column({ length: 45 })
  street: string
  @Column({ length: 8 })
  zipCode: string
  @Column({ type: "varchar", length: 7, nullable: true })
  number?: string | null | undefined
  @Column({ length: 20 })
  city: string
  @Column({ length: 2 })
  state: string
  @OneToOne(() => realEstate, (r) => r.address)
  realEstate: realEstate
}
