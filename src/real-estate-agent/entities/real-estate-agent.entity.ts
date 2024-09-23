import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RealEstateAgent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  businessName: string;

  @Column()
  fullName: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  website?: string;

  @Column('json', { nullable: true })
  businessHours?: Record<string, string>;

  @Column({ nullable: true })
  slogan?: string;

  @Column({ type: 'int', nullable: true })
  establishedYear?: number;

  @Column({ nullable: true })
  licenseNumber?: string;
}
