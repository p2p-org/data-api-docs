# Data-api-doc

This is a repository containing [OpenAPI](https://spec.openapis.org/oas/v3.1.0) documentation for the `Staking rewards API` project.

## Service overview:

It is assumed that this documentation will be hosted using [Redocly](https://redocly.com/docs/redoc/deployment/intro/)

## Installation

If you have Docker installed, pull the image with the following command:

```
$ docker pull redocly/redoc
```

## Usage

Then run the image with the following command.
Use the `SPEC_URL=` path to the OpenAPI documentation.
```
$ docker run -p 8080:80 -e SPEC_URL=https://api.example.com/openapi.json redocly/redoc
```
