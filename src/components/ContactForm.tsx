import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar lógica para enviar el formulario
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-300">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-white mb-2">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>

          {/* Información de contacto */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Redes Sociales</h3>
            
            <div className="space-y-4">
              <a
                href="https://github.com/BiggieJr1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </a>
              
              <a
                href="https://linkedin.com/in/jesus-raul-galaviz-lugo-34b168331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </a>
              
              <a
                href="mailto:tu-email@ejemplo.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-2xl" />
                <span>jrgalavizlugo@gmail.com</span>
              </a>
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h4 className="text-white font-semibold mb-3">Disponibilidad</h4>
              <p className="text-gray-300">
                Actualmente estoy disponible para proyectos freelance y oportunidades de trabajo remoto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};