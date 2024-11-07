import { describe, expect, test } from "bun:test";
import IPGeolocationClient from "../src";
import { IPGeolocationService } from "../src/types/client";
import { ipv4, ipv6, reservedIP } from "./data";

const ipGeolocationClient = new IPGeolocationClient({
  service: IPGeolocationService.freeipapi,
});

describe("lookup", () => {
  test("reserved ip", async () => {
    const res = await ipGeolocationClient.lookup(reservedIP);
    console.log(res);
    expect(res.city).toEqual("-");
    expect(res.region).toEqual("-");
    expect(res.country).toEqual("-");
    expect(res.timezone).toBeUndefined();
  });
  test("ip v4", async () => {
    const res = await ipGeolocationClient.lookup(ipv4);
    expect(res.city).not.toEqual(null);
    expect(res.city).not.toEqual("-");
    expect(res.region).not.toEqual(null);
    expect(res.region).not.toEqual("-");
    expect(res.country).not.toEqual(null);
    expect(res.country).not.toEqual("-");
    expect(res.timezone).not.toBeUndefined();
  });
  test("ip v6", async () => {
    const res = await ipGeolocationClient.lookup(ipv6);
    expect(res.city).not.toEqual(null);
    expect(res.city).not.toEqual("-");
    expect(res.region).not.toEqual(null);
    expect(res.region).not.toEqual("-");
    expect(res.country).not.toEqual(null);
    expect(res.country).not.toEqual("-");
    expect(res.timezone).not.toBeUndefined();
  });
});
