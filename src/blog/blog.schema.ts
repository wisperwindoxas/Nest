import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type BlogDocument = HydratedDocument<BlogSchema>;

@Schema()

export class BlogSchema {
  @Prop({required: true})
  title: string;
  @Prop({required: true})
  excerpt: string;
  @Prop({required: true})
  description: string;
}



export const Blog = SchemaFactory.createForClass(BlogSchema);