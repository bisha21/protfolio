import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack MERN Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm Bishal Timilsina, a Full Stack Developer specializing in the
              MERN stack (MongoDB, Express.js, React, Node.js). As a BSc CSIT
              student at Tribhuvan University, I am passionate about building
              scalable, efficient, and user-friendly web applications.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving complex problems, exploring new technologies, and
              transforming ideas into real-world projects. Whether it's
              front-end development with React or back-end API design with
              Node.js and Express, I aim to deliver clean, maintainable, and
              high-performance code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building complete web applications using MongoDB,
                    Express.js, React, and Node.js (MERN Stack).
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Problem Solving & Learning
                  </h4>
                  <p className="text-muted-foreground">
                    Constantly improving skills by building projects and
                    exploring new tools, libraries, and technologies in web
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Worked on real-world projects such as stock management
                    systems, booking platforms, and personal portfolios to apply
                    full stack expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
