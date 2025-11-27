import { useState } from 'react';
import { ArrowLeft, User, Mail, Lock, Phone } from 'lucide-react';

interface RegisterScreenProps {
  onBack: () => void;
  onRegisterSuccess: () => void;
}

type RegistrationType = 'person' | 'pet' | null;

export function RegisterScreen({ onBack, onRegisterSuccess }: RegisterScreenProps) {
  const [registrationType, setRegistrationType] = useState<RegistrationType>(null);

  if (!registrationType) {
    return (
      <div className="h-full bg-gradient-to-b from-blue-50 to-purple-50 overflow-y-auto">
        <div className="p-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/50 rounded-full transition-colors mb-8"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div className="mb-8">
            <h1 className="text-gray-900 mb-2">Registro</h1>
            <p className="text-gray-600">
              Selecciona qué deseas registrar
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setRegistrationType('person')}
              className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-400"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-gray-900 mb-1">Registrar Persona</div>
                  <p className="text-gray-600">
                    Crea una cuenta como cuidador o dueño
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setRegistrationType('pet')}
              className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-purple-400"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M18 4C16.9 4 16 4.9 16 6C16 7.1 16.9 8 18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4M6 6C4.9 6 4 6.9 4 8C4 9.1 4.9 10 6 10C7.1 10 8 9.1 8 8C8 6.9 7.1 6 6 6M12 8C8.69 8 6 10.69 6 14C6 16.5 7.58 18.62 9.83 19.5L9 22H15L14.17 19.5C16.42 18.62 18 16.5 18 14C18 10.69 15.31 8 12 8Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-gray-900 mb-1">Registrar Mascota</div>
                  <p className="text-gray-600">
                    Añade el perfil de tu mascota
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (registrationType === 'person') {
    return <PersonRegistrationForm onBack={() => setRegistrationType(null)} onSuccess={onRegisterSuccess} />;
  }

  return <PetRegistrationForm onBack={() => setRegistrationType(null)} onSuccess={onRegisterSuccess} />;
}

function PersonRegistrationForm({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-purple-50 overflow-y-auto">
      <div className="p-6 pb-20">
        <button
          onClick={onBack}
          className="p-2 hover:bg-white/50 rounded-full transition-colors mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="mb-6">
          <h2 className="text-gray-900 mb-2">Registro de Persona</h2>
          <p className="text-gray-600">
            Completa tus datos personales
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Juan Pérez"
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Teléfono</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+34 912 345 678"
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Confirmar Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-6"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
}

function PetRegistrationForm({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    weight: '',
    allergies: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-purple-50 overflow-y-auto">
      <div className="p-6 pb-20">
        <button
          onClick={onBack}
          className="p-2 hover:bg-white/50 rounded-full transition-colors mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="mb-6">
          <h2 className="text-gray-900 mb-2">Registro de Mascota</h2>
          <p className="text-gray-600">
            Completa los datos de tu mascota
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Nombre de la Mascota</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Max"
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Raza</label>
            <input
              type="text"
              value={formData.breed}
              onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
              placeholder="Golden Retriever"
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Edad</label>
              <input
                type="text"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="3 años"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Peso</label>
              <input
                type="text"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                placeholder="25 kg"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Alergias</label>
            <input
              type="text"
              value={formData.allergies}
              onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
              placeholder="Ninguna o especifica..."
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Notas Adicionales</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Información importante sobre tu mascota..."
              rows={3}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-6"
          >
            Registrar Mascota
          </button>
        </form>
      </div>
    </div>
  );
}
