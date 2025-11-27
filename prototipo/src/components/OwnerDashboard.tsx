import { ArrowLeft, CheckCircle2, Clock, Image as ImageIcon, Video } from 'lucide-react';

interface OwnerDashboardProps {
  dogName: string;
  onBackToHome: () => void;
}

// Mock data que simula lo que vería el dueño
const mockActivity = [
  {
    id: '1',
    title: 'Desayuno',
    time: '08:15 AM',
    completed: true,
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400' }
    ],
    notes: 'Max comió todo! 🐕'
  },
  {
    id: '2',
    title: 'Paseo matutino',
    time: '09:30 AM',
    completed: true,
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400' }
    ],
    notes: '30 minutos en el parque'
  },
  {
    id: '3',
    title: 'Medicamento',
    time: '12:05 PM',
    completed: true,
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400' }
    ]
  },
  {
    id: '4',
    title: 'Almuerzo',
    time: '01:00 PM',
    completed: false
  },
];

export function OwnerDashboard({ dogName, onBackToHome }: OwnerDashboardProps) {
  const completedCount = mockActivity.filter(item => item.completed).length;
  const totalCount = 7; // Total de tareas del día
  const progress = (completedCount / totalCount) * 100;

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBackToHome}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-center">
          <h1 className="text-white mb-1">Cuidado de {dogName}</h1>
          <p className="text-purple-100">Actualizaciones en tiempo real</p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-white/20 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-white h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-purple-100 mt-2">
          {completedCount} de {totalCount} tareas completadas hoy
        </p>
      </div>

      <div className="px-4 mt-6">
        {/* Status Card */}
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="text-gray-900">Todo va genial!</h3>
              <p className="text-gray-600">
                {dogName} está siendo muy bien cuidado
              </p>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h2 className="text-gray-900 mb-4">Actividades de hoy</h2>
          <div className="space-y-4">
            {mockActivity.map((activity, index) => (
              <div key={activity.id} className="relative">
                {index !== mockActivity.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gray-200" />
                )}
                <div className="flex space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`}>
                    {activity.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                  </div>

                  <div className="flex-1 pb-6">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-900">{activity.title}</h3>
                        <span className="text-gray-500">{activity.time}</span>
                      </div>

                      {activity.notes && (
                        <p className="text-gray-600 mb-2">{activity.notes}</p>
                      )}

                      {activity.media && activity.media.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {activity.media.map((media, idx) => (
                            <div key={idx} className="relative group cursor-pointer">
                              {media.type === 'image' ? (
                                <img
                                  src={media.url}
                                  alt={`${activity.title} - ${idx + 1}`}
                                  className="w-full h-24 object-cover rounded-lg"
                                />
                              ) : (
                                <div className="relative w-full h-24 bg-gray-900 rounded-lg flex items-center justify-center">
                                  <Video className="w-6 h-6 text-white" />
                                </div>
                              )}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-500 text-center">
              Las siguientes actividades aparecerán aquí cuando se completen
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <h3 className="text-gray-900 mb-2">Veterinario de Emergencia</h3>
          <p className="text-gray-700">Veterinaria San Francisco</p>
          <a href="tel:+34912345678" className="text-blue-600 hover:underline">
            +34 912 345 678
          </a>
          <p className="text-gray-600 mt-1">Calle Principal 123</p>
        </div>
      </div>
    </div>
  );
}
