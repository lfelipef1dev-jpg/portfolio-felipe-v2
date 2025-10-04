'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio (já que não há backend)
    // Em produção, você pode usar serviços como Formspree, EmailJS, etc.
    console.log('Form data:', formData);
    
    // Criar link mailto como fallback
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contato de ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-dark-400 text-lg">
              Vamos trabalhar juntos? Envie uma mensagem!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h3>
                <p className="text-dark-300 mb-8">
                  Estou sempre aberto a discutir novos projetos, ideias criativas 
                  ou oportunidades de fazer parte da sua visão.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
                  <FaEnvelope className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
                  <FaMapMarkerAlt className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Localização</h4>
                    <p className="text-dark-400">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  {personalInfo.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-dark-800 hover:bg-primary-600 rounded-lg transition-colors"
                      aria-label={social.name}
                    >
                      <span className="text-xl">{social.name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm">
                    Abrindo seu cliente de email...
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/50 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

