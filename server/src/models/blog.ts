import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Blog {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 250
  })
  body: string = '';

  @CreateDateColumn()
  createdAt: Date;
};