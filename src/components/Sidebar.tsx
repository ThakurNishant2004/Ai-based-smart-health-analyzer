import { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  Stethoscope, 
  FileText, 
  MessageSquare, 
  Settings,
  Activity,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 700;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => setIsSmall(window.innerWidth <= 700);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'symptom-analyzer', label: 'Symptom Analyzer', icon: Stethoscope },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'chat', label: 'Chat with Doctor', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const sidebarContent = (
    <>
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-gray-900">MediScan AI</h1>
            <p className="text-xs text-gray-500">Smart Patient Analyzer</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    if (isSmall) setOpen(false); // close overlay on small screens
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg">
          <p className="text-xs text-gray-600 mb-2">AI Health Assistant</p>
          <p className="text-xs text-gray-500">Available 24/7 for instant health insights</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger: fixed at top-left when small (<=700px) */}
      {isSmall && (
        <button
          className="fixed top-3 left-3 z-50 bg-white p-2 rounded-lg shadow-md"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Persistent sidebar: visible only when viewport > 700px */}
      {!isSmall && (
        <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
          {sidebarContent}
        </div>
      )}

      {/* Overlay sidebar for small screens (<=700px) */}
      {isSmall && open && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative z-50 w-64 h-full bg-white border-r border-gray-200 shadow-lg">
            <div className="p-3 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-gray-900 text-sm">MediScan AI</h1>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-1 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-full overflow-auto">
              {sidebarContent}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
