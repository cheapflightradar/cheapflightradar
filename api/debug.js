// Temporary debug endpoint — DELETE THIS FILE after fixing the issue
export default function handler(req, res) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  res.status(200).json({
    hasApiKey: !!apiKey,
    apiKeyLength: apiKey ? apiKey.length : 0,
    apiKeyEndsWithDash: apiKey ? apiKey.includes('-') : false,
    datacenter: apiKey ? apiKey.split('-').pop() : null,
    hasAudienceId: !!audienceId,
    audienceIdLength: audienceId ? audienceId.length : 0,
  });
}
