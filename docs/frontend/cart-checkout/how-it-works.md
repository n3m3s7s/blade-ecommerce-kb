# How it works
Every time a determined event is handled by Blade a very large payload will be crafted within an internal AJAX call and asynchronely "shipped" to the frontend bus channel, always with the same internal "eventLabel".

As a result every tool capable to run Javascript on the Blade frontend can "subscribe" to the bus channel, in order to capture that "eventLabel" and receive a copy of the payload crafted on the server.

::: warning IMPORTANT
the "eventLabel" refers to the label of the global event on the bus channel and has nothing to do with the type and nature of the "event" triggered on the UX scope/level.
:::

## Subscribe to the event bus
Currently, the "eventLabel" is always **"onCheckoutWorkflowEvent"** regardless of the type of event which will be triggered (even page loads); please check the example on how to subscribe to this global event within the current Javascript helper available in the Blade frontend bundle.

So, You have to "subscribe" to the event bus for the event marked as "onCheckoutWorkflowEvent";

This is an example on how you can easily make the subscription, regardless of the tool used and the "async" loading of the frontend.

```js{4-7}
var ccApiEventSubscriber = function () {
    try {
        Shared.listeners({
            'onCheckoutWorkflowEvent': function (payload) {
                //make something with the payload or traverse it
                console.log(payload, 'Blade.Payload');
            }
        });
    } catch (e) {
        console.error(e);
    }
};

// if jQuery has already been loaded, register the function with the jQuery API...
if (window.jQuery) {
    jQuery(document).ready(ccApiEventSubscriber);
} else {
    //... otherwise push the function to the "defer_functions" array, 
    // which is a special array ALWAYS available in all Blade frontends; 
    // Blade will take care to fire every function pushed to this array, 
    // when the DOM has been loaded
    defer_functions.push(ccApiEventSubscriber);
}
```

The highlighted block represents the callback function that will receive the monolith payload as an argument (in the example the "payload" Javascript variable of the anonymous function).

Every time a new payload will be "crafted" and "shipped" to the global bus event, every "listener" successfully subscribed to the eventLabel "onCheckoutWorkflowEvent" will receive a copy of the JSON payload.

## The JSON payload
On the Javscript side, "payload" will be **ALWAYS** a very detailed JSON object enriched with several informations about the current checkout workflow.

::: warning REMEMBER
It is important to consider that this payload object always contains all the informations available and not only some sporadic details about the event triggered/occurred. Most of the times You will not need to access every group/variable available in this monolithic JSON object, but Blade cannot know what do You need for your tracking system, so it is up to You to "cherry-pick" and craft your own payload to consume, or treat some info as strings/labels.
:::

However, since all the pub/sub flow will go through the same "eventLabel" each time an internal event will be triggered, the payload itself will be "marked" with two very important variables, available on the root of the tree represented by the JSON payload object.

| <span style="white-space: nowrap">Variable</span> | Description |
:--------:| -----|
| context | Current context/scope of the workflow; valid values are ONLY "cart", "checkout" |
| event   | Detailed label of the event that just happened; available and valid values depends on the "context", and are all documented in this guide |

Basically "context" and "event" will always be there to tell You (almost) precisely what kind of event occurred, without registering/subscribe a separate Javascript listener with each event.

These variables combined can be chained toghether to have a "scoped" description, since the "event" variable can (and do) have same values for different contexts (such as "cart.view" => "The cart page is viewed" and "checkout.view" => "The checkout page is viewed");

::: info IMPORTANT
Please always check the dedicated page for "context" and "event", to know exactly which they are, how to combine them and if new "events" have been added.
:::

## Payload as a "tree" :evergreen_tree:
As we told the payload dispatched to the listeners is a monolithic JSON object which contains several informations, divided in sub-objects, which themeselves can be divided in sub-objects too;
as a result the payload can be viewed (and treated) has a "tree", with a "root" (containing global variables), several "branches" (group of variables or sub-groups, organized for readibility and accessbility) and "leafs" (the variables containing the values to access);

#### Let's see a sample payload:

