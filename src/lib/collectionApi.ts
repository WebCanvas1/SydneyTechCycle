import type { CollectionItem, OrganisationType } from './types';

export interface CollectionRequestPayload {
  organisationType: OrganisationType | '';
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
  items: CollectionItem[];
  dataDestruction: 'YES' | 'NO' | 'NOT SURE' | '';
  assetReporting: 'YES' | 'NO' | '';
  recurring: 'YES' | 'NO' | '';
  preferredDate: string;
  accessInstructions: string;
  additionalInfo: string;
}

export async function submitCollectionRequest(payload: CollectionRequestPayload) {
  const response = await fetch('/api/collections', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let body: { id?: number; error?: string } = {};
  try {
    body = await response.json();
  } catch {
    // Keep a useful generic error when the server returns a non-JSON response.
  }

  if (!response.ok) {
    throw new Error(body.error || 'Unable to submit your collection request. Please try again.');
  }

  return body;
}
