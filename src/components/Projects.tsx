import { useProjects } from '../hooks/useProjects';

export const Projects = () => {
  const { projects, loading } = useProjects();

  if (loading) {
    return (
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Cargando proyectos...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-900" id="proyectos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-blue-400 hover:text-blue-300">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="text-green-400 hover:text-green-300">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};