```js
{
    "checkout_step": "auth",
    "payment": {
        "id": 1,
        "name": "Paypal",
        "module": "paypal",
        "online": 1
    },
    "carrier": {
        "id": 4,
        "name": "Ritiro presso Store Bluespirit",
        "virtual": 0,
        "shops_required": 0,
        "skip_shipping": 0
    },
    "delivery": {
        "country": {
            "id": 10,
            "name": "Italia",
            "iso_code": "IT"
        },
        "address": {
            "firstname": "FABIO",
            "lastname": "POLITI",
            "company": "",
            "address1": "VIA FOO BAR",
            "address2": "40",
            "postcode": "00052",
            "city": "CERVETERI",
            "phone": "34711222333",
            "phone_mobile": "34711222333",
            "fax": null,
            "vat_number": "PLTFBA83A14K501I",
            "cf": "PLTFBA83A14K501I",
            "extrainfo": "f.politi@icoa.it",
            "country_name": "Italia",
            "state_name": "Roma"
        },
        "pickup_store": {
            "code": "871",
            "banner": "BS",
            "name": "BLUESPIRIT 871 ROMA TERMINI"
        }
    },
    "billing": {
        "address": {
            "firstname": "FABIO",
            "lastname": "POLITI",
            "company": "",
            "address1": "VIA FOO BAR",
            "address2": "40",
            "postcode": "00052",
            "city": "CERVETERI",
            "phone": "34711222333",
            "phone_mobile": "34711222333",
            "fax": null,
            "vat_number": "PLTFBA83A14K501I",
            "cf": "PLTFBA83A14K501I",
            "extrainfo": "f.politi@icoa.it",
            "country_name": "Italia",
            "state_name": "Roma"
        },
        "invoice_required": false
    },
    "user": {
        "logged_in": false,
        "customer": []
    },
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
    },
    "attributes": {
        "id": 298,
        "lang_id": "it",
        "availability_mode": "master",
        "ip": "79.26.211.79",
        "origin": "desktop",
        "receipt": null,
        "currency": {
            "id": 1,
            "name": "Euro",
            "iso_code": "EUR"
        },
        "total": 84.96,
        "total_cart_discount": 0,
        "total_discount": 0,
        "total_taxes": 15.32,
        "total_products": 539.95,
        "total_products_real": 84.96,
        "total_products_discount": 454.99,
        "total_shipment": 0,
        "total_payment": 0
    },
    "products": [
        {
            "product_id": 19499,
            "product_id_variation": "",
            "product_id_context": "19499BS",
            "product_sku": "CL30025",
            "product_name": "Orologio CLUSE MINUIT - CL30025",
            "product_name_variation": "",
            "product_unitprice": "69.64",
            "product_discount": "10.07",
            "product_unitofficial_price": "81.93",
            "product_stock_availability": 102,
            "product_url": "https://bluespirit.collaudo.biz/orologio-cluse-minuit-cl30025-P19499.htm",
            "product_url_img": "https://bluespirit.collaudo.biz/i/default/29770/orologio-cluse-minuit-cl30025.jpg",
            "product_qty": 1,
            "product_brand": "Cluse",
            "product_brand_id": 121,
            "product_collection": "Minuit",
            "product_collection_id": 1308,
            "product_cat1_name": "Orologi",
            "product_cat1_id": 1,
            "product_cat2_name": "Just time",
            "product_cat2_id": 9,
            "product_cat3_name": "",
            "product_cat3_id": "",
            "product_gender": "W",
            "product_ispromotion": true,
            "product_isnew": 0,
            "product_isoutlet": 0,
            "product_isoutofprod": 0
        },
        {
            "product_id": 57385,
            "product_id_variation": "",
            "product_id_context": "57385BS",
            "product_sku": "R8253597037",
            "product_name": "OROLOGIO PHILIP WATCH CARIBE - R8253597037",
            "product_name_variation": "",
            "product_unitprice": "360.66",
            "product_discount": "0.00",
            "product_unitofficial_price": "360.66",
            "product_stock_availability": 111,
            "product_url": "https://bluespirit.collaudo.biz/orologio-philip-watch-caribe-r8253597037-P57385.htm",
            "product_url_img": "https://bluespirit.collaudo.biz/i/default/79294/orologio-philip-watch-caribe-r8253597037.jpg",
            "product_qty": 1,
            "product_brand": "Philip Watch",
            "product_brand_id": 39,
            "product_collection": "Caribe",
            "product_collection_id": 1400,
            "product_cat1_name": "Orologi",
            "product_cat1_id": 1,
            "product_cat2_name": "Just time",
            "product_cat2_id": 9,
            "product_cat3_name": "",
            "product_cat3_id": "",
            "product_gender": "M",
            "product_ispromotion": 0,
            "product_isnew": 0,
            "product_isoutlet": 0,
            "product_isoutofprod": 0
        }
    ],
    "context": "cart",
    "event": "paymentChanged"
}
```

As You can see - and this is only a basic example, it does not represents the full payload - the "tree" structure is easily recognizable.
Basically the only "leafs" available on the first level (root) are only (and always) "context", "event" and "checkout_step", which have been already discussed.
These variables are very important to understand what is going on, so they will be heavily detailed on the next section.

## Accessing "leafs", "branches" or craft new ones
However the "tree" structure can be easily traversed with plain vanilla Javascript, and variables (leafs) accessed with "Javascript DOT notation".

For example if we want to "extract" the value of the unique shop code used for the pickup in store we have to select all "branches" and - at last - the "leaf" named "code", such as:

```js
// getting the value for pickup shop code
console.log(payload.delivery.pickup_store.code, 'This is the pickup store unique code!');
> "871" This is the pickup store unique code!
```

Obviously You are not limited to only export/extract/access "leaf" variables; for example if an entire "branch" (which by definition is a Javascript object) is more suitable for your purpose there is no difference, despite the variable type:

```js
// getting ALL the key/valuesfor pickup shop
console.log(payload.delivery.pickup_store, 'This is the pickup store!');
> {
    "code": "871",
    "banner": "BS",
    "name": "BLUESPIRIT 871 ROMA TERMINI"
} This is the pickup store!
```

If you are in the modern frontend world, You certainly know that "destructiring" in Javascript(ES6) is a very powerful tool, and one of the coolest thing it can do is to create a copy of an object, but with a "reduced" set of keys.
So, for example, if the current shipping address is too "verbose", You can actually reducing it with "object destructiring", such as:

```js
// cherry-picking keys from the delivery address
let myAddress = {...{address1, address2, postcode, city} = payload.delivery.address};
console.log(myAddress, 'This is my reduced shipping address!');
> {
    "address1": "VIA FOO BAR",
    "address2": "40",
    "postcode": "00052",
    "city": "CERVETERI",
} This is my reduced shipping address!
```

::: tip THATS'IT!
The rest of this documentation is to give most of the details and eloquent description about **EACH** branch, sub-branch and leaf, in order to properly collect all the informations You need!
:::