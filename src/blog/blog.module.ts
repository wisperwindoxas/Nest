import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import {MongooseModule} from "@nestjs/mongoose";
import { Blog, BlogSchema } from './blog.schema';

@Module({
  providers: [BlogService],
  controllers: [BlogController],
  imports:[MongooseModule.forFeature([{name:BlogSchema.name,schema:Blog}])]
})
export class BlogModule {}
