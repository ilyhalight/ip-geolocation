import { IPGeolocationService } from "../dist/types/client.js";
import IPGeolocationClient from "../dist/client.js";

const client = new IPGeolocationClient({
  service: IPGeolocationService.freeipapi,
});

const result = await client.lookup("103.21.244.0");

console.log(result);
