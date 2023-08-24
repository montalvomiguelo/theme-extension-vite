# Shopify App Template - None (app with extensions only)

This is a template for building a [Shopify app](https://shopify.dev/docs/apps/getting-started) that includes no app home UI. It contains the basics for building a Shopify app that uses only app extensions.

**If you plan for your app to load its own page in the Shopify Admin, then you'll want to choose one of our other templates.**

Whether you choose to use this template or another one, you can use your preferred package manager and the Shopify CLI with [these steps](#installing-the-template).

## Benefits

Shopify apps are built on a variety of Shopify tools to create a great merchant experience. The [create an app](https://shopify.dev/docs/apps/getting-started/create) tutorial in our developer documentation will guide you through creating a Shopify app.

This app template does little more than install the CLI and scaffold a respository.

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
2. You must install [pnpm](https://pnpm.io/) if you don't already have it.
3. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
4. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Setup

Make sure to install the dependencies.

```shell
pnpm install
```
#### Local Development

[The Shopify CLI](https://shopify.dev/docs/apps/tools/cli) connects to an app in your Partners dashboard. It provides environment variables and runs commands in parallel..

You can develop locally using your preferred package manager. Run one of the following commands from the root of your app.

```shell
cd extensions/theme-extension
# you can use the notify flag to enable live reloading
pnpm run dev --notify /tmp/extension.update
```

Open the URL generated in your console. Once you grant permission to the app, you can start development (such as generating extensions).

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-js#readme)
