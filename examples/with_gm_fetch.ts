import { IPGeolocationService } from "../dist/types/client.js";
import IPGeolocationClient from "../dist/client.js";

// you should use your own gm_fetch implementation
// e.g. https://github.com/ilyhalight/voice-over-translation/blob/master/src/utils/utils.js
async function GM_fetch(url: string | Request | URL, opt = {}) {
  return await fetch(url, opt);
}

const client = new IPGeolocationClient({
  service: IPGeolocationService.freeipapi,
  fetchFn: GM_fetch,
});

const result = await client.lookup("103.21.244.0");

console.log(result);
