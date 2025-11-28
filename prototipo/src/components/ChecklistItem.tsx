import { useState, useRef } from 'react';
import { Check, Camera, Image as ImageIcon, Video, X } from 'lucide-react';
import { CheckItem } from './CaregiverDashboard';

interface ChecklistItemProps {
  item: CheckItem;
  onUpdate: (updates: Partial<CheckItem>) => void;
  onAddMedia: (file: File) => void;
}

export function ChecklistItem({ item, onUpdate, onAddMedia }: ChecklistItemProps) {
  const [showMediaOptions, setShowMediaOptions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    onUpdate({ completed: !item.completed });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onAddMedia(file);
      setShowMediaOptions(false);
    }
  };

  const handleRemoveMedia = (index: number) => {
    const newMedia = item.media?.filter((_, i) => i !== index);
    onUpdate({ media: newMedia });
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 transition-all hover:shadow-md">
      <div className="flex items-start space-x-3">
        <button
          onClick={handleToggle}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            item.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-400'
          }`}
        >
          {item.completed && <Check className="w-4 h-4 text-white" />}
        </button>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`text-gray-900 ${item.completed ? 'line-through opacity-60' : ''}`}>
                {item.title}
              </h3>
              <p className="text-gray-500">{item.time}</p>
            </div>
            <button
              onClick={() => setShowMediaOptions(!showMediaOptions)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Camera className="w-5 h-5 text-blue-500" />
            </button>
          </div>

          {showMediaOptions && (
            <div className="mt-3 flex space-x-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <ImageIcon className="w-4 h-4" />
                <span>Subir imagen/video</span>
              </button>
            </div>
          )}

          {item.media && item.media.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {item.media.map((media, index) => (
                <div key={index} className="relative group">
                  {media.type === 'image' ? (
                    <img
                      src={media.url}
                      alt={`${item.title} - ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="relative w-full h-24 bg-gray-900 rounded-lg flex items-center justify-center">
                      <Video className="w-8 h-8 text-white" />
                      <video
                        src={media.url}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50"
                      />
                    </div>
                  )}
                  <button
                    onClick={() => handleRemoveMedia(index)}
                    className="absolute top-1 right-1 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3 text-white" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
