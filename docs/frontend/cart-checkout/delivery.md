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