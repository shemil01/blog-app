import React from "react";
import Sampleblogs from "@/config/sampleBlogs";
import { buttonVariants } from "@/components/ui/button";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";

// // Define the type for blog props
interface BlogType {
  title: string;
  description: string;

  imageUrl?: string;
  slug: string;
}

const dirContent = fs.readdirSync("content", "utf-8");
const blogs: BlogType[] = dirContent.map((file) => {
  const fileContent = readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  const value: BlogType = {
    title: data.title,
    description: data.description,
    slug: data.slug,
  };
  return value;
});

const BlogList = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: BlogType,index:number) => (
            <div
              key={index}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm mb-4">{blog.description}</p>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Read More..
                </Link>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
