import { describe, expect, test } from "bun:test";
import IPGeolocationClient from "../src";
import { IPGeolocationService } from "../src/types/client";
import { ipv4, ipv6, reservedIP } from "./data";
import { LookupError } from "@/errors";

const ipGeolocationClient = new IPGeolocationClient({
  service: IPGeolocationService.ipapicom,
});

describe("lookup", () => {
  test("reserved ip", () => {
    expect(async () => await ipGeolocationClient.lookup(reservedIP)).toThrow(
      LookupError,
    );
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
