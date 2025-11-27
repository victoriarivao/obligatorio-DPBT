import { X, Bell } from 'lucide-react';

interface NotificationBannerProps {
  message: string;
  onDismiss: () => void;
}

export function NotificationBanner({ message, onDismiss }: NotificationBannerProps) {
  return (
    <div className="mx-4 mt-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl p-4 shadow-lg animate-slideDown">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bell className="w-5 h-5 text-white" />
          <p className="text-white">{message}</p>
        </div>
        <button
          onClick={onDismiss}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
