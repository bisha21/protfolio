import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Full Stack eCommerce App',
    description:
      'A full-stack e-commerce app with user authentication and role-based authorization.',
    image:
      'https://th.bing.com/th/id/OIP.-bivN5vOC8UYgu-IZRRMaQHaEk?rs=1&pid=ImgDetMain',
    tags: ['React', 'TailwindCSS', 'Node.js', 'MongoDB', 'Express.js'],
    demoUrl: 'https://user-ecommerce-one.vercel.app/',
    githubUrl: 'https://github.com/bisha21/user_ecommerce',
  },
  {
    id: 2,
    title: 'Hostel Management System',
    description:
      'A comprehensive hostel management system featuring room allocation, student information management, and an interactive dashboard with data visualization and filtering capabilities.',
    image:
      'https://th.bing.com/th/id/OIP.fhPYHLnjSVgXoHlEV7BfcAHaDK?rs=1&pid=ImgDetMain',
    tags: ['TypeScript', 'React.js', 'MySQL', 'Node.js', 'Express.js'],
    demoUrl: '#',
    githubUrl: '',
  },
  {
    id: 3,
    title: 'Learning Management System',
    description:
      'A complete learning management platform with user authentication and course management functionalities.',
    image:
      'https://www.marketing91.com/wp-content/uploads/2020/09/Learning-Management-System.jpg',
    tags: ['Next.js', 'Shadcn UI', 'MongoDB', 'TypeScript', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: 'https://github.com/bisha21/lms',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bisha21"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
