import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FileReaderService } from './file-reader/file-reader.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly fileReaderService: FileReaderService) {}

  @Get()
  getHello(): string {
    this.fileReaderService.readFromDefaultDirectory();
    return this.appService.getHello();
  }
}
