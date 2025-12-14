import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  create(name: string, framework: string) {
    const project = this.projectRepo.create({
      name,
      framework,
    });
    return this.projectRepo.save(project);
  }

  findAll() {
    return this.projectRepo.find();
  }
}

