import { Dog, LogIn, UserPlus } from 'lucide-react';

interface WelcomeScreenProps {
  onLogin: () => void;
  onRegister: () => void;
}

export function WelcomeScreen({ onLogin, onRegister }: WelcomeScreenProps) {
  return (
    <div className="h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full">
        {/* Logo and Welcome */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-2xl">
            <Dog className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-white mb-3">Bienvenido a PawCare</h1>
          <p className="text-white/90">
            La mejor forma de cuidar a tu mascota con amor y dedicación
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={onLogin}
            className="w-full bg-white text-purple-600 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-3">
              <LogIn className="w-6 h-6" />
              <span>Iniciar Sesión</span>
            </div>
          </button>

          <button
            onClick={onRegister}
            className="w-full bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-2xl p-4 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-3">
              <UserPlus className="w-6 h-6" />
              <span>Registrarse</span>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/70">
            Cuida, comparte y mantente conectado
          </p>
        </div>
      </div>
    </div>
  );
}
