import IPAPIComProvider from "../dist/providers/ipapicom.js";
import { RawLookupFullSuccessResponse } from "../dist/types/providers/ipapicom.js";

const provider = new IPAPIComProvider({});

type LookupResult = Pick<
  RawLookupFullSuccessResponse,
  "status" | "message" | "isp" | "org" | "as" | "asname" | "hosting"
>;

// return status, message, isp, org, as, asname, hosting on russian lang
const result = await provider.rawLookup<LookupResult>(
  "103.21.244.0",
  "21024256",
  "ru",
);

console.log(result);
