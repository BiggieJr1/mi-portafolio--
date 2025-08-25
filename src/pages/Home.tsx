import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};