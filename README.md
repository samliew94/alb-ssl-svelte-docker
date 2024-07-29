# ALB + SSL + EC2 + SvelteKit Demo

## Preface

This repo is made so I can learn how to enable HTTPS on SvelteKit hosted on EC2.

The idea is to terminate SSL at the load balancer (LB).

That means the LB will convert incoming HTTPS traffice into unencrypted HTTP.

On SvelteKit's level, I don't have to do any other configurations like explicitly specifying path of private key & cert.

The private key & cert will be self-generated using OpenSSL which also means the browser will complain, but that's expected and fine for a tutorial.

## Build & Run with Docker

### Build

Execute `docker build -t my-app .`

### Run

This app will run as a NodeJS application as written in https://kit.svelte.dev/docs/adapter-node

All the needed env(s) are specified in the repo's `.env`.

At the time of writing the kvps are `ORIGIN` and `JWT_SECRET`.

Pass the kvps on run:

```
docker run -e ORIGIN="http://localhost:8080" -e JWT_SECRET="FOO" -p 8080:3000 alb
```

## About Cookies...

By default, SvelteKit's `cookies.set(name, ...)` does the following:

```
{
	httpOnly: true,
	secure: true,
	sameSite: 'lax'
}
```

According to docs:

https://kit.svelte.dev/docs/types (_see heading Cookies_)  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

The `secure` flag is automatically set to `false` in `http://localhost` but other than that, it is set to `true`.

When deployed (_output from `npm run build`_), the connection must `HTTPS` otherwise cookies won't work!
