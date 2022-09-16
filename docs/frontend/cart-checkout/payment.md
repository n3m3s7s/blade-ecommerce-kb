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
    "online": 1
  },
  "delivery": {...},
  "billing": {...},
  "user": {...},
  "engagements": {...}
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch: