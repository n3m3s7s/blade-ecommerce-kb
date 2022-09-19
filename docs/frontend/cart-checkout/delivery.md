# Payload branch "delivery"

Under construction...

Let's review an example:

```js{9-37}
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
    }
  },
  "billing": {...},
  "user": {...},
  "engagements": {...}
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch:

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