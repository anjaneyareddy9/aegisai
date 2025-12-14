import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  framework: string;

  @Column({ default: 'CREATED' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}

