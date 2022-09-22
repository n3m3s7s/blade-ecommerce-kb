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
      "id": 1,
      "name": "Test campaign",
      "campaign_type": 4,
      "network": null
    },
    "coupon": {
      "code": "22WB00EYKPXPBS",
      "cart_rule": {
        "id": 274,
        "name": "Simple discount 100"
      }
    },
    "cart_rules": [
      {
        "id": 274,
        "name": "Simple discount 100",
        "reduction": "10.00"
      },
      {
        "id": 275,
        "name": "Test Offer x for y",
        "reduction": "440.00"
      }
    ],
    "gift_option_selected": false,
    "extra_service_selected": true,
    "giftcard": {
      "id": 2,
      "name": "GIFT CARD 30 €",
      "code": "R0VHWOMLJ8B9",
      "customer_name": "FABIO POLITI",
      "order_id": 128,
      "product_id": 76029,
      "amount": "30.00",
      "original_amount": "30.00",
      "expires_at": "2022-11-25 15:12:48"
    },
    "receipt": null,
    "vouchers": [
      {
        "id": 27,
        "code": "43D15D4E506F4",
        "type": "discount_coupon",
        "amount_type": "fixed",
        "amount": "10.00"
      }
    ]
  }
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">receipt</span> | <span style="white-space: nowrap;">string/null</span> | In a B2B session it holds the 'receipt' attached by the shop's clerk |