# Payload branch "user"

As You can see this branch holds information about general data (IP address, device, etc.) and the current login status of the User, along with the "customer" definition.

Let's review an example:

```js{11-23}
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
| <span style="white-space: nowrap;">logged_in</span> | <span style="white-space: nowrap;">bool</span> | User's login status |
| <span style="white-space: nowrap;">customer</span> | <span style="white-space: nowrap;">object/null</span> | If the user is logged-in, it holds general info about the "customer" |

## Object: "customer"
This object holds informations about the logged-in User (Customer), and it is always defined with these variables:
| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Internal customer unique ID (NOT cross-tenant) |
| <span style="white-space: nowrap;">email</span> | <span style="white-space: nowrap;">string</span> | Plain customer's email address (cross-tenant) |
| <span style="white-space: nowrap;">email_hash</span> | <span style="white-space: nowrap;">string</span> | Plain customer's email address, as MD5 hash (cross-tenant) |
| <span style="white-space: nowrap;">card_code</span> | <span style="white-space: nowrap;">string/null</span> | Fidelity card code (cross-tenant) |
| <span style="white-space: nowrap;">cdp_identity_tier</span> | <span style="white-space: nowrap;">string/null</span> | Fidelity tier as last stated bu the CDP |
| <span style="white-space: nowrap;">cdp_identity_id</span> | <span style="white-space: nowrap;">string/null</span> | CDP identity unique ID (cross-tenant) |