import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { RoleSelector } from './components/RoleSelector';
import { CaregiverDashboard } from './components/CaregiverDashboard';
import { OwnerDashboard } from './components/OwnerDashboard';
import { ProfileScreen } from './components/ProfileScreen';

type Screen = 'welcome' | 'login' | 'register' | 'roleSelector' | 'caregiver' | 'owner' | 'profile';
type Role = 'caregiver' | 'owner' | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [role, setRole] = useState<Role>(null);
  const [dogName, setDogName] = useState('Max');
  // Optional: could store email/name when login is implemented
  const [email] = useState<string | undefined>(undefined);

  const handleRoleSelect = (selectedRole: 'caregiver' | 'owner') => {
    setRole(selectedRole);
    setCurrentScreen(selectedRole);
  };

  const handleBackToRoleSelector = () => {
    setRole(null);
    setCurrentScreen('roleSelector');
  };

  const handleLogout = () => {
    setRole(null);
    setCurrentScreen('welcome');
  };

  const handleOpenProfile = () => {
    setCurrentScreen('profile');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen
            onLogin={() => setCurrentScreen('login')}
            onRegister={() => setCurrentScreen('register')}
          />
        );
      case 'login':
        return (
          <LoginScreen
            onBack={() => setCurrentScreen('welcome')}
            onLoginSuccess={() => setCurrentScreen('roleSelector')}
          />
        );
      case 'register':
        return (
          <RegisterScreen
            onBack={() => setCurrentScreen('welcome')}
            onRegisterSuccess={() => setCurrentScreen('welcome')}
          />
        );
      case 'roleSelector':
        return <RoleSelector onSelectRole={handleRoleSelect} />;
      case 'caregiver':
        return (
          <div className="h-full overflow-y-auto bg-gradient-to-b from-blue-50 to-purple-50">
            <CaregiverDashboard dogName={dogName} onBackToHome={handleBackToRoleSelector} onOpenProfile={handleOpenProfile} />
          </div>
        );
      case 'owner':
        return (
          <div className="h-full overflow-y-auto bg-gradient-to-b from-blue-50 to-purple-50">
            <OwnerDashboard dogName={dogName} onBackToHome={handleBackToRoleSelector} onOpenProfile={handleOpenProfile} />
          </div>
        );
      case 'profile':
        return (
          <ProfileScreen
            role={role as 'caregiver' | 'owner'}
            dogName={dogName}
            email={email}
            onBack={() => setCurrentScreen(role === 'caregiver' ? 'caregiver' : 'owner')}
            onLogout={handleLogout}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Mobile Phone Container */}
      <div className="relative w-full max-w-[400px] h-[844px] bg-black rounded-[3rem] shadow-2xl p-3">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
        
        {/* Phone Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
