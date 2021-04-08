const routes = {
  en: {
    dashboard: 'dashboard',
    settings: 'settings',
  },
  de: {
    dashboard: 'dashboard',
    settings: 'einstellungen',
  },
};
const content = {
  en: {
    dir: 'ltr',
    hello: 'Hello World',
  },
  de: {
    dir: 'ltr',
    hello: 'Hallo Welt',
  },
};

module.exports = {
  template: 'App.svelte',
  permalink: ({ request }) => `/${request.slug}/app/`,
  all: async () => [{ slug: 'en' }, { slug: 'de' }],
  data: async ({ request }) => ({
    routes: routes[request.slug],
    content: content[request.slug],
  }),
};
