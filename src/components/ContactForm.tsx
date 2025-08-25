import { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  // useState con tipo definido
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // useEffect para side effects
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup
    }
  }, [isSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="w-full p-2 border rounded"
      />
      <button type="submit">Enviar</button>
      {isSubmitted && <p>¡Mensaje enviado!</p>}
    </form>
  );
};