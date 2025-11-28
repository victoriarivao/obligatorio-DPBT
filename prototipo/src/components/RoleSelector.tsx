import { Dog, Heart } from 'lucide-react';

interface RoleSelectorProps {
  onSelectRole: (role: 'caregiver' | 'owner') => void;
}

export function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
            <Dog className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">PawCare</h1>
          <p className="text-gray-600">Cuidado de mascotas con amor</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onSelectRole('caregiver')}
            className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-400"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-gray-900 mb-1">Soy Cuidador</div>
                <p className="text-gray-600">Gestiona el cuidado diario de las mascotas</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectRole('owner')}
            className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-purple-400"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Dog className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-gray-900 mb-1">Soy Dueño</div>
                <p className="text-gray-600">Monitorea el cuidado de tu mascota</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
