import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
// @Entity('contacts')
export class ContactEntity {
  @Field(() => Int)
  // @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  // @Column({ unique: true })
  email: string;

  @Field()
  // @Column()
  phone: string;

  @Field()
  // @Column()
  address: string;
}
