import { ArrowLeft, User, Dog, Mail, LogOut } from "lucide-react";

interface ProfileScreenProps {
    role: "caregiver" | "owner";
    dogName?: string;
    email?: string;
    onBack: () => void;
    onLogout: () => void;
}

export function ProfileScreen({ role, dogName, email, onBack, onLogout }: ProfileScreenProps) {
    const roleLabel = role === "caregiver" ? "Cuidador" : "Dueño";

    return (
        <div className="h-full bg-gradient-to-b from-blue-50 to-purple-50 overflow-y-auto">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-white/50 rounded-full transition-colors"
                        aria-label="Volver"
                    >
                        <ArrowLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <div className="flex items-center gap-2 text-gray-600">
                        <User className="w-6 h-6" />
                    </div>
                </div>

                <div className="mb-6">
                    <h1 className="text-gray-900 mb-2">Mi Perfil</h1>
                    <p className="text-gray-600">Consulta tu información y gestiona tu cuenta</p>
                </div>

                <div className="space-y-4">
                    <div className="bg-white rounded-2xl shadow-lg p-4">
                        <div className="flex items-center gap-3">
                            <User className="w-10 h-10 text-purple-600" />
                            <div>
                                <p className="text-xs text-gray-500">Rol</p>
                                <p className="text-gray-900">{roleLabel}</p>
                            </div>
                        </div>
                    </div>

                    {dogName && (
                        <div className="bg-white rounded-2xl shadow-lg p-4">
                            <div className="flex items-center gap-3">
                                <Dog className="w-10 h-10 text-blue-600" />
                                <div>
                                    <p className="text-xs text-gray-500">Perro</p>
                                    <p className="text-gray-900">{dogName}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {email && (
                        <div className="bg-white rounded-2xl shadow-lg p-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-10 h-10 text-green-600" />
                                <div>
                                    <p className="text-xs text-gray-500">Correo</p>
                                    <p className="text-gray-900">{email}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6">
                    <button
                        onClick={onLogout}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <LogOut className="w-5 h-5" />
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
}
