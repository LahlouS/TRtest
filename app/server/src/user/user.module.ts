import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user.service'
import { UserController, UserControllerGet } from './user.controller'
import { User } from './user.entity'

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [ UserController, UserControllerGet ],
	providers: [ UserService ]
})
export  class UsersModule {}
