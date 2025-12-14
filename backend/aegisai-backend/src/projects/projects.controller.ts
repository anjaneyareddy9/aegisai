import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Post()
  create(@Body() body: { name: string; framework: string }) {
    return this.projectsService.create(body.name, body.framework);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }
}

