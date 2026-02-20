// Vercel serverless function — keeps your Mailchimp API key secret
// Environment variables are set in Vercel dashboard → Project Settings → Environment Variables

export const config = {
  api: { bodyParser: true },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const API_KEY     = process.env.MAILCHIMP_API_KEY;     // e.g. "abc123..."-us21
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID; // e.g. "a1b2c3d4e5"
  const DC          = API_KEY ? API_KEY.split('-')[1] : null; // datacenter e.g. "us21"

  if (!API_KEY || !AUDIENCE_ID || !DC) {
    return res.status(500).json({ error: 'Mailchimp environment variables not configured' });
  }

  const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      tags: ['cheapflightradar'],
    }),
  });

  const data = await response.json();

  // 200 = newly subscribed, "Member Exists" = already on list (treat as success)
  if (response.ok || data.title === 'Member Exists') {
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ error: data.detail || 'Subscription failed' });
}
