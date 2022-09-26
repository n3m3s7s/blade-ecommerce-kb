# Payload branch "attributes"
The first "branch" of the payload is made of those informations that are relative to the order confirmation/purchase only, and for some reason they cannot be easily grouped into other "scoped branch".

Let's review an example:

```js{2-19}
{  
  "attributes": {
    "id": 146,
    "reference": "BSO00298",
    "cart_id": 298,
    "lang_id": "it",
    "availability_mode": "master",    
    "currency": {
      "id": 1,
      "name": "Euro",
      "iso_code": "EUR"
    },
    "total": "34.96",
    "total_discount": "10.00",
    "total_taxes": "6.30",
    "total_products": "84.96",
    "total_shipment": "0.00",
    "total_payment": "0.00"
  },
  "products": [...],
  "carrier": {...},
  "payment": {...},
  "delivery": {...},
  "billing": {...},
  "user": {...},
  "engagements": {...}
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Current cart session id |
| <span style="white-space: nowrap;">reference</span> | <span style="white-space: nowrap;">string</span> | Internal unique order reference/code |
| <span style="white-space: nowrap;">cart_id</span> | <span style="white-space: nowrap;">int</span> | Internal unique cart ID which caused this order |
| <span style="white-space: nowrap;">lang_id</span> | <span style="white-space: nowrap;">string</span> | ISO-CODE of the user language |
| <span style="white-space: nowrap;">availability_mode</span> | <span style="white-space: nowrap;">string</span> | Internal logic for order splitting |
| <span style="white-space: nowrap;">currency</span> | <span style="white-space: nowrap;">object</span> | The currenct currency object;<br>see <a href="#object-currency">Object: "currency"</a> |
| <span style="white-space: nowrap;">total</span> | <span style="white-space: nowrap;">string</span> | Final total for the current cart |
| <span style="white-space: nowrap;">total_cart_discount</span> | <span style="white-space: nowrap;">string</span> | Amount of the "cart_discount" for the current cart |
| <span style="white-space: nowrap;">total_discount</span> | <span style="white-space: nowrap;">string</span> | Amount of the "discount" for the current cart |
| <span style="white-space: nowrap;">total_taxes</span> | <span style="white-space: nowrap;">string</span> | Total taxes for the current cart |
| <span style="white-space: nowrap;">total_products</span> | <span style="white-space: nowrap;">string</span> | Total for all products (without reductions) |
| <span style="white-space: nowrap;">total_shipment</span> | <span style="white-space: nowrap;">string</span> | Shipment extra charge |
| <span style="white-space: nowrap;">total_payment</span> | <span style="white-space: nowrap;">string</span> | Payment extra charge |

## Object: "currency"
This object holds informations about a currency, and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Unique id |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string</span> | Translated description |
| <span style="white-space: nowrap;">iso_code</span> | <span style="white-space: nowrap;">string</span> | Universal ISO-CODE(3) |