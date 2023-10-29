import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class FileReaderService {
    
    private readonly logger = new Logger(FileReaderService.name);

    readFromDefaultDirectory() {
        this.logger.log('reading media files from the default directory...');
    }

}
