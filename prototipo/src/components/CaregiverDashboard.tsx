import { useState, useEffect } from "react";
import { ArrowLeft, Bell, Phone, Plus, User } from "lucide-react";
import { ChecklistItem } from "./ChecklistItem";
import { EmergencyContact } from "./EmergencyContact";
import { NotificationBanner } from "./NotificationBanner";

interface CaregiverDashboardProps {
  dogName: string;
  onBackToHome: () => void;
  onOpenProfile: () => void;
}

export interface CheckItem {
  id: string;
  title: string;
  time: string;
  completed: boolean;
  media?: { type: "image" | "video"; url: string }[];
  notes?: string;
}

const initialChecklist: CheckItem[] = [
  {
    id: "1",
    title: "Desayuno",
    time: "08:00 AM",
    completed: false,
  },
  {
    id: "2",
    title: "Paseo matutino",
    time: "09:00 AM",
    completed: false,
  },
  {
    id: "3",
    title: "Medicamento",
    time: "12:00 PM",
    completed: false,
  },
  {
    id: "4",
    title: "Almuerzo",
    time: "01:00 PM",
    completed: false,
  },
  {
    id: "5",
    title: "Paseo tarde",
    time: "04:00 PM",
    completed: false,
  },
  {
    id: "6",
    title: "Cena",
    time: "07:00 PM",
    completed: false,
  },
  {
    id: "7",
    title: "Paseo nocturno",
    time: "09:00 PM",
    completed: false,
  },
];

export function CaregiverDashboard({
  dogName,
  onBackToHome,
  onOpenProfile,
}: CaregiverDashboardProps) {
  const [checklist, setChecklist] =
    useState<CheckItem[]>(initialChecklist);
  const [showNotification, setShowNotification] =
    useState(true);
  const [currentDate] = useState(
    new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  );

  const completedCount = checklist.filter(
    (item) => item.completed,
  ).length;
  const progress = (completedCount / checklist.length) * 100;

  const updateChecklistItem = (
    id: string,
    updates: Partial<CheckItem>,
  ) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updates } : item,
      ),
    );
  };

  const addMedia = (id: string, file: File) => {
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith("video/")
      ? "video"
      : "image";

    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              media: [...(item.media || []), { type, url }],
            }
          : item,
      ),
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBackToHome}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            <Bell className="w-6 h-6" />
            <button
              onClick={onOpenProfile}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Perfil"
            >
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-white mb-1">
            Cuidando a {dogName}
          </h1>
          <p className="text-blue-100 capitalize">
            {currentDate}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-blue-100 mt-2">
          {completedCount} de {checklist.length} tareas
          completadas
        </p>
      </div>

      {showNotification && (
        <NotificationBanner
          message="Recuerda: Es hora del desayuno de Max 🐕"
          onDismiss={() => setShowNotification(false)}
        />
      )}

      <div className="px-4 mt-6 space-y-4">
        {/* Emergency Contact */}
        <EmergencyContact />

        {/* Checklist */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h2 className="text-gray-900 mb-4">
            Checklist del día
          </h2>
          <div className="space-y-3">
            {checklist.map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                onUpdate={(updates) =>
                  updateChecklistItem(item.id, updates)
                }
                onAddMedia={(file) => addMedia(item.id, file)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}