# Scope "products" events

Basically You are free to subscribe to general events that are fired outside (or event inside) a "cart/checkout" scope, such "adding products to cart" from any location (even landing pages);

so these events cover especially CRUD (Create/Request/Update/Delete) events about products and the current Cart in the user's session.

## onCartAdd
Fired whenever a "product" (or a "variant", or a "combination") is added to the current cart.

Let's review an example:

```js
{
  "product_id": 56400, 
  "product_id_variation": "", 
  "product_id_context": "56400BS", 
  "product_sku": "R8853121004", 
  "product_name": "Orologio Maserati Successo - R8853121004", 
  "product_name_variation": "", 
  "product_unitprice": "103.81", 
  "product_discount": "15.02", 
  "product_unitofficial_price": "122.13", 
  "product_stock_availability": 330, 
  "product_url": "https://www.bluespirit.com/orologio-maserati-successo-r8853121004-P56400.htm", 
  "product_url_img": "https://www.bluespirit.com/i/default/73228/orologio-maserati-successo-r8853121004.jpg", 
  "product_qty": 1, 
  "product_brand": "Maserati", 
  "product_brand_id": 122, 
  "product_collection": "Successo", 
  "product_collection_id": 1365, 
  "product_cat1_name": "Orologi", 
  "product_cat1_id": 1, 
  "product_cat2_name": "Just time", 
  "product_cat2_id": 9, 
  "product_cat3_name": "", 
  "product_cat3_id": "", 
  "product_gender": "M", 
  "product_ispromotion": true, 
  "product_isnew": 0, 
  "product_isoutlet": 0, 
  "product_isoutofprod": 0, 
  "list": null 
}
```

## Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">product_id</span> | <span style="white-space: nowrap;">int</span> | Unique product id (not cross-tenant) |
| <span style="white-space: nowrap;">product_id_variation</span> | <span style="white-space: nowrap;">int/null</span> | Unique product variation/combination id (not cross-tenant) |
| <span style="white-space: nowrap;">product_id_context</span> | <span style="white-space: nowrap;">string</span> | Same product id + tenant unique code (cross-tenant) |
| <span style="white-space: nowrap;">product_sku</span> | <span style="white-space: nowrap;">string</span> | Product SKU (cross-tenant) |
| <span style="white-space: nowrap;">product_name</span> | <span style="white-space: nowrap;">string</span> | Product name (translated) |
| <span style="white-space: nowrap;">product_name_variation</span> | <span style="white-space: nowrap;">string</span> | Product variation/combination name (translated) |
| <span style="white-space: nowrap;">product_unitprice</span> | <span style="white-space: nowrap;">string</span> | Product unit price (default currency) |
| <span style="white-space: nowrap;">product_discount</span> | <span style="white-space: nowrap;">string</span> | Product discount price (default currency) |
| <span style="white-space: nowrap;">product_unitofficial_price</span> | <span style="white-space: nowrap;">string</span> | Product official list price (default currency) |
| <span style="white-space: nowrap;">product_stock_availability</span> | <span style="white-space: nowrap;">int</span> | Available stocks (all types) |
| <span style="white-space: nowrap;">product_url</span> | <span style="white-space: nowrap;">string</span> | Product page URL (tenant based, translated) |
| <span style="white-space: nowrap;">product_url_img</span> | <span style="white-space: nowrap;">string</span> | Product cover image URL (tenant based, CDN) |
| <span style="white-space: nowrap;">product_qty</span> | <span style="white-space: nowrap;">int</span> | Product quantity in the context (added, updated, deleted) |
| <span style="white-space: nowrap;">product_brand</span> | <span style="white-space: nowrap;">string</span> | Product brand (cross-tenant) |
| <span style="white-space: nowrap;">product_brand_id</span> | <span style="white-space: nowrap;">int</span> | Unique Product brand id (not cross-tenant) |
| <span style="white-space: nowrap;">product_collection</span> | <span style="white-space: nowrap;">string</span> | Product collection (cross-tenant) |
| <span style="white-space: nowrap;">product_collection_id</span> | <span style="white-space: nowrap;">int</span> | Unique Product collection id (not cross-tenant) |
| <span style="white-space: nowrap;">product_cat1_name</span> | <span style="white-space: nowrap;">string</span> | Product main category (cross-tenant) |
| <span style="white-space: nowrap;">product_cat1_id</span> | <span style="white-space: nowrap;">int</span> | Unique Product main category id (not cross-tenant) |
| <span style="white-space: nowrap;">product_cat2_name</span> | <span style="white-space: nowrap;">string</span> | Product default category (cross-tenant) |
| <span style="white-space: nowrap;">product_cat2_id</span> | <span style="white-space: nowrap;">int</span> | Unique Product default category id (not cross-tenant) |
| <span style="white-space: nowrap;">product_cat3_name</span> | <span style="white-space: nowrap;">string/null</span> | Product sub category (cross-tenant) |
| <span style="white-space: nowrap;">product_cat3_id</span> | <span style="white-space: nowrap;">int/null</span> | Unique Product sub category id (not cross-tenant) |
| <span style="white-space: nowrap;">product_gender</span> | <span style="white-space: nowrap;">char(1)</span> | Product category gender code:<br>[M]an / [W]oman / [U]nisex / [C]hild |
| <span style="white-space: nowrap;">product_ispromotion</span> | <span style="white-space: nowrap;">bool</span> | Product status flag "in promotion" |
| <span style="white-space: nowrap;">product_isnew</span> | <span style="white-space: nowrap;">int(1)</span> | Product status flag "new" |
| <span style="white-space: nowrap;">product_isoutlet</span> | <span style="white-space: nowrap;">int(1)</span> | Product status flag "outlet" |
| <span style="white-space: nowrap;">product_isoutofprod</span> | <span style="white-space: nowrap;">int(1)</span> | Product status flag "out-of-production" |

## onCartUpdate
Fired whenever a "product" (or a "variant", or a "combination") is updated in the current cart.

::: tip YOU KNOW IT!
In order to be consistent the payload is identical to the one detailed in the <a href="/frontend/bus-events/products.html#variables-full-details">onCartAdd - Variables full details</a> section.
:::

## onCartDelete
Fired whenever a "product" (or a "variant", or a "combination") is removed/deleted from the current cart.

::: tip YOU KNOW IT!
In order to be consistent the payload is identical to the one detailed in the <a href="/frontend/bus-events/products.html#variables-full-details">onCartAdd - Variables full details</a> section.
:::
