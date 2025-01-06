# Welcome to Guacamole with Remix!

This project is the follow-up to the course of Remix.js - The Practical Guide in Udemy.

## Development

Run the dev server:

```shellscript
npm run dev
```
or as I'm using Bun:

```shellscript
bun dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
