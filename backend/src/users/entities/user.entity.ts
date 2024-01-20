import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  super_admin = 'SUPER_ADMIN',
  hotel_admin = 'HOTEL_ADMIN',
  customer = 'CUSTOMER',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  full_name: string;

  @Column({ unique: true })
  email: string;
  
  @Column({ select: false })
  password: string;

}
