import { Args, ArgsType, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { ContactEntity } from './entities/contact.entity';
import { CreateContactDto } from './dtos/create_contact.dto';
import { Contact } from './contact.model';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(private contactsService: ContactsService) {}

  @Mutation(() => Contact)
  // Auth Gurad
  async createContact(@Args('input') createContactInput: CreateContactDto) {
    const result = await this.contactsService.createContact(createContactInput);
    return result;
  }

  @Query(() => Contact)
  async getAllContacts() {
    const result = this.contactsService.contacts;
    return 'result';
  }
}
