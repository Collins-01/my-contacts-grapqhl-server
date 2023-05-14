import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
// @Entity('contacts')
export class Contact {
  @Field(() => Int)
  // @PrimaryGeneratedColumn()
  id: number;

  @Field()
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
