import { useState, useEffect } from 'react';
import {
  LayoutDashboard, PackageOpen, Mail, Settings, FileText,
  MapPin, Monitor, Globe, MessageSquare, Image, Search,
  LogOut, Menu, X, ChevronRight,
} from 'lucide-react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminCollections from './pages/AdminCollections';
import AdminEnquiries from './pages/AdminEnquiries';
import AdminServices from './pages/AdminServices';
import AdminEquipment from './pages/AdminEquipment';
import AdminServiceAreas from './pages/AdminServiceAreas';
import AdminContent from './pages/AdminContent';
import AdminResources from './pages/AdminResources';
import AdminTestimonials from './pages/AdminTestimonials';
import AdminSeo from './pages/AdminSeo';
import AdminMedia from './pages/AdminMedia';
import AdminSettings from './pages/AdminSettings';

const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutDashboard, key: 'overview' },
  { label: 'Collection Requests', icon: PackageOpen, key: 'collections' },
  { label: 'Business Enquiries', icon: Mail, key: 'enquiries' },
  { label: 'Services', icon: Settings, key: 'services' },
  { label: 'Equipment Categories', icon: Monitor, key: 'equipment' },
  { label: 'Service Areas', icon: MapPin, key: 'areas' },
  { label: 'Website Content', icon: FileText, key: 'content' },
  { label: 'Resources', icon: Globe, key: 'resources' },
  { label: 'Testimonials', icon: MessageSquare, key: 'testimonials' },
  { label: 'SEO', icon: Search, key: 'seo' },
  { label: 'Media', icon: Image, key: 'media' },
  { label: 'Settings', icon: Settings, key: 'settings' },
];

export default function AdminApp() {
  const [authed, setAuthed] = useState(false);
  const [activePage, setActivePage] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('tc_admin_session');
    if (token) setAuthed(true);
  }, []);

  const handleLogin = () => setAuthed(true);
  const handleLogout = () => { sessionStorage.removeItem('tc_admin_session'); setAuthed(false); };

  if (!authed) return <AdminLogin onLogin={handleLogin} />;

  const renderPage = () => {
    switch (activePage) {
      case 'overview': return <AdminDashboard />;
      case 'collections': return <AdminCollections />;
      case 'enquiries': return <AdminEnquiries />;
      case 'services': return <AdminServices />;
      case 'equipment': return <AdminEquipment />;
      case 'areas': return <AdminServiceAreas />;
      case 'content': return <AdminContent />;
      case 'resources': return <AdminResources />;
      case 'testimonials': return <AdminTestimonials />;
      case 'seo': return <AdminSeo />;
      case 'media': return <AdminMedia />;
      case 'settings': return <AdminSettings />;
      default: return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 flex">
      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-ink-950 text-cream-300 z-50 transition-transform duration-500 ease-out-expo flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-5 border-b border-ink-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#168a45" strokeWidth="2" strokeDasharray="8 4" />
                <circle cx="18" cy="18" r="9" fill="#0a0a0a" />
                <path d="M18 9 L22 18 L18 27 L14 18 Z" fill="#f4c430" />
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-cream-50">TechCycle</p>
              <p className="text-xs text-yellow-400/70">Admin Portal</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-cream-400"><X className="w-5 h-5" /></button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.key;
            return (
              <button key={item.key} onClick={() => { setActivePage(item.key); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-forest-600 text-cream-50' : 'text-cream-400 hover:bg-ink-900 hover:text-cream-200'}`}>
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {item.label}
                {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-ink-800">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-cream-400 hover:bg-red-900/30 hover:text-red-400 transition-colors">
            <LogOut className="w-4 h-4" strokeWidth={1.5} />Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-ink-950/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="lg:hidden sticky top-0 z-30 bg-cream-50 border-b border-ink-100 px-5 py-3 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)}><Menu className="w-6 h-6 text-ink-900" /></button>
          <span className="font-display font-semibold text-ink-900">Admin</span>
          <div className="w-6" />
        </header>
        <main className="flex-1 p-5 lg:p-8 overflow-y-auto">{renderPage()}</main>
      </div>
    </div>
  );
}
