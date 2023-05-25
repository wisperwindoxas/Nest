import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://windoxas:5hspkfn9@nest.vzheocs.mongodb.net/?retryWrites=true&w=majority"), BlogModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
