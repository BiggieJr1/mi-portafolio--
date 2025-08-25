export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen o avatar */}
          <div className="text-center lg:text-left">
            <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre Mí
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Soy un desarrollador fullstack apasionado por crear soluciones digitales 
                innovadoras. Con más de 2 años de experiencia en el desarrollo web, me 
                especializo en tecnologías modernas como React, Node.js y TypeScript.
              </p>
              
              <p>
                Mi objetivo es crear aplicaciones que no solo sean funcionales, sino también 
                intuitivas y atractivas para los usuarios. Me encanta aprender nuevas 
                tecnologías y enfrentar desafíos técnicos.
              </p>
              
              <p>
                Cuando no estoy programando, disfruto de [tus hobbies], leer sobre 
                tecnología y contribuir a proyectos de código abierto.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">3+</div>
                <div className="text-gray-400">Años Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};