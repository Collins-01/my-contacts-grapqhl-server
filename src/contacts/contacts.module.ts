import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsResolver } from './contacts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';

@Module({
  imports: [  TypeOrmModule.forFeature([ContactEntity]),],
  providers: [ContactsResolver,ContactsService],
})
export class ContactsModule {}
