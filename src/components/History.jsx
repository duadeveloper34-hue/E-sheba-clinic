import React from 'react'
import { motion } from "framer-motion";
const History = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#2563EB] rounded-2xl p-10 md:p-16 text-center">
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Subscribe To Our Newsletter
          </h2>

          <div className="relative max-w-2xl mx-auto">
            <motion.input 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
              type="email" 
              placeholder="Enter your email" 
              className="w-full h-14 rounded-full pl-6 pr-16 text-gray-700 bg-white outline-none"
            />
            <motion.button className=" cursor-pointer absolute right-2 top-2 bg-[#2563EB] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700">
              →
            </motion.button>
          </div>

        </div>
      </div>
    </section>

  )
}

export default History
