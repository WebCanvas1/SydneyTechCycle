import { Mail, Search } from 'lucide-react';

const mockEnquiries: any[] = [];

export default function AdminEnquiries() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-ink-900 mb-1">Business Enquiries</h1>
        <p className="text-sm text-ink-500">General enquiries from the contact form.</p>
      </div>

      <div className="bg-cream-50 border border-ink-100 rounded-2xl overflow-hidden">
        {mockEnquiries.length === 0 ? (
          <div className="text-center py-16">
            <Mail className="w-8 h-8 text-ink-300 mx-auto mb-2" />
            <p className="text-sm text-ink-400">No enquiries yet. New enquiries will appear here.</p>
          </div>
        ) : (
          <div className="divide-y divide-ink-50">
            {mockEnquiries.map((e) => (
              <div key={e.id} className="p-5 hover:bg-cream-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-ink-900 text-sm">{e.name}</p>
                  <span className="text-xs text-ink-400">{e.created_at}</span>
                </div>
                <p className="text-sm text-ink-600">{e.message}</p>
                <p className="text-xs text-ink-400 mt-2">{e.email} • {e.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
