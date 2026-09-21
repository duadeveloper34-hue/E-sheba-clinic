import react from 'react';
import about1 from '../assets/about-1.png';


const AboutUs = () => {
  return (
    <div className="bg-[#EAF2FF] py-16">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-left mb-12 w-full">What <span className='text-[#0366d6]'>Our Member's</span> Saying About Us </h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <p className="text-gray-700 mb-4">
                        Welcome to our dental clinic! We are dedicated to providing exceptional dental care in a comfortable and friendly environment. Our team of experienced dentists and staff are committed to ensuring your oral health and overall well-being.
                    </p>
                    
                    <p className="text-gray-700 mb-4">
                        Our mission is to help you achieve a healthy and beautiful smile. We believe in educating our patients about oral health and providing personalized treatment plans to meet your unique needs.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={about1} alt="About Us" className="rounded-xl" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;
