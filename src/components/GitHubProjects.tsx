
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import type { GitHubRepo } from '../hooks/useGitHubRepos';
interface GitHubProjectsProps {
  username: string;
}

export const GitHubProjects = ({ username }: GitHubProjectsProps) => {
  const { repos, loading, error } = useGitHubRepos(username);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg animate-pulse">
            <div className="h-6 bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-8">
        Error al cargar proyectos: {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <div key={repo.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 group border border-gray-700">
          {/* Header del repo */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
              {repo.name}
            </h3>
            {repo.language && (
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {repo.language}
              </span>
            )}
          </div>

          {/* Descripción */}
          <p className="text-gray-300 mb-4 line-clamp-3 min-h-[60px]">
            {repo.description || 'Proyecto sin descripción disponible'}
          </p>

          {/* Topics */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {repo.topics.slice(0, 4).map((topic) => (
                <span key={topic} className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  #{topic}
                </span>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCodeBranch className="text-green-400" />
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-3">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition-colors flex-1 justify-center"
            >
              <FaGithub className="w-4 h-4" />
              Código
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm transition-colors flex-1 justify-center"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};