import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { ProjectStatus } from './project-status.enum';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  framework: string;

  @Column({
    type: 'enum',
    enum: ProjectStatus,
    default: ProjectStatus.CREATED,
  })
  status: ProjectStatus;

  @CreateDateColumn()
  createdAt: Date;
}

