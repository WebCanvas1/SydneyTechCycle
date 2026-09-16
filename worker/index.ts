interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
}

type CollectionItem = { equipment?: string; quantity?: string };
type CollectionPayload = {
  orgType?: string; contactName?: string; company?: string; position?: string;
  email?: string; phone?: string; address?: string; suburb?: string; postcode?: string;
  buildingLevel?: string; loadingAccess?: string; items?: CollectionItem[];
  dataDestruction?: string; assetReporting?: string; recurring?: string;
  preferredDate?: string; accessInstructions?: string; additionalInfo?: string;
};

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});

const clean = (v: unknown, max = 1000) => typeof v === 'string' ? v.trim().slice(0, max) : '';

async function createCollection(request: Request, env: Env) {
  let body: CollectionPayload;
  try { body = await request.json(); } catch { return json({ error: 'Invalid JSON.' }, 400); }

  const orgType = clean(body.orgType, 100);
  const contactName = clean(body.contactName, 150);
  const company = clean(body.company, 200);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 50);
  const address = clean(body.address, 250);
  const suburb = clean(body.suburb, 120);
  const postcode = clean(body.postcode, 10);
  const dataDestruction = clean(body.dataDestruction, 20);
  const assetReporting = clean(body.assetReporting, 10);
  const recurring = clean(body.recurring, 10);
  const items = Array.isArray(body.items) ? body.items.slice(0, 100) : [];

  if (!orgType || !contactName || !company || !email || !phone || !address || !suburb || !postcode || !dataDestruction || !assetReporting || !recurring || !items.length) {
    return json({ error: 'Please complete all required fields.' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Invalid email address.' }, 400);

  const insert = await env.DB.prepare(`INSERT INTO collection_requests
    (organisation_type, contact_name, company, position, email, phone, address, suburb, postcode, building_level, loading_access, data_destruction, asset_reporting, recurring, preferred_date, access_instructions, additional_info)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .bind(orgType, contactName, company, clean(body.position, 150), email, phone, address, suburb, postcode,
      clean(body.buildingLevel, 150), clean(body.loadingAccess, 500), dataDestruction, assetReporting, recurring,
      clean(body.preferredDate, 30), clean(body.accessInstructions, 2000), clean(body.additionalInfo, 4000))
    .run();

  const requestId = Number(insert.meta.last_row_id);
  const statements = items.map((item) => env.DB.prepare(
    'INSERT INTO collection_items (collection_request_id, equipment, quantity) VALUES (?, ?, ?)'
  ).bind(requestId, clean(item.equipment, 100), clean(item.quantity, 50)));
  if (statements.length) await env.DB.batch(statements);

  return json({ ok: true, id: requestId }, 201);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    try {
      if (url.pathname === '/api/health' && request.method === 'GET') return json({ ok: true });
      if (url.pathname === '/api/collections' && request.method === 'POST') return await createCollection(request, env);
      if (url.pathname.startsWith('/api/')) return json({ error: 'Not found.' }, 404);
      return env.ASSETS.fetch(request);
    } catch (error) {
      console.error(error);
      return json({ error: 'Internal server error.' }, 500);
    }
  },
};
