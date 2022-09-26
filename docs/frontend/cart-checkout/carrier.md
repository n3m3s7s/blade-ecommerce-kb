# Payload branch "carrier"

This branch contains general informations about the "carrier" or "courier" choosed by the User or automatically selected by the business logic;

Let's review an example:

```js{7-13}
{
  "context": "...",
  "event": "...",
  "checkout_step": "...",
  "attributes": {...},
  "products": [...],
  "carrier": {
    "id": 4,
    "name": "Ritiro presso Store Bluespirit",
    "virtual": false,
    "shops_required": false,
    "skip_shipping": false
  },
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
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Unique carrier id (cross-tenant) |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string</span> | Carrier name (translated) |
| <span style="white-space: nowrap;">virtual</span> | <span style="white-space: nowrap;">boolean</span> | Carrier is present but do not required |
| <span style="white-space: nowrap;">shops_required</span> | <span style="white-space: nowrap;">boolean</span> | Shipment must be fulfilled with a pickup store |
| <span style="white-space: nowrap;">skip_shipping</span> | <span style="white-space: nowrap;">boolean</span> | Carrier does not require a physical shipment |