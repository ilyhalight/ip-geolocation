import { Type, Static } from '@sinclair/typebox'


export type FetchFunction = Static<typeof FetchFunction>
export const FetchFunction = Type.Function([Type.Union([
Type.String(),
Type.Never(),
Type.Never()
]), Type.Optional(Type.Any())], Type.Promise(Type.Never()))

export enum EnumIPGeolocationService { freeipapi = "freeipapi", ipapicom = "ipapicom" }

export type IPGeolocationService = Static<typeof IPGeolocationService>
export const IPGeolocationService = Type.Enum(EnumIPGeolocationService)

export type IPGeolocationOpts = Static<typeof IPGeolocationOpts>
export const IPGeolocationOpts = Type.Object({
service: Type.Optional(IPGeolocationService),
fetchFn: Type.Optional(FetchFunction),
fetchOpts: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
apiUrl: Type.Optional(Type.String()),
apiKey: Type.Optional(Type.String()),
headers: Type.Optional(Type.Record(Type.String(), Type.Unknown()))
})