import { useState } from 'react';
import { Phone, Edit2, Save } from 'lucide-react';

export function EmergencyContact() {
  const [isEditing, setIsEditing] = useState(false);
  const [contact, setContact] = useState({
    name: 'Veterinaria San Francisco',
    phone: '+34 912 345 678',
    address: 'Calle Principal 123'
  });
  const [tempContact, setTempContact] = useState(contact);

  const handleSave = () => {
    setContact(tempContact);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempContact(contact);
    setIsEditing(false);
  };

  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-gray-900">Contacto de Emergencia</h3>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 hover:bg-red-100 rounded-full transition-colors"
          >
            <Edit2 className="w-4 h-4 text-red-600" />
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="p-2 hover:bg-red-100 rounded-full transition-colors"
          >
            <Save className="w-4 h-4 text-red-600" />
          </button>
        )}
      </div>

      {!isEditing ? (
        <div className="space-y-2">
          <p className="text-gray-900">{contact.name}</p>
          <a
            href={`tel:${contact.phone}`}
            className="text-red-600 hover:underline block"
          >
            {contact.phone}
          </a>
          <p className="text-gray-600">{contact.address}</p>
        </div>
      ) : (
        <div className="space-y-3">
          <input
            type="text"
            value={tempContact.name}
            onChange={(e) => setTempContact({ ...tempContact, name: e.target.value })}
            className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Nombre de la veterinaria"
          />
          <input
            type="tel"
            value={tempContact.phone}
            onChange={(e) => setTempContact({ ...tempContact, phone: e.target.value })}
            className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Teléfono"
          />
          <input
            type="text"
            value={tempContact.address}
            onChange={(e) => setTempContact({ ...tempContact, address: e.target.value })}
            className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Dirección"
          />
          <button
            onClick={handleCancel}
            className="text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}
