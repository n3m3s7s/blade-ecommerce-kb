# Scope "promotions" events

Blade will send some small payloads to the bus whenever a "Promotion" entity is showed or clicked into/from the current browser's session.

## onPromoImpression
Fired whenever a "Promotion" is showed to a User.

Let's see an example:

```js
{
    "id": "PROMO_1234",
    "name": 'BlackFriday 2024 sales'
}
```

### Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">string</span> | A composed variable which is built by concatenating the string 'PROMO_' with the unique ID of the promotion |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string</span> | Custom promotion's name |


## onPromoClick
Fired whenever a "user" (or a "customer") will click on a "Promotion" page.

Let's see an example:

```js
{
    success: true, 
    msg: 'Disconnessione avvenuta con successo; attendere il redirect automatico',
    redirect: null, 
    customer_id: 1
}
```

### Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">string</span> | A composed variable which is built by concatenating the string 'PROMO_' with the unique ID of the promotion |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string</span> | Custom promotion's name |

