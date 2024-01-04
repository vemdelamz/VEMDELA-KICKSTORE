// hydrogen.config.ts

import {defineConfig} from '@shopify/hydrogen/config';

/* The `defineConfig` function is an optional utility that provides types for the configuration object. */
export default defineConfig({
  /* The routes defined by Vite's import.meta.globEager method. */
  routes: '/src/routes',
  /* The information that your app needs to connect to the Storefront API. */
  shopify: {
    /* The domain of your Shopify store */
    storeDomain: '{shop_domain}.myshopify.com',
    /* Your app's public Storefront API access token. Authenticates browser and client requests. */
    storefrontToken: Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN,
    /* Your app's private Storefront API server (delegate access) token. Authenticates server requests. */
    privateStorefrontToken: Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    /* The Storefront API version that your app uses */
    storefrontApiVersion: '2022-07',
    /* (Optional) The unique ID for the storefront. Only gets assigned by Oxygen */
    storefrontId: Oxygen?.env?.PUBLIC_STOREFRONT_ID,
  },
  /* A path to a custom page to render when the server encounters an unhandled exception */
  serverErrorPage: '/src/Error.jsx',
});