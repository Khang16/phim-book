import { BaseUuidEntity } from 'src/config/database/base-uuid.entity';
import { Column, Entity } from 'typeorm';
import { MembershipTier, UserRole, UserStatus } from 'src/shared/types';

@Entity('users')
export class User extends BaseUuidEntity {
  @Column({ type: 'varchar', length: 20, unique: true, nullable: true })
  phone: string | null;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  email: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password_hash: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  full_name: string | null;

  @Column({ type: 'varchar', length: 500, nullable: true })
  avatar_url: string | null;

  @Column({
    type: 'varchar',
    length: 50,
    default: UserRole.CUSTOMER,
  })
  role: UserRole;

  @Column({
    type: 'varchar',
    length: 50,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @Column({
    type: 'varchar',
    length: 50,
    default: MembershipTier.SILVER,
  })
  membership_tier: MembershipTier;

  @Column({ type: 'boolean', default: false })
  is_guest: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  phone_verified_at: Date | null;

  @Column({ type: 'timestamptz', nullable: true })
  email_verified_at: Date | null;
}
