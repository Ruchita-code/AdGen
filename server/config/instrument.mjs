import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://3de5f3853ac2096bc60e6e4ed13d7e3c@o4511024632233984.ingest.us.sentry.io/4511024645144576",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});