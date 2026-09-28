import { SITE } from "../config/site";

// Body items: a string is a paragraph, { list: [...] } is a bulleted list.
// Any occurrence of SITE.email in a string is rendered as a mailto link.

export const LEGAL_UPDATED = "28 September 2026";

export const LEGAL_PAGES = [
  {
    slug: "privacy",
    label: "Privacy policy",
    title: "Privacy policy",
    lede: `How ${SITE.name} collects, uses and protects personal information — on this website and inside the product.`,
    sections: [
      {
        heading: "Who we are",
        body: [
          `${SITE.name} (“we”, “us”) builds a GTM brain for B2B teams: a model of your CRM, analytics and search data, and agents that act on it. This policy covers ${SITE.domain} and the ${SITE.name} product.`,
          `Questions about this policy can be sent to ${SITE.email}.`,
        ],
      },
      {
        heading: "What we collect",
        body: [
          {
            list: [
              "Contact details you give us — your name, work email and company when you book a meeting or write to us.",
              "Account details for the people on your team who use the product.",
              "Data from the systems you connect, such as Search Console, GA4 and your CRM. What this contains depends on what you connect; see the Data handling page.",
              "Basic technical information our hosting provider records when you load a page, such as IP address, browser and time of request.",
            ],
          },
        ],
      },
      {
        heading: "How we use it",
        body: [
          {
            list: [
              "To run the meetings you book and reply to messages you send.",
              "To build and maintain your company’s GTM brain and run the agents you switch on.",
              "To keep the service secure and working.",
              "To meet legal obligations.",
            ],
          },
          "We do not sell personal information, and we do not use one customer’s data to serve another.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "We use a small number of service providers to host the product, schedule meetings and send email. They process data only on our instructions and only to provide their service to us.",
          "We may disclose information where the law requires it, or as part of a merger or acquisition, in which case this policy continues to apply.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "We keep information for as long as we need it for the purposes above. When a customer account closes, data from connected systems is deleted as described on the Data handling page.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          `You can ask to see, correct or delete the personal information we hold about you, or withdraw consent you have given. Write to ${SITE.email} and we will respond within 30 days.`,
          "If your information reached us through a customer’s connected systems, we may refer your request to that customer, who controls that data.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "If we make a material change, we will update the date at the top of this page and, where appropriate, tell customers directly.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    label: "Terms of service",
    title: "Terms of service",
    lede: `The terms that apply when you use ${SITE.domain} and the ${SITE.name} product.`,
    sections: [
      {
        heading: "Agreement",
        body: [
          `By using ${SITE.domain} or the ${SITE.name} product you agree to these terms. If you use the product on behalf of a company, you confirm you can accept these terms for it. Where we have a signed agreement with your company, that agreement takes precedence.`,
        ],
      },
      {
        heading: "The service",
        body: [
          `${SITE.name} connects to systems you choose, builds a model of your go-to-market, ranks opportunities and, where you switch them on, runs agents that carry out approved work. We may improve or change features over time.`,
        ],
      },
      {
        heading: "Your responsibilities",
        body: [
          {
            list: [
              "Connect only systems and data you are authorised to share with us.",
              "Keep your account credentials secure and tell us promptly about any unauthorised use.",
              "Review the work you ask agents to do. You decide what is published or pushed to your systems.",
              "Do not misuse the service, attempt to break its security, or use it to break the law.",
            ],
          },
        ],
      },
      {
        heading: "Your data",
        body: [
          "You own your data. You grant us permission to use it only to provide the service to you. We never pool it with other customers’ data or use it to serve anyone else.",
        ],
      },
      {
        heading: "Estimates and results",
        body: [
          "Revenue figures, confidence scores and forecasts are estimates based on your historical data. They are not guarantees of future results.",
        ],
      },
      {
        heading: "Fees",
        body: ["Fees, billing terms and any trial period are set out in your order form or plan."],
      },
      {
        heading: "Ending the service",
        body: [
          "You can stop using the service and revoke our access to your systems at any time. We may suspend or end access if these terms are seriously breached. On closure, your data is deleted as described on the Data handling page.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "The service is provided with reasonable care and skill. To the extent the law allows, we are not liable for indirect or consequential loss, and our total liability is limited to the fees you paid us in the twelve months before the claim.",
        ],
      },
      {
        heading: "Governing law",
        body: ["These terms are governed by the laws of India."],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms can be sent to ${SITE.email}.`],
      },
    ],
  },
  {
    slug: "data-handling",
    label: "Data handling",
    title: "Data handling",
    lede: "What the brain reads, what it writes, and how your data is protected along the way.",
    sections: [
      {
        heading: "Read-only by default",
        body: [
          "Every connection starts read-only. The brain reads from the systems you connect; nothing is written back until you switch on a specific agent that needs to, such as one that publishes to your CMS.",
          "Write access is requested per agent, scoped to what that agent does, and can be revoked at any time from the connected system.",
        ],
      },
      {
        heading: "What we connect to",
        body: [
          {
            list: [
              "Search and site behaviour: Google Search Console, Google Analytics 4.",
              "Pipeline: HubSpot, Salesforce or Pipedrive.",
              "Commerce: Shopify, if you sell online.",
              "Publishing: Webflow or WordPress, only if you want agents to publish.",
            ],
          },
          "You choose which of these to connect. We only request the permissions each connection needs.",
        ],
      },
      {
        heading: "Every change is reversible",
        body: [
          "Agents never delete. Each change they make is recorded as a revision you can review and roll back in one click.",
        ],
      },
      {
        heading: "Your data stays yours",
        body: [
          "Your records build your brain only. They are never pooled with other customers’ data, shared with other customers, or used to train models for anyone else.",
        ],
      },
      {
        heading: "Security",
        body: [
          {
            list: [
              "Data is encrypted in transit and at rest.",
              "Access tokens for connected systems are stored encrypted and used only by the service.",
              "Access by our team is limited to what is needed to support your account.",
            ],
          },
        ],
      },
      {
        heading: "Retention and deletion",
        body: [
          `You can disconnect any system at any time. When you close your account, we delete data from your connected systems within 30 days. To request deletion sooner, write to ${SITE.email}.`,
        ],
      },
      {
        heading: "Questions",
        body: [`For security questions or to report a vulnerability, write to ${SITE.email}.`],
      },
    ],
  },
  {
    slug: "cookies",
    label: "Cookie settings",
    title: "Cookie settings",
    lede: `What ${SITE.domain} stores in your browser, and what it doesn’t.`,
    sections: [
      {
        heading: "What this website uses",
        body: [
          `${SITE.domain} does not use advertising or analytics cookies, and it does not track you across other sites. There is nothing to opt out of on this website today.`,
        ],
      },
      {
        heading: "Booking a meeting",
        body: [
          "When you book a meeting, the scheduling page is provided by Cal.com on its own domain. Cal.com may set cookies needed to run the booking flow; its own cookie policy applies there.",
        ],
      },
      {
        heading: "The product",
        body: [
          "When you sign in to the product, we use strictly necessary cookies to keep you signed in and keep your session secure. These cannot be switched off, because the product does not work without them.",
        ],
      },
      {
        heading: "If this changes",
        body: [
          "If we ever add analytics or other optional cookies, we will ask for your consent first and let you manage your choice from this page.",
          `Questions can be sent to ${SITE.email}.`,
        ],
      },
    ],
  },
];
