import { Plus, Settings, Trash2, GripVertical } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export default function AdminServices() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-ink-900 mb-1">Services</h1>
          <p className="text-sm text-ink-500">Manage service listings displayed on the website.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest-600 text-cream-50 text-sm font-medium rounded-xl hover:bg-forest-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      <div className="space-y-3">
        {SERVICES.map((service) => (
          <div key={service.number} className="flex items-center gap-4 p-5 rounded-2xl bg-cream-50 border border-ink-100 hover:border-forest-300 transition-colors group">
            <GripVertical className="w-5 h-5 text-ink-300 cursor-grab" />
            <div className="w-10 h-10 rounded-lg bg-forest-600/10 flex items-center justify-center shrink-0">
              <Settings className="w-5 h-5 text-forest-600" strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs text-forest-600 mb-0.5">{service.number}</p>
              <p className="font-medium text-ink-900 text-sm">{service.title}</p>
              <p className="text-xs text-ink-500 truncate">{service.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-9 h-5 bg-ink-200 rounded-full peer-checked:bg-forest-600 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-cream-50 after:rounded-full after:h-4 after:w-4 after:transition-transform peer-checked:after:translate-x-4" />
              </label>
              <button className="p-2 text-ink-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
