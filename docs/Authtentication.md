# Authentication

Tinder uses Basic Authentication to "secure" their api. A request needs a `X-Auth-Token` header in order to be authenticated. 

## Getting a token

Login to Tinder in your browser. Open the network tab and filter for `api.gotinder.com`. Choose any `GET` or `POST` request and go to the Request Headers. There, you'll find the `X-Auth-Token` header containing the auth token. Please note: you might need to perform some actions first (for example liking a user) before you see any requests. 

## Invalidating a token

You can invalidate a token by logging out. 

## Lifetime of a token
The tokens have a lifetime of approximately a little `less than 4 days`, should no logout occur in the meantime.
This information is not exact but an empirical value over 3 months.

## Login Flow

> Tinder recently updated their login flow to `v3/auth/` endpoints and for some reason started to use [protobuf](https://developers.google.com/protocol-buffers). The old `v2/auth` or even `/auth/` endpoints aren't working anymore. However, the new `v3` endpoints aren't documented yet. 
