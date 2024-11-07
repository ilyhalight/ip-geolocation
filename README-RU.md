# IP Geolocation

[![GitHub Actions](https://github.com/ilyhalight/ip-geolocation/actions/workflows/ci.yml/badge.svg)](https://github.com/ilyhalight/ip-geolocation/actions/workflows/ci.yml)
[![npm](https://img.shields.io/bundlejs/size/@toil/ip-geolocation)](https://www.npmjs.com/package/@toil/ip-geolocation)
[![en](https://img.shields.io/badge/lang-English%20%F0%9F%87%AC%F0%9F%87%A7-white)](README.md)
[![ru](https://img.shields.io/badge/%D1%8F%D0%B7%D1%8B%D0%BA-%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9%20%F0%9F%87%B7%F0%9F%87%BA-white)](README-RU.md)

Библиотека для бесплатного (и не только бесплатного) использования IP Geolocation APIs, которая поддерживает работу с JavaScript, TypeScript, а также имеет встроенные типы для Typebox.

## Установка

Установка с Bun:

```bash
bun add @toil/ip-geolocation
```

Установка с Node:

```bash
npm install @toil/ip-geolocation
```

## Начало работы

Чтобы начать работу с API, вам необходимо создать IPGeolocation клиент. Это можно сделать, воспользовавшись приведенным ниже кодом.

```ts
const client = new IPGeolocationClient({
  service: IPGeolocationService.freeipapi,
});

const result = await client.lookup("103.21.244.0");
```

Вы можете увидеть больше примеров кода [здесь](https://github.com/ilyhalight/ip-geolocation/tree/main/examples)

## Доступные сервисы

В некоторых сервисах передача зарезервированных диапазонов айпи адресов может вызывать ошибку - это нормально.

Если вам не хватает каких-то данных в методе lookup, и они должны быть у сервиса, рекомендуется рассмотреть использование провайдера напрямую, используя метод rawLookup

| Статус | Сервис                              | Лимиты     | Функции                               |
| ------ | ----------------------------------- | ---------- | ------------------------------------- |
| ✅     | [FreeIPAPI](https://freeipapi.com/) | 60 req/min | [подробнее](SERVICES-RU.md#freeipapi) |
| ✅     | [IPAPICom](https://ip-api.com)      | 45 req/min | [подробнее](SERVICES-RU.md#ipapicom)  |

Более подробная информация о поддерживаемых сервисах доступа [тут](SERVICES-RU.md)

## Сборка

Для сборки необходимо наличие:

- [Bun](https://bun.sh/)

Не забудьте установить зависимости:

```bash
bun install
```

#### Обычная сборка

Сборка всего пакета:

```bash
bun build:bun
```

#### Сборка TypeBox типов

Вы можете воспользоваться данным вариантом сборки, если вы хотите собрать, только, типы для TypeBox:

```bash
bun build:typebox
```

## Тесты

Библиотека имеет минимальное покрытие тестами для проверки ее работоспособности.

Запустить тесты:

```bash
bun test
```
