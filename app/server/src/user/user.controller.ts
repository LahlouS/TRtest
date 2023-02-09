
import { Controller, Post, Body, Get, Query, Param } from "@nestjs/common";
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor ( private readonly userService: UserService ) {}
	@Post()
	async addUser(@Body() userData) {
		return (this.userService.addUser(userData));
	}
}

@Controller('userGet')
export class UserControllerGet {
	constructor ( private readonly userService: UserService ) {}
	@Get()
	async getUser(@Query() userData) {
		console.log("usertest.id : " + userData.id);
		return (this.userService.getUser(userData));
	}
}
