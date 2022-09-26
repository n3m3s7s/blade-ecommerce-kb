# Payload branch "attributes"
The first "branch" of the payload is made of those informations that are relative to the cart/checkout/purchase only, and for some reason they cannot be easily grouped into other "scoped branch".

Let's review an example:

```js{5-24}
{
  "context": "...",
  "event": "...",
  "checkout_step": "...",
  "attributes": {
    "id": 298,
    "lang_id": "it",
    "availability_mode": "master",
    "currency": {
      "id": 1,
      "name": "Euro",
      "iso_code": "EUR"
    },
    "products_total_qty": 2,
    "total": "84.96",
    "total_cart_discount": "0",
    "total_discount": "0",
    "total_taxes": "15.32",
    "total_products": "539.95",
    "total_products_real": "84.96",
    "total_products_discount": "454.99",
    "total_shipment": "0",
    "total_payment": "0"
  },
  "products": [...],
  "carrier": {...},
  "payment": {...},
  "delivery": {...},
  "billing": {...},
  "user": {...},
  "engagements": {...}[](http://localhost:5173/frontend/cart-checkout/attributes.html#object-currency)
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Current cart session id |
| <span style="white-space: nowrap;">lang_id</span> | <span style="white-space: nowrap;">string</span> | ISO-CODE of the user language |
| <span style="white-space: nowrap;">availability_mode</span> | <span style="white-space: nowrap;">string</span> | Internal logic for order splitting |
| <span style="white-space: nowrap;">currency</span> | <span style="white-space: nowrap;">object</span> | The currenct currency object;<br>see <a href="#object-currency">Object: "currency"</a> |
| <span style="white-space: nowrap;">products_total_qty</span> | <span style="white-space: nowrap;">int</span> | Overall total quantity of items in the cart |
| <span style="white-space: nowrap;">total</span> | <span style="white-space: nowrap;">string</span> | Final total for the current cart |
| <span style="white-space: nowrap;">total_cart_discount</span> | <span style="white-space: nowrap;">string</span> | Amount of the "cart_discount" for the current cart |
| <span style="white-space: nowrap;">total_discount</span> | <span style="white-space: nowrap;">string</span> | Amount of the "discount" for the current cart |
| <span style="white-space: nowrap;">total_taxes</span> | <span style="white-space: nowrap;">string</span> | Total taxes for the current cart |
| <span style="white-space: nowrap;">total_products</span> | <span style="white-space: nowrap;">string</span> | Total for all products (without reductions) |
| <span style="white-space: nowrap;">total_products_real</span> | <span style="white-space: nowrap;">string</span> | Total for all products (reductions applied) |
| <span style="white-space: nowrap;">total_products_discount</span> | <span style="white-space: nowrap;">string</span> | Total reduction applied to products |
| <span style="white-space: nowrap;">total_shipment</span> | <span style="white-space: nowrap;">string</span> | Shipment extra charge |
| <span style="white-space: nowrap;">total_payment</span> | <span style="white-space: nowrap;">string</span> | Payment extra charge |

## Object: "currency"
This object holds informations about a currency, and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Unique id |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string</span> | Translated description |
| <span style="white-space: nowrap;">iso_code</span> | <span style="white-space: nowrap;">string</span> | Universal ISO-CODE(3) |