import React from "react";
import Sampleblogs from "@/config/sampleBlogs";
import { buttonVariants } from "@/components/ui/button"

// Define the type for blog props
// interface BlogType {
//   id: number;
//   title: string;
//   description: string;
//   author: string;
//   date: string;
//   imageUrl: string;
//   slug: string;
// }

const BlogList = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Sampleblogs.map((blog) => (
            <div
              key={blog.id}
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
                <a
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Read More..
                </a>
                <div className="flex justify-between items-center text-sm mt-4 text-gray-600">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
