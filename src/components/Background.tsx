
const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 w-full overflow-hidden">
        {/* Blob superior derecha */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-500/20 blur-3xl rounded-full transform translate-x-32 -translate-y-16 animate-pulse"></div>
        {/* Blob central izquierda */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/20 to-purple-500/20 blur-3xl rounded-full transform -translate-x-32 -translate-y-1/2 animate-pulse [animation-delay:2s]"></div>
        {/* Blob inferior */}
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-purple-500/20 blur-3xl rounded-full transform translate-y-32 animate-pulse [animation-delay:4s]"></div>
      </div>

      {/* Contenido de la página */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default Background;