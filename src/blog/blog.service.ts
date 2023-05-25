import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { BlogDto } from './dto/blog.dto';
import { BlogSchema, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  blogs: BlogDto[];
  constructor(@InjectModel(BlogSchema.name) private readonly blogModule: Model<BlogDocument>) {
    this.blogs = [
      {
        id: 1,
        title: "NestJs",
        excerpt: "NestJs Full Course",
        description: "NestJs full course from 0 to hero"
      },
      {
        id: 2,
        title: "NextJs",
        excerpt: "NextJs Full Course",
        description: "NextJs full course from 0 to hero"
      },
      {
        id: 3,
        title: "Postgres db",
        excerpt: "Postgres db Full Course",
        description: "Postgres db full course from 0 to hero"
      },
    ]
  }
  async getAllBlogs() { return this.blogModule.find({}) }

  async create(dto: BlogDto) {return this.blogModule.create(dto) }

  async getById(id: string) {
    return this.blogModule.findById(id)
  }
  async update(id: string, dto: BlogDto) {
    return  this.blogModule.findByIdAndUpdate(id, dto, {new:true})

    
  }
  async delete(id: string) { return this.blogModule.findByIdAndDelete(id) }
}
function InjectModule(name: string): (target: typeof BlogService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

