export type CollectionRequestPayload = {
  orgType: string;
  contactName: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  postcode: string;
  buildingLevel: string;
  loadingAccess: string;
  items: Array<{ equipment: string; quantity: string }>;
  dataDestruction: string;
  assetReporting: string;
  recurring: string;
  preferredDate: string;
  accessInstructions: string;
  additionalInfo: string;
};

export async function submitCollectionRequest(payload: CollectionRequestPayload) {
  const response = await fetch('/api/collections', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({})) as { ok?: boolean; id?: number; error?: string };
  if (!response.ok || !data.ok) {
    throw new Error(data.error || 'We could not submit your request. Please try again.');
  }

  window.alert("Enquiry submitted successfully!\n\nThank you for contacting Sydney TechCycle. We'll get in touch with you shortly.");
  window.location.assign('/#request-collection');

  return data;
}
