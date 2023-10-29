import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { FileReaderService } from './file-reader/file-reader.service';

@Module({
  imports: [MediaModule],
  controllers: [AppController],
  providers: [AppService, FileReaderService],
})
export class AppModule {}
