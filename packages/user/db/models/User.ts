import { Column, Entity, Index } from 'typeorm';

@Index('user_pkey', ['id'], { unique: true })
@Entity('user', { schema: 'public' })
export class User {
  @Column('text', { primary: true, name: 'id' })
  id!: string;

  @Column('text', { name: 'first_name' })
  firstName!: string;

  @Column('text', { name: 'last_name' })
  lastName!: string;

  @Column('text', { name: 'email' })
  email!: string;

  @Column('text', { name: 'password' })
  password!: string;
}