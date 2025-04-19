import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://9079e2767c047f9771bc481561e297a1@o4509179229700096.ingest.de.sentry.io/4509179231076432",

	integrations: [
		Sentry.replayIntegration(),
		Sentry.feedbackIntegration({
			// Additional SDK configuration goes in here, for example:
			colorScheme: "system",
		}),
	],
	replaysSessionSampleRate: 1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
