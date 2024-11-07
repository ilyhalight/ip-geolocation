# IP Geolocation

[![GitHub Actions](https://github.com/ilyhalight/ip-geolocation/actions/workflows/ci.yml/badge.svg)](https://github.com/ilyhalight/ip-geolocation/actions/workflows/ci.yml)
[![npm](https://img.shields.io/bundlejs/size/@toil/ip-geolocation)](https://www.npmjs.com/package/@toil/ip-geolocation)
[![ru](https://img.shields.io/badge/%D1%8F%D0%B7%D1%8B%D0%BA-%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9%20%F0%9F%87%B7%F0%9F%87%BA-white)](README-RU.md)
[![en](https://img.shields.io/badge/lang-English%20%F0%9F%87%AC%F0%9F%87%A7-white)](README.md)

A library for free (and not only free) use of the IP Geolocation APIs, which supports working with JavaScript, TypeScript, and also has built-in separated types for Typebox.

## Installation

Installation via Bun:

```bash
bun add @toil/ip-geolocation
```

Installation via NPM:

```bash
npm install @toil/ip-geolocation
```

## Getting started

To get started with the API, you need to create an IPGeolocation client. This can be done using the code below.

```ts
const client = new IPGeolocationClient({
  service: IPGeolocationService.freeipapi,
});

const result = await client.lookup("103.21.244.0");
```

You can see more code examples [here](https://github.com/ilyhalight/ip-geolocation/tree/main/examples)

## Available services

In some services, transferring reserved ranges of IP addresses may cause an error - this is normal.

If you are missing some data in the lookup method, and the service should have it, it's recommended to consider using the provider directly using the rawLookup method

| Status | Service                             | Limits     | Features                        |
| ------ | ----------------------------------- | ---------- | ------------------------------- |
| ✅     | [FreeIPAPI](https://freeipapi.com/) | 60 req/min | [detail](SERVICES.md#freeipapi) |
| ✅     | [IPAPICom](https://ip-api.com)      | 45 req/min | [detail](SERVICES.md#ipapicom)  |

More detailed information about the supported access services [here](SERVICES.md)

## Build

To build, you must have:

- [Bun](https://bun.sh/)

Don't forget to install the dependencies:

```bash
bun install
```

#### Regular Build

Building the entire package:

```bash
bun build:bun
```

#### Building a types for TypeBox

You can use this build option if you only want to build types for TypeBox:

```bash
bun build:typebox
```

## Tests

The library has minimal test coverage to check it's performance.

Run the tests:

```bash
bun test
```
