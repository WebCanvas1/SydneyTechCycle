import { PackageOpen, Mail, CheckCircle, Clock, TrendingUp, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'New Requests', value: '0', icon: PackageOpen, color: 'forest' },
  { label: 'In Progress', value: '0', icon: Clock, color: 'ink' },
  { label: 'Completed', value: '0', icon: CheckCircle, color: 'forest' },
  { label: 'Enquiries', value: '0', icon: Mail, color: 'ink' },
];

const recentActivity = [
  // Populated from D1 in production
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-ink-900 mb-1">Overview</h1>
        <p className="text-sm text-ink-500">Welcome to the Sydney TechCycle admin portal.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="p-5 rounded-2xl bg-cream-50 border border-ink-100">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  stat.color === 'forest' ? 'bg-forest-600/10' : 'bg-ink-100'
                }`}>
                  <Icon className={`w-5 h-5 ${stat.color === 'forest' ? 'text-forest-600' : 'text-ink-500'}`} strokeWidth={1.5} />
                </div>
                <TrendingUp className="w-4 h-4 text-ink-300" />
              </div>
              <p className="text-3xl font-display font-bold text-ink-900">{stat.value}</p>
              <p className="text-sm text-ink-500 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent activity */}
      <div className="p-6 rounded-2xl bg-cream-50 border border-ink-100">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display font-semibold text-lg text-ink-900">Recent Activity</h2>
          <button className="text-sm text-forest-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {recentActivity.length === 0 ? (
          <div className="text-center py-12">
            <Clock className="w-8 h-8 text-ink-300 mx-auto mb-2" />
            <p className="text-sm text-ink-400">No recent activity. Collection requests will appear here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-4 rounded-xl bg-cream-100">
                <div className="w-2 h-2 rounded-full bg-forest-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink-900">{activity.title}</p>
                  <p className="text-xs text-ink-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'View Collection Requests', desc: 'Manage incoming requests', icon: PackageOpen },
          { label: 'Update Website Content', desc: 'Edit page content and settings', icon: Mail },
          { label: 'Manage Services', desc: 'Add or update service listings', icon: TrendingUp },
        ].map((action) => {
          const Icon = action.icon;
          return (
            <div key={action.label} className="p-5 rounded-2xl bg-cream-50 border border-ink-100 hover:border-forest-300 transition-colors cursor-pointer group">
              <Icon className="w-6 h-6 text-forest-600 mb-3" strokeWidth={1.5} />
              <p className="font-medium text-ink-900 text-sm mb-1">{action.label}</p>
              <p className="text-xs text-ink-500">{action.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
