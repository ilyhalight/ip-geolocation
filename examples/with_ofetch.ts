import { ofetch } from "ofetch";
import { IPGeolocationService } from "../dist/types/client.js";
import IPGeolocationClient from "../dist/client.js";

// https://github.com/unjs/ofetch
const client = new IPGeolocationClient({
  service: IPGeolocationService.freeipapi,
  fetchFn: ofetch.native,
});

const result = await client.lookup("103.21.244.0");

console.log(result);
