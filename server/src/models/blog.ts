import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AppDataSource } from '.';

@Entity()
export class BlogModel implements Blog {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 250
  })
  body: string = '';

  @CreateDateColumn()
  createdAt: Date;
};

/**
 * Interface for Blog in procedures
 */
export interface Blog {
  id: string;
  body: string;
  createdAt: Date;
}