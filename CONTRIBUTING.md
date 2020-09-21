# Contributing

First of all, thank you for considering contributing to Tinder API Docs. These docs couldn't exist without people like you! 

## Project Structure

All endpoints are organised through github issues. There are two types of issue templates: One for [submitting a new endpoint](https://github.com/Kaktushose/tinder-api-docs/issues/new?assignees=&labels=&template=new-endpoint.md&title=) and one for reporting that a documented [endpoint is deprecated](https://github.com/Kaktushose/tinder-api-docs/issues/new?assignees=&labels=&template=endpoint-deprecation.md&title=). 

The issues or respectively the endpoints are all categorised by [labels](https://github.com/Kaktushose/tinder-api-docs/labels) indicating their status and type. 

A [project board](https://github.com/Kaktushose/tinder-api-docs/projects/1) is used to further organise the reverse engineering and documentation. 

Currently we plan to documentate all endpoints in the [`endpoints.md`](https://github.com/Kaktushose/tinder-api-docs/blob/master/endpoints.md) file, but we may move on to readthedocs or swagger in the future. 

## Getting Started

### Submitting a new endpoint

Although [@fbessez](https://github.com/fbessez/Tinder) has already covered most of the endpoints and we have so far transferred them all as issues, there are still endpoints that we have not yet covered, especially the endpoints for the paid features are still very incomplete. So if you've found a new endpoint, feel free to create an issue. Your issue should at least include the following things:

- the API route, *e.g. `/profile`*
- the request method, *e.g. `GET`*

However, it would be great if you could also include the request/response body or any other information that might be helpful. 

### Working on submitted endpoints

Any issues (endpoints) located in the `Reseach Needed` column in the [project board](https://github.com/Kaktushose/tinder-api-docs/projects/1) aren't yet ready to be documented. The endpoint might:
- either have or be a duplicate
- be deprecated 
- have any other problem which is not covered by labels and is described inside the issue, you don't need to follow any format, just tell us what you've found. 

We would appreciate any reverse engineering results that you can contribute to these endpoints. Just add a comment to the issue. 

### Writing Documentation

All issues (endpoints) located in the `Confirmed` column are ready to be documented. Once you've transmitted all available informatation from the issue to the [`endpoints.md`](https://github.com/Kaktushose/tinder-api-docs/blob/master/endpoints.md) file, you can open a pull request to submit your changes. 