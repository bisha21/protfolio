import {
  FaFacebook,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
  FaHtml5,
} from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiSemanticuireact } from 'react-icons/si';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import mycv from '../assets/cv.pdf';

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden">
      <section className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-20 py-10 flex items-center justify-center  min-h-xl md:min-h-[86vh]">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mt-10 md:mt-32 text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start space-x-1 text-xl md:text-4xl font-bold">
              <h1>Hello I am a,</h1>
              <span className="inline-block overflow-hidden text-green-500">
                <ReactTyped
                  strings={[
                    'Full Stack Developer...',
                    'Freelancer...',
                    'Designer...',
                    'Writer...',
                  ]}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  showCursor={true}
                />
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl mt-4">
              Hi, I’m Bishal Timilsina, a BSc CSIT student at Tribhuvan University with a passion for web development, particularly in front-end technologies. I am actively learning React and aim to build a strong career in front-end development. With a solid foundation in HTML, CSS, JavaScript, and the MERN stack, I am enthusiastic about creating engaging, responsive, and dynamic full-stack applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              <a
                href={mycv}
                download
                className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition"
              >
                Hire Me
              </a>
            </div>

            {/* Available On & Tech Stack */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-xl font-bold mt-8 gap-8">
              <div>
                <h2>Available on</h2>
                <div className="flex gap-5 mt-4 justify-center sm:justify-start">
                  <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare />
                  </a>
                  <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div>
                <h2>Currently working</h2>
                <div className="flex gap-5 mt-4 justify-center sm:justify-start">
                  <FaHtml5 />
                  <IoLogoCss3 />
                  <IoLogoJavascript />
                  <SiSemanticuireact />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mt-10 md:mt-24 flex justify-center"
          >
            <div className="w-[200px] sm:w-[250px] md:w-[25vw]">
              <img
                className="rounded-full border-black border-4"
                src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-6/274719001_101185272519102_1796723644198124202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=M2ZJiFtgNIkQ7kNvwGqYtch&_nc_oc=AdkFPwO_CC-A-Tm5hwDZcCDoKw0H_hlelkOUHIdxoZILIXNsyv94XDJN_Q-9UHeD52w&_nc_zt=23&_nc_ht=scontent.fktm14-1.fna&_nc_gid=7KcHvoYaP4PXWZQ5Wsn4Cw&oh=00_AfOCbEAXifMAjq5cwnX7aK4_hF0j482KEPdxbs3N9BDN9w&oe=684EF36F"
                alt="Bishal Timilsina"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
