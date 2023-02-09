import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	firstname: string;

	@Column({ length: 100 })
	lastname: string;

	@Column({ default: true })
	active: boolean;
}
