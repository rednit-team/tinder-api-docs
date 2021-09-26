# Headers

The following headers are required:

Header       | Example
------------ | ---------------------------------------------
X-Auth-Token | the auth token *[How do I get one?](https://rednit.stoplight.io/explore/tinder-api/nodes/docs/Authentication.md)*                     |
Content-type | application/json
User-agent   | Tinder/7.5.3 (iPhone; iOS 10.3.2; Scale/2.00) |..

<!-- theme: warning -->
> Do not send the `platform` header. This will affect the results returned from the api.