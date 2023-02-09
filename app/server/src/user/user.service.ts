import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from './user.entity'


@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
	){}
	async addUser(userData: User): Promise<{status: string}> {
		const user = this.userRepository.create(userData);
		await this.userRepository.save(user);
		return {status: 'OK'}
	}

	async getUser(identification): Promise<User> {
		const user = this.userRepository.findOneBy({id: parseInt(identification.id)});
		return user;
	}

}
