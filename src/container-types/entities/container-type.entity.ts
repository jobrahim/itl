import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContainerTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}