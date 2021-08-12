import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContainerTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isoType: string;

  @Column()
  name: string;
}
