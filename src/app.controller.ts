import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Request } from 'express';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request) {
    return { msg: 'logged in' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Req() req: Request) {
    return req.user;
  }
}
