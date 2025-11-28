import { useState } from 'react';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

interface LoginScreenProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export function LoginScreen({ onBack, onLoginSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulamos un login exitoso
    onLoginSuccess();
  };

  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-purple-50 overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <button
          onClick={onBack}
          className="p-2 hover:bg-white/50 rounded-full transition-colors mb-8"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Iniciar Sesión</h1>
          <p className="text-gray-600">
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <button
            type="button"
            className="text-purple-600 hover:text-purple-700"
          >
            ¿Olvidaste tu contraseña?
          </button>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
