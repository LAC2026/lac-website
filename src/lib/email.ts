const TEAM_EMAIL = 'team@laactivityclub.com';
// This must be an email address on a domain you've verified in Resend (see setup docs).
// Using a laactivityclub.com address here means that domain needs to be verified in Resend.
const FROM_EMAIL = 'notifications@laactivityclub.com';

export async function sendNotificationEmail(subject: string, html: string) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set - skipping email notification.');
    return;
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `LA Activity Club <${FROM_EMAIL}>`,
      to: [TEAM_EMAIL],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Resend email failed:', res.status, errText);
  }
}
