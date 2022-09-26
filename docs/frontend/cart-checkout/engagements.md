# Payload branch "engagements"

This branch contains a lot of sub-branches, referring to several entities that CAN be attached to a cart/checkout, both by an User action (ex. "user use a coupon") or automatically (current cart composition satisfy some "cart rule" conditions); 

Basically every entity that is not described but every other branch viewed so far will be added to this branch.

Let's review an example:

```js{12-61}
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
| <span style="white-space: nowrap;">campaign</span> | <span style="white-space: nowrap;">object/null</span> | Internal "campaign" object, which will be defined if the User has entered via an URL containing a "campaign code" |
| <span style="white-space: nowrap;">coupon</span> | <span style="white-space: nowrap;">object/null</span> | Internal "coupon" it is is valid and if it has been inserted by the User, along with the "Cart Rule" which holds the coupon code  |
| <span style="white-space: nowrap;">cart_rules</span> | <span style="white-space: nowrap;">array\<Object/null\></span> | Every "Cart Rule" which has been attached to the current checkout  |
| <span style="white-space: nowrap;">gift_option_selected</span> | <span style="white-space: nowrap;">bool</span> | The user has choosed the option "This is a gift" |
| <span style="white-space: nowrap;">extra_service_selected</span> | <span style="white-space: nowrap;">bool</span> | The user has choosed the extra option, for example "I request the engraving service" |
| <span style="white-space: nowrap;">giftcard</span> | <span style="white-space: nowrap;">object/null</span> | Internal "Gift Card" if it is valid and if it has been inserted by the User |
| <span style="white-space: nowrap;">receipt</span> | <span style="white-space: nowrap;">string/null</span> | In a B2B session it holds the 'receipt' attached by the shop's clerk |
| <span style="white-space: nowrap;">vouchers</span> | <span style="white-space: nowrap;">array\<Object/null\></span> | Every "Voucher" (external) which has been attached to the current checkout  |

## Object: "campaign"
This object holds informations about internal "campaign" object, which will be defined if the User has entered via an URL containing a "campaign code", and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Internal campaign unique id (NOT cross-tenant) |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string/null</span> | Campaign's name |
| <span style="white-space: nowrap;">campaign_type</span> | <span style="white-space: nowrap;">int</span> | Internal campaign classification (cross-tenant) |
| <span style="white-space: nowrap;">network</span> | <span style="white-space: nowrap;">int/null</span> | Internal campaign's network (cross-tenant) |

## Object: "coupon"
This object holds informations about internal "coupon" it is is valid and if it has been inserted by the User, along with the "Cart Rule" which refers the coupon code, and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">code</span> | <span style="white-space: nowrap;">string</span> | Coupon code used |
| <span style="white-space: nowrap;">cart_rule</span> | <span style="white-space: nowrap;">object</span> | "Cart Rule" attached to the coupon code |

## Object: "cart_rule"
This object represents a "Cart rule", which is an entity created in Blade to handle "coupons", "gift" and a lot of different scenarios, and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Internal rule unique id (NOT cross-tenant) |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string/null</span> | Cart rule's name |
| <span style="white-space: nowrap;">reduction</span> | <span style="white-space: nowrap;">string/null</span> | The reduction applied to the overall checout total |


## Object: "giftcard"
This object represents a "GC", which is an entity created in Blade to handle gift cards that are special "purchasable" products, and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Internal GC unique id (NOT cross-tenant) |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string/null</span> | Product's name |
| <span style="white-space: nowrap;">code</span> | <span style="white-space: nowrap;">string</span> | Internal GC unique code (cross-tenant) |
| <span style="white-space: nowrap;">customer_name</span> | <span style="white-space: nowrap;">string/null</span> | The gift card's owner |
| <span style="white-space: nowrap;">order_id</span> | <span style="white-space: nowrap;">int/null</span> | Internal order id (gift card's purchase) |
| <span style="white-space: nowrap;">product_id</span> | <span style="white-space: nowrap;">int/null</span> | Internal product id (gift card's purchase) |
| <span style="white-space: nowrap;">amount</span> | <span style="white-space: nowrap;">string</span> | Current GC's amount (credit) |
| <span style="white-space: nowrap;">original_amount</span> | <span style="white-space: nowrap;">string</span> | Original GC's amount (credit) |
| <span style="white-space: nowrap;">expires_at</span> | <span style="white-space: nowrap;">datetime</span> | GC's expiration date time |

## Object: "voucher"
This object represents a "Voucher", which is an entity created in an external platform (CDP) to handle "discounts", and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Internal voucher unique id (NOT cross-tenant) |
| <span style="white-space: nowrap;">code</span> | <span style="white-space: nowrap;">string</span> | Internal voucher unique code (cross-tenant) |
| <span style="white-space: nowrap;">type</span> | <span style="white-space: nowrap;">string</span> | Internal voucher type (cross-tenant);<br> ex: "discount_coupon" or "voucher" |
| <span style="white-space: nowrap;">amount_type</span> | <span style="white-space: nowrap;">string</span> | Internal voucher discount type (cross-tenant);<br> ex: "fixed" or "percentage" |
| <span style="white-space: nowrap;">amount</span> | <span style="white-space: nowrap;">string</span> | Current Voucher's amount (scoped to "amount_type") |