// Temporary debug — DELETE after fixing
export default async function handler(req, res) {
  const API_KEY     = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DC          = API_KEY ? API_KEY.split('-')[1] : null;

  if (!API_KEY || !AUDIENCE_ID || !DC) {
    return res.status(200).json({ error: 'env vars missing', hasApiKey: !!API_KEY, hasAudienceId: !!AUDIENCE_ID });
  }

  // Make a real test call to Mailchimp with a dummy email
  const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
    },
    body: JSON.stringify({
      email_address: 'debugtest@gmail.com',
      status: 'subscribed',
    }),
  });

  const data = await response.json();

  // Return full Mailchimp response so we can see exact error
  return res.status(200).json({
    mailchimpStatus: response.status,
    mailchimpResponse: data,
    dc: DC,
    apiKeyLength: API_KEY.length,
    audienceIdLength: AUDIENCE_ID.length,
  });
}
