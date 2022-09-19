# Payload branch "carrier"

Under construction...

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
    "virtual": 0,
    "shops_required": 0,
    "skip_shipping": 0
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