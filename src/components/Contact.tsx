import { useState, useRef } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import datita from './data';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const { title, description, buttonlbl } = datita.contact

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Por favor, completa el reCAPTCHA antes de enviar el mensaje.'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (form.current) {
        // Creamos un objeto con los datos del formulario y el token
        const templateParams = {
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          message: form.current.message.value,
          'g-recaptcha-response': recaptchaToken
        };

        const result = await emailjs.send(
          import.meta.env.VITE_FORM_SERVICE,
          import.meta.env.VITE_FORM_TEMPLATE,
          templateParams,  // Enviamos el objeto con todos los datos
          import.meta.env.VITE_FORM_KEY
        );

        if (result.text === 'OK') {
          setStatus({
            submitted: true,
            success: true,
            message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
          });
          form.current.reset();
          recaptchaRef.current?.reset();
          setRecaptchaToken(null);
        }
      }
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
};

  return (
    <section className="w-full py-20" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Formulario */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
        >
          <div className="space-y-6">
            {/* Campos existentes del formulario */}
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
                theme="dark"
              />
            </div>

            {/* Mensaje de estado */}
            {status.submitted && (
              <div className={`p-4 rounded-lg flex items-center gap-2 ${status.success ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                {status.success ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={isSubmitting || !recaptchaToken}
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {buttonlbl}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;