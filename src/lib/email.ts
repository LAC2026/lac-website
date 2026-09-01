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

// Sent to the person themselves right after they sign up for hike updates.
// Weekly hike notifications aren't automated yet, so this lets them know and
// points them to Instagram in the meantime.
export async function sendHikeSignupAcknowledgementEmail(toEmail: string, name: string) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set - skipping signup acknowledgement email.');
    return;
  }

  const firstName = name?.trim().split(' ')[0] || 'there';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `LA Activity Club <${FROM_EMAIL}>`,
      to: [toEmail],
      subject: "You're on the list for LA Activity Club hikes!",
      html: `
        <p>Hi ${firstName},</p>
        <p>Thanks so much for signing up for hike updates with LA Activity Club!</p>
        <p>
          We're still working on getting automatic weekly notifications up and running.
          In the meantime, the best way to catch this week's trail, meeting spot, and time
          is to follow us on Instagram at
          <a href="https://www.instagram.com/la_activity_club/">@la_activity_club</a>.
        </p>
        <p>See you on the trail!</p>
        <p>&mdash; LA Activity Club</p>
      `,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Resend acknowledgement email failed:', res.status, errText);
  }
}
