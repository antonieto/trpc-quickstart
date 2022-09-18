import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AppDataSource } from '.';

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
