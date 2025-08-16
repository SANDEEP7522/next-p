"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 text-center mb-8"
        >
          About <span className="text-primary-600">StyleHub</span>
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
        >
          StyleHub is your go-to online destination for trendy fashion and lifestyle products. 
          We bring together quality, affordability, and the latest trends to help you look and feel your best.
        </motion.p>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-primary-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              We aim to redefine online shopping by offering curated collections that reflect your personality.
              Every product we feature is selected with care, ensuring top quality and unique designs.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To create a global fashion platform where style meets convenience, 
              empowering people to express themselves without limits.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Explore Our Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
