import react from 'react';
import appli1 from '../assets/appli1.png';
import arrow from '../assets/arrow.png';
import { motion } from "framer-motion";

const Application = () => {
  return (
    <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-left w-full">The Future of  <span className='text-[#0366d6]'> Quality Health</span></h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <p className="text-gray-700 mb-4">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores veniam nemo est, adipisci quam aspernatur voluptates recusandae, autem voluptatem explicabo exercitationem architecto debitis amet quis labore repellendus odit quod? Est aperiam tempore tenetur eaque. Modi reprehenderit, ut dolor eius perferendis maxime voluptatibus ex sunt ab eveniet assumenda sapiente quia, ducimus earum illo voluptas harum! Consequuntur, beatae ut temporibus totam placeat deserunt error dolorum animi tempore provident earum odit laboriosam.
                    </p>
                     <motion.button 
                        className=" cursor-pointer mt-6 text-[#0366d6] px-6 py-2 rounded-full  flex items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        Learn More <img src={arrow} alt="Arrow" className="ml-2 hover:rotate-90 hover:text-white" />
                      </motion.button>
                </div>
                <div className="lg:w-1/2">
                    <img src={appli1} alt="About Us" className="rounded-xl" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Application;
