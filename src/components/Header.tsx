export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Mi Portafolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#inicio" className="text-white hover:text-blue-400">Inicio</a></li>
            <li><a href="#proyectos" className="text-white hover:text-blue-400">Proyectos</a></li>
            <li><a href="#contacto" className="text-white hover:text-blue-400">Contacto</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};