import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Module({
  imports: [],
  providers: [ContactsService],
})
export class ContactsModule {}
