import { Controller, Get,Post, HttpCode,Param, Body, Delete, Patch } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {

	blogs: BlogDto[];
	constructor(){
		this.blogs = [
		{
			id:1,
			title:"NestJs",
			excerpt: "NestJs Full Course",
			description:"NestJs full course from 0 to hero"
		},
		{
			id:2,
			title:"NextJs",
			excerpt: "NextJs Full Course",
			description:"NextJs full course from 0 to hero"
		},
		{
			id:3,
			title:"Postgres db",
			excerpt: "Postgres db Full Course",
			description:"Postgres db full course from 0 to hero"
		},
	]
	}

	@HttpCode(200)
	@Get('/')
	async getAll(){
			return this.blogs
	}

	@HttpCode(201)
	@Post()
	async create(@Body() dto:BlogDto){
		const data:BlogDto = {
			id: new Date().getTime(),
			...dto
		};

		return [...this.blogs, data]
	}


	@HttpCode(200)
	@Get(":id")
	async getById(@Param("id") id:string){
		return this.blogs.find(item => item.id === Number(id))
	}

	@HttpCode(200)
	@Patch(":id")
	async update(@Param("id") id:string, @Body() dto:BlogDto){
		let currentBlog = this.blogs.find(item => item.id === Number(id))

		currentBlog =  dto

		return currentBlog	
	}

	@HttpCode(200)
	@Delete(':id')
	async delete(@Param("id") id:string){
		return this.blogs.filter(item => item.id !== Number(id))
	}
}
