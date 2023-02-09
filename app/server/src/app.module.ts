import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module'
/*
* So the TypeOrmModule is a nest module that interface typeOrm DataSource initial object to configure the
* connection with the database.
* the main advantages is that you are not dealing with the scope and integration of your typeOrm package
* All the decorators and entities models will be accessible in all your project
*/

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [__dirname + "/user/*.js"], //User
    synchronize: true,

  }),
  UsersModule
],
  // here we have called our getTypeOrmConfig() properties from our configService class that allow us to have a more flexible environnement config
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
