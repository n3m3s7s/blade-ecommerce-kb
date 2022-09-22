# Payload branch "user"

Under construction...

Let's review an example:

```js{11-21}
{
  "context": "...",
  "event": "...",
  "checkout_step": "...",
  "attributes": {...},
  "products": [...],
  "carrier": {...},
  "payment": {...},
  "delivery": {...},
  "billing": {...},
  "user": {
    "ip": "79.26.211.79",
    "origin": "desktop",
    "logged_in": true,
    "customer": {
      "id": 1,
      "email": "f.politi@icoa.it",
      "email_hash": "dcf11fbf911e8345d0a1ce4a78b17817",
      "card_code": "9950002499788",
      "cdp_identity_tier": "novip",
      "cdp_identity_id": 1651
    }
  },
  "engagements": {...}
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">ip</span> | <span style="white-space: nowrap;">string</span> | IPv4 or IPv6 internet address of the user |
| <span style="white-space: nowrap;">origin</span> | <span style="white-space: nowrap;">string</span> | Which device/theme is using the user ("desktop" or "mobile") |