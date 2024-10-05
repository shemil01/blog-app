import React from "react";
import Sampleblogs from "@/config/sampleBlogs";

// Define the type for blog props
interface BlogType {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    imageUrl: string;
  }


const BlogList = ({ blogs :BlogType}) => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Sampleblogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
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
