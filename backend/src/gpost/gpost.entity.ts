import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name:"posts" })
export class Gpost extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "datetime" })
  publication_date: Date;

  @Column({ type: "smallint" })
  user_id: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  image_url: string;

  @Column({ type: "text" })
  content: string;

}