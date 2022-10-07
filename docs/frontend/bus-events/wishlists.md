# Scope "wishlists" events

Blade will send some small payloads to the bus whenever a frontend User will be able to "add" or "remove" items from his/her **Wishlists**.

## onWishlistAdd
Fired whenever a "item" (or a "product") will successfully added to a Wishlist.

Let's review an example:

```js
{
  "product_id": "17969",
  "product_sku": "GU.W0647L6",
  "product_name": "OROLOGIO GUESS CHELSEA - GU.W0647L6",
  "wishlist_name": "Regali Genitori"
}
```

### Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">product_id</span> | <span style="white-space: nowrap;">string/int</span> | Unique product id |
| <span style="white-space: nowrap;">product_sku</span> | <span style="white-space: nowrap;">string</span> | Unique product SKU |
| <span style="white-space: nowrap;">product_name</span> | <span style="white-space: nowrap;">string</span> | Contextual product name |
| <span style="white-space: nowrap;">wishlist_name</span> | <span style="white-space: nowrap;">string</span> | Customer's wishlist name |


## onWishlistRemove
Fired whenever a "item" (or a "product") will successfully deleted from a Wishlist.

Let's review an example:

```js
{
  "product_id": "17969",
  "product_sku": "GU.W0647L6",
  "product_name": "OROLOGIO GUESS CHELSEA - GU.W0647L6",
  "wishlist_name": "Regali Genitori"
}
```

### Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">product_id</span> | <span style="white-space: nowrap;">string/int</span> | Unique product id |
| <span style="white-space: nowrap;">product_sku</span> | <span style="white-space: nowrap;">string</span> | Unique product SKU |
| <span style="white-space: nowrap;">product_name</span> | <span style="white-space: nowrap;">string</span> | Contextual product name |
| <span style="white-space: nowrap;">wishlist_name</span> | <span style="white-space: nowrap;">string</span> | Customer's wishlist name |