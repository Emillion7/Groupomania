import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: "users" })
export class User extends BaseEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type:"varchar", length: 50,nullable: true })
  name: string;
  
  @Column({ type:"varchar", length: 50, nullable: true })
  username: string;

  @Column({ type:"varchar", length: 100 })
  email: string;

  @Column({ type:"varchar", length: 50, nullable: true })
  password: string;

  @Column({ type:"varchar", length: 255, nullable: true })
  image_url: string;

  @Column({ type:"text", nullable: true })
  description: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}