# Payload branch "products"
This branch is always an array, and it contains all the products that have been added to the cart (even "free products" added automatically);

Let's review an example:

```js{6-83}
{
  "context": "...",
  "event": "...",
  "checkout_step": "...",
  "attributes": {...},
  "products": [
    {
      "id": 19499,
      "id_variation": null,
      "id_context": "19499BS",
      "sku": "CL30025",
      "name": "Orologio CLUSE MINUIT - CL30025",
      "name_variation": null,
      "unitprice": "69.64",
      "discount": "10.07",
      "unitofficial_price": "81.93",
      "stock_availability": 102,
      "url": "https://bluespirit.collaudo.biz/orologio-cluse-minuit-cl30025-P19499.htm",
      "url_img": "https://bluespirit.collaudo.biz/i/default/29770/orologio-cluse-minuit-cl30025.jpg",
      "qty": 1,
      "brand": "Cluse",
      "brand_id": 121,
      "collection": "Minuit",
      "collection_id": 1308,
      "cat1_name": "Orologi",
      "cat1_id": 1,
      "cat2_name": "Just time",
      "cat2_id": 9,
      "cat3_name": null,
      "cat3_id": null,
      "gender": "W",
      "ispromotion": true,
      "isnew": false,
      "isoutlet": false,
      "isoutofprod": false,
      "isspecial": false,
      "hasreduction": false,
      "cart_rule_id": null,
      "reduction_percent": null,
      "reduction_amount": null,
      "availability_mode": "shop",
      "availability_shop_code": "871",
      "availability_warehouse": "NG"
    },
    {
      "id": 57385,
      "id_variation": null,
      "id_context": "57385BS",
      "sku": "R8253597037",
      "name": "OROLOGIO PHILIP WATCH CARIBE - R8253597037",
      "name_variation": null,
      "unitprice": "360.66",
      "discount": "0.00",
      "unitofficial_price": "360.66",
      "stock_availability": 111,
      "url": "https://bluespirit.collaudo.biz/orologio-philip-watch-caribe-r8253597037-P57385.htm",
      "url_img": "https://bluespirit.collaudo.biz/i/default/79294/orologio-philip-watch-caribe-r8253597037.jpg",
      "qty": 1,
      "brand": "Philip Watch",
      "brand_id": 39,
      "collection": "Caribe",
      "collection_id": 1400,
      "cat1_name": "Orologi",
      "cat1_id": 1,
      "cat2_name": "Just time",
      "cat2_id": 9,
      "cat3_name": null,
      "cat3_id": null,
      "gender": "M",
      "ispromotion": false,
      "isnew": false,
      "isoutlet": false,
      "isoutofprod": false,
      "isspecial": true,
      "hasreduction": true,
      "cart_rule_id": 275,
      "reduction_percent": "100.000",
      "reduction_amount": "0.000",
      "availability_mode": "online",
      "availability_shop_code": null,
      "availability_warehouse": "01"
    }
  ],
  "carrier": {...},
  "payment": {...},
  "delivery": {...},
  "billing": {...},
  "user": {...},
  "engagements": {...}
}
```
## Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">id</span> | <span style="white-space: nowrap;">int</span> | Unique product id (not cross-tenant) |
| <span style="white-space: nowrap;">id_variation</span> | <span style="white-space: nowrap;">int/null</span> | Unique product variation/combination id (not cross-tenant) |
| <span style="white-space: nowrap;">id_context</span> | <span style="white-space: nowrap;">string</span> | Same product id + tenant unique code (cross-tenant) |
| <span style="white-space: nowrap;">sku</span> | <span style="white-space: nowrap;">string</span> | Product SKU (cross-tenant) |
| <span style="white-space: nowrap;">name</span> | <span style="white-space: nowrap;">string</span> | Product name (translated) |
| <span style="white-space: nowrap;">name_variation</span> | <span style="white-space: nowrap;">string</span> | Product variation/combination name (translated) |
| <span style="white-space: nowrap;">unitprice</span> | <span style="white-space: nowrap;">string</span> | Product unit price (default currency) |
| <span style="white-space: nowrap;">discount</span> | <span style="white-space: nowrap;">string</span> | Product discount price (default currency) |
| <span style="white-space: nowrap;">unitofficial_price</span> | <span style="white-space: nowrap;">string</span> | Product official list price (default currency) |
| <span style="white-space: nowrap;">stock_availability</span> | <span style="white-space: nowrap;">int</span> | Available stocks (all types) |
| <span style="white-space: nowrap;">url</span> | <span style="white-space: nowrap;">string</span> | Product page URL (tenant based, translated) |
| <span style="white-space: nowrap;">url_img</span> | <span style="white-space: nowrap;">string</span> | Product cover image URL (tenant based, CDN) |
| <span style="white-space: nowrap;">qty</span> | <span style="white-space: nowrap;">int</span> | Product quantity in cart |
| <span style="white-space: nowrap;">brand</span> | <span style="white-space: nowrap;">string</span> | Product brand (cross-tenant) |
| <span style="white-space: nowrap;">brand_id</span> | <span style="white-space: nowrap;">int</span> | Unique Product brand id (not cross-tenant) |
| <span style="white-space: nowrap;">collection</span> | <span style="white-space: nowrap;">string</span> | Product collection (cross-tenant) |
| <span style="white-space: nowrap;">collection_id</span> | <span style="white-space: nowrap;">int</span> | Unique Product collection id (not cross-tenant) |
| <span style="white-space: nowrap;">cat1_name</span> | <span style="white-space: nowrap;">string</span> | Product main category (cross-tenant) |
| <span style="white-space: nowrap;">cat1_id</span> | <span style="white-space: nowrap;">int</span> | Unique Product main category id (not cross-tenant) |
| <span style="white-space: nowrap;">cat2_name</span> | <span style="white-space: nowrap;">string</span> | Product default category (cross-tenant) |
| <span style="white-space: nowrap;">cat2_id</span> | <span style="white-space: nowrap;">int</span> | Unique Product default category id (not cross-tenant) |
| <span style="white-space: nowrap;">cat3_name</span> | <span style="white-space: nowrap;">string/null</span> | Product sub category (cross-tenant) |
| <span style="white-space: nowrap;">cat3_id</span> | <span style="white-space: nowrap;">int/null</span> | Unique Product sub category id (not cross-tenant) |
| <span style="white-space: nowrap;">gender</span> | <span style="white-space: nowrap;">char(1)</span> | Product category gender code:<br>[M]an / [W]oman / [U]nisex / [C]hild |
| <span style="white-space: nowrap;">ispromotion</span> | <span style="white-space: nowrap;">bool</span> | Product status flag "in promotion" |
| <span style="white-space: nowrap;">isnew</span> | <span style="white-space: nowrap;">bool</span> | Product status flag "new" |
| <span style="white-space: nowrap;">isoutlet</span> | <span style="white-space: nowrap;">bool</span> | Product status flag "outlet" |
| <span style="white-space: nowrap;">isoutofprod</span> | <span style="white-space: nowrap;">bool</span> | Product status flag "out of production" |
| <span style="white-space: nowrap;">isspecial</span> | <span style="white-space: nowrap;">bool</span> | Product cart status flag "special": this item has been added to the cart by a CartRule |
| <span style="white-space: nowrap;">hasreduction</span> | <span style="white-space: nowrap;">bool</span> | Product cart status flag "hasreduction": this item is subjected to a reduction by a CartRule |
| <span style="white-space: nowrap;">cart_rule_id</span> | <span style="white-space: nowrap;">int/null</span> | The inner CartRule applied to this item(s) |
| <span style="white-space: nowrap;">reduction_percent</span> | <span style="white-space: nowrap;">string/null</span> | Applied reduction is percentual (1-100)% |
| <span style="white-space: nowrap;">reduction_amount</span> | <span style="white-space: nowrap;">string/null</span> | Applied reduction is a fixed amount |
| <span style="white-space: nowrap;">availability_mode</span> | <span style="white-space: nowrap;">availability_mode</span> | Product cart given availability mode:<br>"online", "shop", "offline" |