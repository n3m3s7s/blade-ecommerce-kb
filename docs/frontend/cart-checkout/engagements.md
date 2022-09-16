# Payload branch "engagements"

Under construction...

Let's review an example:

```js{12-34}
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
  "user": {...},
  "engagements": {
    "campaign": {
      "id": null,
      "name": null,
      "campaign_type": null,
      "network": null
    },
    "coupon": {
      "code": null,
      "cart_rule": null
    },
    "cart_rules": [
      {
        "id": 275,
        "name": "Test Offer x for y",
        "reduction": 440
      }
    ],
    "gift_option_selected": false,
    "extra_service_selected": true,
    "giftcard": null,
    "vouchers": []
  }
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch: