export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hola, soy [Jesus Raul Galaviz Lugo]</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">Desarrollador Full Stack</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
          Ver Mi Trabajo
        </button>
      </div>
    </section>
  );
};