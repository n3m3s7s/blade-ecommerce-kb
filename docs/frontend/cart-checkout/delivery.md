# Payload branch "delivery"

In this branch You will find every "entity" that can be related to the "delivery aspect" of the current checkout.

Let's review an example:

```js{9-40}
{
  "context": "...",
  "event": "...",
  "checkout_step": "...",
  "attributes": {...},
  "products": [...],
  "carrier": {...},
  "payment": {...},
  "delivery": {
    "country": {
      "id": 10,
      "name": "Italia",
      "iso_code": "IT"
    },
    "address": {
      "firstname": "FABIO",
      "lastname": "POLITI",
      "company": "",
      "address1": "VIA TOLOI",
      "address2": "40",
      "postcode": "00052",
      "city": "CERVETERI",
      "phone": "3471123000",
      "phone_mobile": "3471123000",
      "fax": null,
      "vat_number": "PLTFBA83A14H501I",
      "cf": "PLTFBA83A14H501I",
      "extrainfo": "f.politi@icoa.it",
      "country_name": "Italia",
      "state_name": "Roma"
    },
    "pickup_store": {
      "code": "871",
      "banner": "BS",
      "name": "BLUESPIRIT 871 ROMA TERMINI"
    },
    "is_cnc": true,
    "is_cnc_2h": true,
    "is_b2b": false
  },
  "billing": {...},
  "user": {...},
  "engagements": {...}
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">country</span> | <span style="white-space: nowrap;">object</span> | country automatically detected by GEO Ip resolution |
| <span style="white-space: nowrap;">address</span> | <span style="white-space: nowrap;">object/null</span> | Choosen shipping address (if exists/defined)  |
| <span style="white-space: nowrap;">pickup_store</span> | <span style="white-space: nowrap;">object/null</span> | Choosen pickup store (if exists/defined)  |

## Object: "country"
This object holds informations about the default country automatically detected by GEO Ip resolution, and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Unique country id (cross-tenant) |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string</span> | Country name (translated) |
| <span style="white-space: nowrap;">iso_code</span> | <span style="white-space: nowrap;">string</span> | Unique Country ISO (2) |

## Object: "address"
This object holds informations about a general "address" (both shipping or billing), and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">firstname</span> | <span style="white-space: nowrap;">string/null</span> | Address's holder firstname (if person) |
| <span style="white-space: nowrap;">lastname</span> | <span style="white-space: nowrap;">string/null</span> | Address's holder lastname (if person) |
| <span style="white-space: nowrap;">company</span> | <span style="white-space: nowrap;">string/null</span> | Address's holder company (if NOT person) |
| <span style="white-space: nowrap;">address1</span> | <span style="white-space: nowrap;">string</span> | Address's part (1) |
| <span style="white-space: nowrap;">address2</span> | <span style="white-space: nowrap;">string</span> | Address's part (2) |
| <span style="white-space: nowrap;">postcode</span> | <span style="white-space: nowrap;">string</span> | Address's postcode/zipcode |
| <span style="white-space: nowrap;">city</span> | <span style="white-space: nowrap;">string</span> | Address's city/location |
| <span style="white-space: nowrap;">phone</span> | <span style="white-space: nowrap;">string</span> | Address's phone |
| <span style="white-space: nowrap;">phone_mobile</span> | <span style="white-space: nowrap;">string/null</span> | Address's mobile phone |
| <span style="white-space: nowrap;">fax</span> | <span style="white-space: nowrap;">string/null</span> | Address's fax number |
| <span style="white-space: nowrap;">vat_number</span> | <span style="white-space: nowrap;">string/null</span> | Address's VAT number |
| <span style="white-space: nowrap;">cf</span> | <span style="white-space: nowrap;">string/null</span> | Address holder fiscal code |
| <span style="white-space: nowrap;">extrainfo</span> | <span style="white-space: nowrap;">string/null</span> | Address's additional info |
| <span style="white-space: nowrap;">country_name</span> | <span style="white-space: nowrap;">string</span> | Address's country name (translated) |
| <span style="white-space: nowrap;">state_name</span> | <span style="white-space: nowrap;">string</span> | Address's state/province name (translated) |

## Object: "pickup_store"
This object holds informations about the pickup shop selected by the User, and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">code</span> | <span style="white-space: nowrap;">string</span> | Internal shop unique code (cross-tenant) |
| <span style="white-space: nowrap;">banner</span> | <span style="white-space: nowrap;">string/null</span> | Internal shop banner organization (cross-tenant) |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string/null</span> | Shop name |


## Other variables
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">is_cnc</span> | <span style="white-space: nowrap;">bool</span> | Click-n-collect enabled/disabled |
| <span style="white-space: nowrap;">is_cnc_2h</span> | <span style="white-space: nowrap;">bool</span> | Click-n-collect in 2H enabled/disabled |
| <span style="white-space: nowrap;">is_b2b</span> | <span style="white-space: nowrap;">bool</span> | The order has been places by a Shop session (B2B) |
