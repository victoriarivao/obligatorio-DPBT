import { useState } from "react";
import { User, LogOut } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface ProfileButtonProps {
  role: "caregiver" | "owner";
  dogName?: string;
  email?: string;
  onLogout: () => void;
}

export function ProfileButton({ role, dogName, email, onLogout }: ProfileButtonProps) {
  const [open, setOpen] = useState(false);

  const roleLabel = role === "caregiver" ? "Cuidador" : "Dueño";

  const handleLogout = () => {
    setOpen(false);
    onLogout();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Perfil">
          <User className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Mi Perfil</DialogTitle>
          <DialogDescription>Consulta tu información y cierra sesión.</DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {email && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Correo</p>
              <p className="text-gray-900">{email}</p>
            </div>
          )}
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500">Rol</p>
            <p className="text-gray-900">{roleLabel}</p>
          </div>
          {dogName && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Perro</p>
              <p className="text-gray-900">{dogName}</p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="destructive" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
