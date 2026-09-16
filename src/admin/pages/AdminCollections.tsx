import { useState } from 'react';
import { Search, PackageOpen, X, ChevronRight } from 'lucide-react';
import type { CollectionStatus } from '@/lib/types';

const STATUSES: CollectionStatus[] = [
  'NEW', 'REVIEWING', 'QUOTED', 'CONFIRMED', 'COLLECTED', 'COMPLETED', 'CANCELLED',
];

const STATUS_COLORS: Record<CollectionStatus, string> = {
  NEW: 'bg-forest-600/10 text-forest-700 border-forest-300',
  REVIEWING: 'bg-amber-500/10 text-amber-700 border-amber-300',
  QUOTED: 'bg-blue-500/10 text-blue-700 border-blue-300',
  CONFIRMED: 'bg-indigo-500/10 text-indigo-700 border-indigo-300',
  COLLECTED: 'bg-purple-500/10 text-purple-700 border-purple-300',
  COMPLETED: 'bg-forest-600/15 text-forest-700 border-forest-400',
  CANCELLED: 'bg-red-500/10 text-red-700 border-red-300',
};

// Mock data — in production, fetched from /api/admin/collections
const mockRequests: any[] = [];

export default function AdminCollections() {
  const [filter, setFilter] = useState<CollectionStatus | 'ALL'>('ALL');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<any | null>(null);

  const filtered = mockRequests.filter((r) => {
    if (filter !== 'ALL' && r.status !== filter) return false;
    if (search && !r.company?.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-ink-900 mb-1">Collection Requests</h1>
        <p className="text-sm text-ink-500">Manage and track all collection requests.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by organisation..."
            className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-ink-200 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-forest-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              filter === 'ALL' ? 'bg-ink-900 text-cream-50' : 'bg-cream-50 border border-ink-200 text-ink-600 hover:border-forest-300'
            }`}
          >
            All
          </button>
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                filter === s ? 'bg-ink-900 text-cream-50' : 'bg-cream-50 border border-ink-200 text-ink-600 hover:border-forest-300'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-cream-50 border border-ink-100 rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <PackageOpen className="w-8 h-8 text-ink-300 mx-auto mb-2" />
            <p className="text-sm text-ink-400">No collection requests yet. New requests will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ink-100 bg-cream-100">
                  <th className="text-left text-xs font-medium text-ink-500 uppercase tracking-wider px-5 py-3">Request ID</th>
                  <th className="text-left text-xs font-medium text-ink-500 uppercase tracking-wider px-5 py-3">Organisation</th>
                  <th className="text-left text-xs font-medium text-ink-500 uppercase tracking-wider px-5 py-3">Contact</th>
                  <th className="text-left text-xs font-medium text-ink-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Date</th>
                  <th className="text-left text-xs font-medium text-ink-500 uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr
                    key={r.id}
                    onClick={() => setSelected(r)}
                    className="border-b border-ink-50 hover:bg-cream-100 cursor-pointer transition-colors"
                  >
                    <td className="px-5 py-4 text-sm font-mono text-ink-600">{r.request_id}</td>
                    <td className="px-5 py-4 text-sm font-medium text-ink-900">{r.company}</td>
                    <td className="px-5 py-4 text-sm text-ink-600">{r.contact_name}</td>
                    <td className="px-5 py-4 text-sm text-ink-500 hidden lg:table-cell">{r.created_at}</td>
                    <td className="px-5 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${STATUS_COLORS[r.status as CollectionStatus]}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <ChevronRight className="w-4 h-4 text-ink-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail drawer */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-md bg-cream-50 shadow-2xl overflow-y-auto animate-slide-in">
            <div className="sticky top-0 bg-cream-50 border-b border-ink-100 p-5 flex items-center justify-between">
              <h2 className="font-display font-semibold text-lg text-ink-900">Request Details</h2>
              <button onClick={() => setSelected(null)} className="text-ink-400 hover:text-ink-900">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <DetailField label="Request ID" value={selected.request_id} />
              <DetailField label="Organisation Type" value={selected.organisation_type} />
              <DetailField label="Contact Name" value={selected.contact_name} />
              <DetailField label="Company" value={selected.company} />
              <DetailField label="Position" value={selected.position} />
              <DetailField label="Email" value={selected.email} />
              <DetailField label="Phone" value={selected.phone} />
              <DetailField label="Address" value={selected.address} />
              <DetailField label="Suburb" value={selected.suburb} />
              <DetailField label="Postcode" value={selected.postcode} />
              <DetailField label="Building / Level" value={selected.building_level} />
              <DetailField label="Loading Access" value={selected.loading_access} />
              <DetailField label="Data Destruction" value={selected.data_destruction} />
              <DetailField label="Asset Reporting" value={selected.asset_reporting} />
              <DetailField label="Recurring" value={selected.recurring} />
              <DetailField label="Preferred Date" value={selected.preferred_date} />
              <DetailField label="Access Instructions" value={selected.access_instructions} />
              <DetailField label="Additional Info" value={selected.additional_info} />

              {/* Status update */}
              <div className="pt-4 border-t border-ink-100">
                <label className="text-sm font-medium text-ink-700 mb-2 block">Update Status</label>
                <select
                  value={selected.status}
                  onChange={(e) => {
                    // In production, PUT /api/admin/collections/:id
                    setSelected({ ...selected, status: e.target.value });
                  }}
                  className="input-premium"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-400 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm text-ink-900">{value || '—'}</p>
    </div>
  );
}
