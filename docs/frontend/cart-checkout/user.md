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