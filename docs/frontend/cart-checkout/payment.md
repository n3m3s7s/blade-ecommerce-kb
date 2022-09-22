# Payload branch "payment"

Under construction...

Let's review an example:

```js{8-13}
{
  "context": "...",
  "event": "...",
  "checkout_step": "...",
  "attributes": {...},
  "products": [...],
  "carrier": {...},
  "payment": {
    "id": 1,
    "name": "Paypal",
    "module": "paypal",
    "online": true
  },
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
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Unique payment method id (cross-tenant) |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string</span> | Payment method name (translated) |
| <span style="white-space: nowrap;">module</span> | <span style="white-space: nowrap;">string</span> | Internal gateway used (cross-tenant) |
| <span style="white-space: nowrap;">online</span> | <span style="white-space: nowrap;">boolean</span> | Payment method requires an external gateway/redirect |