"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How to Style with Tailwind CSS",
    excerpt:
      "Learn how to create modern and responsive designs using Tailwind CSS utility classes.",
    date: "2025-08-12",
    image:
      "https://thumbs.dreamstime.com/z/clouth-dress-shop-image-193738352.jpg",
  },
  {
    id: 2,
    title: "Next.js Performance Tips",
    excerpt:
      "Boost your Next.js application performance with these expert tips and tricks.",
    date: "2025-07-20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLFkVV58LSPN3wmiN6jFJtI5QJR32xLtpFQ&s",
  },
  {
    id: 3,
    title: "Why Framer Motion is a Game-Changer",
    excerpt:
      "Add smooth animations and micro-interactions easily using Framer Motion in React.",
    date: "2025-06-15",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLFkVV58LSPN3wmiN6jFJtI5QJR32xLtpFQ&s",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-gray-800"
      >
        Our Blog
      </motion.h1>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500">
                {new Date(post.date).toDateString()}
              </p>
              <h2 className="text-xl font-semibold text-gray-800 mt-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
