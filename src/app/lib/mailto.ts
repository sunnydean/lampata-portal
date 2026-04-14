interface MailtoField {
  label: string;
  value?: string;
}

interface BuildStructuredMailtoHrefOptions {
  fields: MailtoField[];
  recipient?: string;
  subjectPrefix: string;
  subjectSource?: string;
  summaryLabel: string;
  summaryValue?: string;
}

function withFallback(value?: string) {
  return value || "Not provided";
}

export function buildStructuredMailtoHref({
  fields,
  recipient = "contact@lampata.co.uk",
  subjectPrefix,
  subjectSource,
  summaryLabel,
  summaryValue,
}: BuildStructuredMailtoHrefOptions) {
  const subject = `${subjectPrefix}${subjectSource || "New enquiry"}`;
  const body = [
    ...fields.map(({ label, value }) => `${label}: ${withFallback(value)}`),
    "",
    summaryLabel,
    withFallback(summaryValue),
  ].join("\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
