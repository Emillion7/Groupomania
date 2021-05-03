import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: "users" })
export class User extends BaseEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type:"varchar", length: 50 })
  first_name: string;

  @Column({ type:"varchar", length: 50 })
  last_name: string;

  @Column({ type:"varchar", length: 100 })
  email: string;

  @Column({ type:"varchar", length: 50 })
  password: string;

  @Column({ type:"varchar", length: 255, nullable: true })
  image_url: string;

  @Column({ type:"text", nullable: true })
  description: string;

}