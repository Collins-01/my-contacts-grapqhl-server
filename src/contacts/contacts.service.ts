import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dtos/create_contact.dto';
import { ContactEntity } from './entities/contact.entity';


@Injectable()
export class ContactsService {
  contacts: ContactEntity[] = [];
  async createContact(dto: CreateContactDto) {
    this.contacts.push({
      ...dto,
      id: this.contacts.length + 1,
    });

    return this.contacts[0];
  }
}
