import { useState } from 'react';
import {
  ArrowRight, ArrowLeft, Check, Building2, User, MapPin,
  Monitor, Settings, FileText, Send, X, Plus,
} from 'lucide-react';
import type { OrganisationType, EquipmentType, CollectionItem } from '@/lib/types';

const ORG_TYPES: OrganisationType[] = [
  'Business', 'Enterprise', 'School / Education', 'Government',
  'Healthcare', 'IT Provider', 'Community Organisation', 'Other Organisation',
];

const EQUIPMENT_TYPES: EquipmentType[] = [
  'Computers', 'Laptops', 'Monitors', 'Phones', 'Tablets',
  'Servers', 'Networking equipment', 'Hard drives / SSDs',
  'Printers', 'Accessories', 'Other',
];

const STEPS = ['Organisation', 'Contact', 'Location', 'Equipment', 'Requirements', 'Review'];
const STEP_ICONS = [Building2, User, MapPin, Monitor, Settings, FileText];

export default function CollectionForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [orgType, setOrgType] = useState<OrganisationType | ''>('');
  const [contactName, setContactName] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [postcode, setPostcode] = useState('');
  const [buildingLevel, setBuildingLevel] = useState('');
  const [loadingAccess, setLoadingAccess] = useState('');
  const [items, setItems] = useState<CollectionItem[]>([]);
  const [dataDestruction, setDataDestruction] = useState<'YES' | 'NO' | 'NOT SURE' | ''>('');
  const [assetReporting, setAssetReporting] = useState<'YES' | 'NO' | ''>('');
  const [recurring, setRecurring] = useState<'YES' | 'NO' | ''>('');
  const [preferredDate, setPreferredDate] = useState('');
  const [accessInstructions, setAccessInstructions] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const canProceed = () => {
    switch (step) {
      case 0: return orgType !== '';
      case 1: return !!(contactName && company && email && phone);
      case 2: return !!(address && suburb && postcode);
      case 3: return items.length > 0;
      case 4: return dataDestruction !== '' && assetReporting !== '' && recurring !== '';
      default: return true;
    }
  };

  const addItem = () => setItems([...items, { equipment: 'Computers', quantity: '' }]);
  const updateItem = (index: number, field: 'equipment' | 'quantity', value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));
  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <section id="request-collection" className="bg-cream-100 section-py">
        <div className="container-px">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="w-20 h-20 rounded-full bg-forest-600 flex items-center justify-center mx-auto mb-8 animate-scale-in">
              <Check className="w-10 h-10 text-cream-50" strokeWidth={2} />
            </div>
            <h2 className="text-display text-4xl lg:text-5xl text-ink-900 mb-4">Request Received.</h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-2 text-pretty">
              Thank you for contacting Sydney TechCycle.
            </p>
            <p className="text-base text-ink-500 leading-relaxed mb-8 text-pretty">
              Our team will review your collection requirements and contact you regarding the next step.
            </p>
            <div className="p-5 rounded-xl bg-cream-50 border border-ink-100 mb-8">
              <p className="text-sm text-ink-500">
                Please note: This is a request, not a confirmed booking. Our team will be in touch to finalise details.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false); setStep(0); setOrgType(''); setItems([]);
                setDataDestruction(''); setAssetReporting(''); setRecurring('');
              }}
              className="btn-secondary"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="request-collection" className="bg-cream-100 section-py">
      <div className="container-px">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 reveal">
            <span className="text-eyebrow text-forest-600 mb-4 block">Request a Collection</span>
            <h2 className="text-display text-4xl lg:text-5xl text-ink-900 mb-3">Tell us what needs collecting.</h2>
            <p className="text-ink-500 text-pretty">Complete the form below and our team will review your requirements.</p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-between mb-10 reveal reveal-delay-1">
            {STEPS.map((label, i) => {
              const Icon = STEP_ICONS[i];
              const isComplete = i < step;
              const isCurrent = i === step;
              return (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isComplete ? 'bg-forest-600 text-cream-50'
                        : isCurrent ? 'bg-ink-900 text-cream-50 ring-4 ring-ink-900/10'
                        : 'bg-cream-200 text-ink-400 border border-ink-200'
                    }`}>
                      {isComplete ? <Check className="w-5 h-5" strokeWidth={2} /> : <Icon className="w-4 h-4" strokeWidth={1.5} />}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block transition-colors ${isCurrent || isComplete ? 'text-ink-900' : 'text-ink-400'}`}>{label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 rounded transition-colors duration-300 ${isComplete ? 'bg-forest-600' : 'bg-ink-200'}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Form card */}
          <div className="bg-cream-50 border border-ink-100 rounded-2xl p-6 lg:p-10 reveal reveal-delay-2">
            {/* Step 0: Organisation */}
            {step === 0 && (
              <div className="animate-fade-up">
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-2">Organisation Type</h3>
                <p className="text-sm text-ink-500 mb-6">What type of organisation are you?</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {ORG_TYPES.map((type) => (
                    <button key={type} onClick={() => setOrgType(type)}
                      className={`p-4 rounded-xl border text-sm font-medium text-left transition-all duration-300 ${
                        orgType === type ? 'border-forest-600 bg-forest-600/8 text-forest-800 ring-2 ring-forest-500/10'
                          : 'border-ink-200 bg-cream-50 text-ink-600 hover:border-forest-300'
                      }`}>{type}</button>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-ink-100 border border-ink-200">
                  <p className="text-xs text-ink-500">Sydney TechCycle is a B2B service. We do not service households or residential customers.</p>
                </div>
              </div>
            )}

            {/* Step 1: Contact */}
            {step === 1 && (
              <div className="animate-fade-up space-y-4">
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-2">Contact Details</h3>
                <p className="text-sm text-ink-500 mb-6">Who should we contact about this collection?</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Contact Name</label><input value={contactName} onChange={(e) => setContactName(e.target.value)} className="input-premium" placeholder="Jane Smith" /></div>
                  <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Company / Organisation</label><input value={company} onChange={(e) => setCompany(e.target.value)} className="input-premium" placeholder="Acme Pty Ltd" /></div>
                  <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Position</label><input value={position} onChange={(e) => setPosition(e.target.value)} className="input-premium" placeholder="IT Manager" /></div>
                  <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Business Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-premium" placeholder="jane@acme.com.au" /></div>
                  <div className="sm:col-span-2"><label className="text-sm font-medium text-ink-700 mb-1.5 block">Phone</label><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-premium" placeholder="02 1234 5678" /></div>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="animate-fade-up space-y-4">
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-2">Collection Location</h3>
                <p className="text-sm text-ink-500 mb-6">Where should we collect the equipment?</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2"><label className="text-sm font-medium text-ink-700 mb-1.5 block">Business Address</label><input value={address} onChange={(e) => setAddress(e.target.value)} className="input-premium" placeholder="123 George Street" /></div>
                  <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Suburb</label><input value={suburb} onChange={(e) => setSuburb(e.target.value)} className="input-premium" placeholder="Sydney" /></div>
                  <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Postcode</label><input value={postcode} onChange={(e) => setPostcode(e.target.value)} className="input-premium" placeholder="2000" maxLength={4} /></div>
                  <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Building / Level</label><input value={buildingLevel} onChange={(e) => setBuildingLevel(e.target.value)} className="input-premium" placeholder="Level 12, Tower B" /></div>
                  <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Loading Access Information</label><input value={loadingAccess} onChange={(e) => setLoadingAccess(e.target.value)} className="input-premium" placeholder="Loading dock off Pitt St" /></div>
                </div>
              </div>
            )}

            {/* Step 3: Equipment */}
            {step === 3 && (
              <div className="animate-fade-up">
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-2">Equipment Details</h3>
                <p className="text-sm text-ink-500 mb-6">What equipment needs collecting? Add approximate quantities.</p>
                {items.length === 0 && (
                  <div className="text-center py-8 border-2 border-dashed border-ink-200 rounded-xl">
                    <Monitor className="w-8 h-8 text-ink-300 mx-auto mb-2" />
                    <p className="text-sm text-ink-400">No equipment added yet</p>
                  </div>
                )}
                <div className="space-y-3">
                  {items.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="flex-1"><select value={item.equipment} onChange={(e) => updateItem(i, 'equipment', e.target.value)} className="input-premium appearance-none cursor-pointer">{EQUIPMENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
                      <div className="w-32"><input value={item.quantity} onChange={(e) => updateItem(i, 'quantity', e.target.value)} className="input-premium" placeholder="Qty" /></div>
                      <button onClick={() => removeItem(i)} className="w-11 h-11 rounded-xl bg-ink-100 text-ink-500 flex items-center justify-center shrink-0 transition-colors hover:bg-red-50 hover:text-red-600"><X className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
                <button onClick={addItem} className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-ink-200 text-sm font-medium text-ink-600 transition-all duration-300 hover:border-forest-400 hover:text-forest-700"><Plus className="w-4 h-4" />Add Equipment</button>
              </div>
            )}

            {/* Step 4: Requirements */}
            {step === 4 && (
              <div className="animate-fade-up space-y-5">
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-2">Requirements</h3>
                <p className="text-sm text-ink-500 mb-6">Any specific requirements for this collection?</p>
                <div>
                  <label className="text-sm font-medium text-ink-700 mb-2 block">Data destruction required?</label>
                  <div className="flex gap-3">
                    {(['YES', 'NO', 'NOT SURE'] as const).map((opt) => (
                      <button key={opt} onClick={() => setDataDestruction(opt)} className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${dataDestruction === opt ? 'border-forest-600 bg-forest-600/8 text-forest-800' : 'border-ink-200 bg-cream-50 text-ink-600 hover:border-forest-300'}`}>{opt === 'NOT SURE' ? 'Not Sure' : opt}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700 mb-2 block">Asset reporting required?</label>
                  <div className="flex gap-3">
                    {(['YES', 'NO'] as const).map((opt) => (
                      <button key={opt} onClick={() => setAssetReporting(opt)} className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${assetReporting === opt ? 'border-forest-600 bg-forest-600/8 text-forest-800' : 'border-ink-200 bg-cream-50 text-ink-600 hover:border-forest-300'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700 mb-2 block">Recurring collections?</label>
                  <div className="flex gap-3">
                    {(['YES', 'NO'] as const).map((opt) => (
                      <button key={opt} onClick={() => setRecurring(opt)} className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${recurring === opt ? 'border-forest-600 bg-forest-600/8 text-forest-800' : 'border-ink-200 bg-cream-50 text-ink-600 hover:border-forest-300'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
                <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Preferred Collection Date</label><input type="date" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} className="input-premium" /></div>
                <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Access Instructions</label><textarea value={accessInstructions} onChange={(e) => setAccessInstructions(e.target.value)} className="input-premium min-h-[80px] resize-none" placeholder="E.g. After-hours access via rear entrance, security check-in required..." /></div>
                <div><label className="text-sm font-medium text-ink-700 mb-1.5 block">Additional Information</label><textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} className="input-premium min-h-[80px] resize-none" placeholder="Anything else we should know?" /></div>
              </div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <div className="animate-fade-up">
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-2">Review Your Request</h3>
                <p className="text-sm text-ink-500 mb-6">Please review the details before submitting.</p>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-cream-100 border border-ink-100"><p className="text-eyebrow text-ink-400 mb-2">Organisation</p><p className="text-ink-900 font-medium">{orgType}</p></div>
                  <div className="p-5 rounded-xl bg-cream-100 border border-ink-100"><p className="text-eyebrow text-ink-400 mb-2">Contact</p><div className="grid sm:grid-cols-2 gap-2 text-sm text-ink-700"><p>{contactName}</p><p>{company}</p><p>{position}</p><p>{email}</p><p>{phone}</p></div></div>
                  <div className="p-5 rounded-xl bg-cream-100 border border-ink-100"><p className="text-eyebrow text-ink-400 mb-2">Collection Location</p><div className="grid sm:grid-cols-2 gap-2 text-sm text-ink-700"><p className="sm:col-span-2">{address}</p><p>{suburb} {postcode}</p><p>{buildingLevel}</p>{loadingAccess && <p className="sm:col-span-2">Loading: {loadingAccess}</p>}</div></div>
                  <div className="p-5 rounded-xl bg-cream-100 border border-ink-100"><p className="text-eyebrow text-ink-400 mb-2">Equipment</p><div className="space-y-1">{items.map((item, i) => <div key={i} className="flex justify-between text-sm text-ink-700"><span>{item.equipment}</span><span className="text-ink-500">{item.quantity || '—'}</span></div>)}</div></div>
                  <div className="p-5 rounded-xl bg-cream-100 border border-ink-100"><p className="text-eyebrow text-ink-400 mb-2">Requirements</p><div className="grid sm:grid-cols-2 gap-2 text-sm text-ink-700"><p>Data destruction: <span className="font-medium">{dataDestruction === 'NOT SURE' ? 'Not Sure' : dataDestruction}</span></p><p>Asset reporting: <span className="font-medium">{assetReporting}</span></p><p>Recurring: <span className="font-medium">{recurring}</span></p>{preferredDate && <p>Preferred date: <span className="font-medium">{preferredDate}</span></p>}</div>{accessInstructions && <p className="text-sm text-ink-600 mt-2 pt-2 border-t border-ink-100">Access: {accessInstructions}</p>}{additionalInfo && <p className="text-sm text-ink-600 mt-2 pt-2 border-t border-ink-100">Notes: {additionalInfo}</p>}</div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-ink-100">
              {step > 0 ? (
                <button onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"><ArrowLeft className="w-4 h-4" />Back</button>
              ) : <span />}
              {step < STEPS.length - 1 ? (
                <button onClick={() => canProceed() && setStep(step + 1)} disabled={!canProceed()} className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-ink-950 font-semibold text-sm rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0">Continue<ArrowRight className="w-4 h-4" /></button>
              ) : (
                <button onClick={handleSubmit} className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-ink-950 font-semibold text-sm rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:-translate-y-0.5">Submit Collection Request<Send className="w-4 h-4" /></button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
