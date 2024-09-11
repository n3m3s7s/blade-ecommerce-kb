# Scope "algolia" events

Most Blade tenants currently have switched to a custom implementation of Algolia Online Services (AOS).

Actually Blade will use AOS in two different ways:

- Backend: everyday Blade will upsert and send JSON documents representing a "Product" to Algolia, in order to fill and hydrate all the required "indexes" and use their server APIs when a full search is submitted;

- Frontend: Blade will use the official Algolia javascript library (also known as "InstantSearch") in order to customize and render some "widgets"; in particular the search box is usually an auto-complete widget which is fully rendered (client-side) and managed by Algolia;

::: tip CUSTOM IMPLEMENTATION:
However Blade will inject some events and hooks into a custom implementation of the client library, in order to send some informations or managed events' payloads to the general "bus".
:::

## onAlgoliaSetup
Fired whenever a page is rendered (page loaded event); this event will declare the actual configuration that Blade is using to configure the "InstantSearch" client library;

Let's see an example:

```js
{
    "action": "/catalogo-prodotti-A1.htm?action=search",
    "label": "fossil",
    "placeholder": "Cerca prodotto, categoria, marca...",
    "appid": "7HSCTYQAX7",
    "apikey": "49d05c6a1b1bfd16f669336578cc071b",
    "indexname": "bs_stage_it",
    "maxhits": "24",
    "locale": "it-IT",
    "userToken": "1dad1e148de9fc59edd0a5653b34c597"
}
```

### Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">action</span> | <span style="white-space: nowrap;">string</span> | The search-form "action", which is the local URL that is targeted when a full search is triggered by a user |
| <span style="white-space: nowrap;">label</span> | <span style="white-space: nowrap;">string/null</span> | This variable is only filled when a full search has been submitted by a user, and it holds the query-input used to perform/submit the full search |
| <span style="white-space: nowrap;">placeholder</span> | <span style="white-space: nowrap;">string</span> | The placeholder used to fill the search-input when the search is initialized or resetted |
| <span style="white-space: nowrap;">appid</span> | <span style="white-space: nowrap;">string</span> | The "appid" required by Algolia in order to configure all client widgets |
| <span style="white-space: nowrap;">apikey</span> | <span style="white-space: nowrap;">string</span> | The "apikey" required by Algolia in order to configure all client widgets |
| <span style="white-space: nowrap;">locale</span> | <span style="white-space: nowrap;">string</span> | The "locale" required by Algolia in order to configure all client widgets |
| <span style="white-space: nowrap;">indexname</span> | <span style="white-space: nowrap;">string</span> | The name of the "index" used by the search widgets (see Algolia docs) |
| <span style="white-space: nowrap;">maxhits</span> | <span style="white-space: nowrap;">string(numeric)</span> | Max results displayed in the "InstantSearch" widget (see Algolia docs) |
| <span style="white-space: nowrap;">userToken</span> | <span style="white-space: nowrap;">string</span> | Some the "insights" API or Events provided by Algolia require a UNIQUE token in order to identify/segment a "User" (or a logged "Customer") |


## onAlgoliaInstantSearch
Fired whenever a "user" (or a "customer") is interacting in real time with the "InstantSearch" client (basically is typing into the search-box, auto-complete is fired from Algolia and some products are showed instantly).

Let's see an example:

```js
{
    "facets": [],
    "disjunctiveFacets": [],
    "hierarchicalFacets": [],
    "facetsRefinements": {},
    "facetsExcludes": {},
    "disjunctiveFacetsRefinements": {},
    "numericRefinements": {},
    "tagRefinements": [],
    "hierarchicalFacetsRefinements": {},
    "index": "bs_stage_it",
    "hitsPerPage": 24,
    "typoTolerance": "min",
    "enablePersonalization": true,
    "clickAnalytics": true,
    "userToken": "1dad1e148de9fc59edd0a5653b34c597",
    "query": "fossil",
    "highlightPreTag": "__ais-highlight__",
    "highlightPostTag": "__/ais-highlight__"
}
```

### Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">query</span> | <span style="white-space: nowrap;">string</span> | The text that has been typed or inserted into the search-box |
| <span style="white-space: nowrap;">userToken</span> | <span style="white-space: nowrap;">string</span> | Some the "insights" API or Events provided by Algolia require a UNIQUE token in order to identify/segment a "User" (or a logged "Customer") |

::: warning VERY IMPORTANT:
The entire payload is crafted and managed by Algolia and by the InstantSearch JS library; we CANNOT define or explain every variable since can be subjected to change outside Blade ecosystem; please refer to the official documentation provided by Algolia;

see: https://www.algolia.com/doc/api-reference/widgets/instantsearch/js/#widget-param-searchfunction
:::

## onAlgoliaEvent
This event is fired every time an Algolia InstantSearch event is fires (basically is paired one-to-one with the internal "Insight API" from Algolia)
 
Let's see an example:

```js
{
    "insightsMethod": "viewedObjectIDs",
    "widgetType": "ais.hits",
    "eventType": "view",
    "payload": {
        "eventName": "Hits Viewed",
        "index": "bs_stage_it",
        "objectIDs": [
            "58885",
            "58880",
            "58875",
            "58874"
        ]
    },
    "hits": [
        {
            "product_type": "default",
            "page_url": "https://bluespirit.collaudo.biz/orologio-fossil-jocelyn-es4455-P58885.htm",
            "image_url": "https://bluespirit.collaudo.biz/i/default/83273/orologio-fossil-jocelyn-es4455.jpg",
            "thumb_image_url": "https://bluespirit.collaudo.biz/i/small/83273/orologio-fossil-jocelyn-es4455.jpg",
            "sku": "ES4455",
            "sap_sku": "FO.ES4455",
            "ean13": 4013496133233,
            "name": "OROLOGIO FOSSIL JOCELYN - ES4455",
            "main_category": "Orologi",
            "default_category": "Orologi",
            "brand": "Fossil",
            "brand_img": "https://bluespirit.collaudo.biz/media/images/brands_default/fossil.jpg",
            "collection": "Jocelyn",
            "gender_type": "W",
            "list_price": 159,
            "sell_price": 159,
            "list_price_formatted": "€ 159,00",
            "sell_price_formatted": "€ 159,00",
            "quantity": 10,
            "availability_status": "in_stock",
            "description": "OROLOGIO FOSSIL JOCELYN - ES4455 - Genere: Donna, Materiale e finitura cassa: Acciaio, Misura cassa: 36 mm, Spessore cassa: 8 mm, Finitura cassa: Lucida, Colore cassa: Rose-gold, Madreperla, Materiale cinturino: Pelle, Colore cinturino: Rosa, Chiusura: Fibbia ad ardiglione, Movimento: Quarzo, Water resistant: 3 atm, Garanzia: Ufficiale 2 anni Fossil, Confezione: Originale Fossil",
            "canvass": "01-08-2019",
            "is_new": false,
            "is_outlet": false,
            "is_sale": false,
            "is_featured": false,
            "is_discounted": false,
            "has_combinations": false,
            "total_sales": 0,
            "categories": [
                "Orologi",
                "Just time"
            ],
            "hierarchical_categories": {
                "lvl0": "Orologi",
                "lvl1": "Orologi > Just time"
            },
            "trends": [],
            "sizes": [],
            "color": [
                "Rose-gold",
                "Madreperla",
                "Rosa"
            ],
            "material": [
                "Acciaio",
                "Pelle"
            ],
            "gender": [
                "Donna"
            ],
            "symbol": [],
            "nav": [],
            "boost": 530,
            "images": [
                {
                    "position": 1,
                    "small": "https://bluespirit.collaudo.biz/i/small/83273/orologio-fossil-jocelyn-es4455.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/83273/orologio-fossil-jocelyn-es4455@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/83273/orologio-fossil-jocelyn-es4455.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/83273/orologio-fossil-jocelyn-es4455@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/83273/orologio-fossil-jocelyn-es4455.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/83273/orologio-fossil-jocelyn-es4455@2x.jpg"
                },
                {
                    "position": 2,
                    "small": "https://bluespirit.collaudo.biz/i/small/83274/2-orologio-fossil-jocelyn-es4455.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/83274/2-orologio-fossil-jocelyn-es4455@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/83274/2-orologio-fossil-jocelyn-es4455.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/83274/2-orologio-fossil-jocelyn-es4455@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/83274/2-orologio-fossil-jocelyn-es4455.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/83274/2-orologio-fossil-jocelyn-es4455@2x.jpg"
                },
                {
                    "position": 3,
                    "small": "https://bluespirit.collaudo.biz/i/small/83275/3-orologio-fossil-jocelyn-es4455.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/83275/3-orologio-fossil-jocelyn-es4455@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/83275/3-orologio-fossil-jocelyn-es4455.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/83275/3-orologio-fossil-jocelyn-es4455@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/83275/3-orologio-fossil-jocelyn-es4455.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/83275/3-orologio-fossil-jocelyn-es4455@2x.jpg"
                }
            ],
            "objectID": "58885",
            "_highlightResult": {
                "sku": {
                    "value": "ES4455",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "ean13": {
                    "value": "4013496133233",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "name": {
                    "value": "OROLOGIO <mark>FOSSI</mark>L JOCELYN - ES4455",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "main_category": {
                    "value": "Orologi",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "default_category": {
                    "value": "Orologi",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "<mark>Fossi</mark>l",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "collection": {
                    "value": "Jocelyn",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "description": {
                    "value": "OROLOGIO <mark>FOSSI</mark>L JOCELYN - ES4455 - Genere: Donna, Materiale e finitura cassa: Acciaio, Misura cassa: 36 mm, Spessore cassa: 8 mm, Finitura cassa: Lucida, Colore cassa: Rose-gold, Madreperla, Materiale cinturino: Pelle, Colore cinturino: Rosa, Chiusura: Fibbia ad ardiglione, Movimento: Quarzo, Water resistant: 3 atm, Garanzia: Ufficiale 2 anni <mark>Fossi</mark>l, Confezione: Originale <mark>Fossi</mark>l",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "categories": [
                    {
                        "value": "Orologi",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Just time",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "color": [
                    {
                        "value": "Rose-gold",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Madreperla",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Rosa",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "material": [
                    {
                        "value": "Acciaio",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Pelle",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "gender": [
                    {
                        "value": "Donna",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            },
            "__position": 21,
            "__queryID": "9cb4d5401ec3d0bc07bc8385814152c7"
        },
        {
            "product_type": "default",
            "page_url": "https://bluespirit.collaudo.biz/orologio-fossil-carlie-es4443set-P58880.htm",
            "image_url": "https://bluespirit.collaudo.biz/i/default/83270/orologio-fossil-carlie-es4443set.jpg",
            "thumb_image_url": "https://bluespirit.collaudo.biz/i/small/83270/orologio-fossil-carlie-es4443set.jpg",
            "sku": "ES4443SET",
            "sap_sku": "FO.ES4443SET",
            "ean13": 4013496096057,
            "name": "OROLOGIO FOSSIL CARLIE - ES4443SET",
            "main_category": "Orologi",
            "default_category": "Orologi",
            "brand": "Fossil",
            "brand_img": "https://bluespirit.collaudo.biz/media/images/brands_default/fossil.jpg",
            "collection": "Carlie",
            "gender_type": "W",
            "list_price": 149,
            "sell_price": 149,
            "list_price_formatted": "€ 149,00",
            "sell_price_formatted": "€ 149,00",
            "quantity": 1,
            "availability_status": "in_stock",
            "description": "OROLOGIO FOSSIL CARLIE - ES4443SET - Genere: Donna, Materiale e finitura cassa: Acciaio, Misura cassa: 28 mm, Spessore cassa: 7 mm, Finitura cassa: Lucida, Colore cassa: Rose-gold, Madreperla, Bianco, Materiale cinturino: Acciaio, Colore cinturino: Rose Gold, Chiusura: A scatto, Movimento: Quarzo, Water resistant: 5 atm, Garanzia: Ufficiale 2 anni Fossil, Confezione: Originale Fossil",
            "canvass": "01-08-2019",
            "is_new": false,
            "is_outlet": false,
            "is_sale": false,
            "is_featured": false,
            "is_discounted": false,
            "has_combinations": false,
            "total_sales": 0,
            "categories": [
                "Orologi",
                "Just time"
            ],
            "hierarchical_categories": {
                "lvl0": "Orologi",
                "lvl1": "Orologi > Just time"
            },
            "trends": [],
            "sizes": [],
            "color": [
                "Rose-gold",
                "Madreperla",
                "Bianco",
                "Rose gold"
            ],
            "material": [
                "Acciaio"
            ],
            "gender": [
                "Donna"
            ],
            "symbol": [],
            "nav": [],
            "boost": 530,
            "images": [
                {
                    "position": 1,
                    "small": "https://bluespirit.collaudo.biz/i/small/83270/orologio-fossil-carlie-es4443set.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/83270/orologio-fossil-carlie-es4443set@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/83270/orologio-fossil-carlie-es4443set.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/83270/orologio-fossil-carlie-es4443set@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/83270/orologio-fossil-carlie-es4443set.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/83270/orologio-fossil-carlie-es4443set@2x.jpg"
                },
                {
                    "position": 2,
                    "small": "https://bluespirit.collaudo.biz/i/small/83271/2-orologio-fossil-carlie-es4443set.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/83271/2-orologio-fossil-carlie-es4443set@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/83271/2-orologio-fossil-carlie-es4443set.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/83271/2-orologio-fossil-carlie-es4443set@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/83271/2-orologio-fossil-carlie-es4443set.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/83271/2-orologio-fossil-carlie-es4443set@2x.jpg"
                },
                {
                    "position": 3,
                    "small": "https://bluespirit.collaudo.biz/i/small/83272/3-orologio-fossil-carlie-es4443set.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/83272/3-orologio-fossil-carlie-es4443set@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/83272/3-orologio-fossil-carlie-es4443set.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/83272/3-orologio-fossil-carlie-es4443set@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/83272/3-orologio-fossil-carlie-es4443set.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/83272/3-orologio-fossil-carlie-es4443set@2x.jpg"
                }
            ],
            "objectID": "58880",
            "_highlightResult": {
                "sku": {
                    "value": "ES4443SET",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "ean13": {
                    "value": "4013496096057",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "name": {
                    "value": "OROLOGIO <mark>FOSSI</mark>L CARLIE - ES4443SET",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "main_category": {
                    "value": "Orologi",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "default_category": {
                    "value": "Orologi",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "<mark>Fossi</mark>l",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "collection": {
                    "value": "Carlie",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "description": {
                    "value": "OROLOGIO <mark>FOSSI</mark>L CARLIE - ES4443SET - Genere: Donna, Materiale e finitura cassa: Acciaio, Misura cassa: 28 mm, Spessore cassa: 7 mm, Finitura cassa: Lucida, Colore cassa: Rose-gold, Madreperla, Bianco, Materiale cinturino: Acciaio, Colore cinturino: Rose Gold, Chiusura: A scatto, Movimento: Quarzo, Water resistant: 5 atm, Garanzia: Ufficiale 2 anni <mark>Fossi</mark>l, Confezione: Originale <mark>Fossi</mark>l",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "categories": [
                    {
                        "value": "Orologi",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Just time",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "color": [
                    {
                        "value": "Rose-gold",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Madreperla",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Bianco",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Rose gold",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "material": [
                    {
                        "value": "Acciaio",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "gender": [
                    {
                        "value": "Donna",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            },
            "__position": 22,
            "__queryID": "9cb4d5401ec3d0bc07bc8385814152c7"
        },
        {
            "product_type": "default",
            "page_url": "https://bluespirit.collaudo.biz/orologio-fossil-neutra-chrono-fs5474-P58875.htm",
            "image_url": "https://bluespirit.collaudo.biz/i/default/97458/orologio-fossil-neutra-chrono-fs5474.jpg",
            "thumb_image_url": "https://bluespirit.collaudo.biz/i/small/97458/orologio-fossil-neutra-chrono-fs5474.jpg",
            "sku": "FS5474",
            "sap_sku": "FO.FS5474",
            "ean13": 4013496002102,
            "name": "OROLOGIO FOSSIL NEUTRA CHRONO - FS5474",
            "main_category": "Orologi",
            "default_category": "Orologi",
            "brand": "Fossil",
            "brand_img": "https://bluespirit.collaudo.biz/media/images/brands_default/fossil.jpg",
            "collection": "Neutra chrono",
            "gender_type": "M",
            "list_price": 189,
            "sell_price": 189,
            "list_price_formatted": "€ 189,00",
            "sell_price_formatted": "€ 189,00",
            "quantity": 0,
            "availability_status": "preorder",
            "description": "OROLOGIO FOSSIL NEUTRA CHRONO - FS5474 - Genere: Uomo, Materiale e finitura cassa: Acciaio, Misura cassa: 44 mm, Spessore cassa: 12 mm, Colore cassa: Nero, Materiale cinturino: Acciaio, Colore cinturino: Nero, Chiusura: Deployante, Water resistant: 5 atm, Garanzia: Ufficiale 2 anni Fossil, Confezione: Originale Fossil",
            "canvass": "01-08-2019",
            "is_new": false,
            "is_outlet": false,
            "is_sale": false,
            "is_featured": false,
            "is_discounted": false,
            "has_combinations": false,
            "total_sales": 0,
            "categories": [
                "Orologi",
                "Cronografo"
            ],
            "hierarchical_categories": {
                "lvl0": "Orologi",
                "lvl1": "Orologi > Cronografo"
            },
            "trends": [],
            "sizes": [],
            "color": [
                "Nero"
            ],
            "material": [
                "Acciaio"
            ],
            "gender": [
                "Uomo"
            ],
            "symbol": [],
            "nav": [],
            "boost": 530,
            "images": [
                {
                    "position": 1,
                    "small": "https://bluespirit.collaudo.biz/i/small/97458/orologio-fossil-neutra-chrono-fs5474.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/97458/orologio-fossil-neutra-chrono-fs5474@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/97458/orologio-fossil-neutra-chrono-fs5474.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/97458/orologio-fossil-neutra-chrono-fs5474@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/97458/orologio-fossil-neutra-chrono-fs5474.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/97458/orologio-fossil-neutra-chrono-fs5474@2x.jpg"
                },
                {
                    "position": 2,
                    "small": "https://bluespirit.collaudo.biz/i/small/80410/2-orologio-fossil-neutra-chrono-fs5474.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/80410/2-orologio-fossil-neutra-chrono-fs5474@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/80410/2-orologio-fossil-neutra-chrono-fs5474.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/80410/2-orologio-fossil-neutra-chrono-fs5474@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/80410/2-orologio-fossil-neutra-chrono-fs5474.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/80410/2-orologio-fossil-neutra-chrono-fs5474@2x.jpg"
                }
            ],
            "objectID": "58875",
            "_highlightResult": {
                "sku": {
                    "value": "FS5474",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "ean13": {
                    "value": "4013496002102",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "name": {
                    "value": "OROLOGIO <mark>FOSSI</mark>L NEUTRA CHRONO - FS5474",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "main_category": {
                    "value": "Orologi",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "default_category": {
                    "value": "Orologi",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "<mark>Fossi</mark>l",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "collection": {
                    "value": "Neutra chrono",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "description": {
                    "value": "OROLOGIO <mark>FOSSI</mark>L NEUTRA CHRONO - FS5474 - Genere: Uomo, Materiale e finitura cassa: Acciaio, Misura cassa: 44 mm, Spessore cassa: 12 mm, Colore cassa: Nero, Materiale cinturino: Acciaio, Colore cinturino: Nero, Chiusura: Deployante, Water resistant: 5 atm, Garanzia: Ufficiale 2 anni <mark>Fossi</mark>l, Confezione: Originale <mark>Fossi</mark>l",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "categories": [
                    {
                        "value": "Orologi",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Cronografo",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "color": [
                    {
                        "value": "Nero",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "material": [
                    {
                        "value": "Acciaio",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "gender": [
                    {
                        "value": "Uomo",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            },
            "__position": 23,
            "__queryID": "9cb4d5401ec3d0bc07bc8385814152c7"
        },
        {
            "product_type": "default",
            "page_url": "https://bluespirit.collaudo.biz/orologio-fossil-neutra-chrono-fs5453-P58874.htm",
            "image_url": "https://bluespirit.collaudo.biz/i/default/97459/orologio-fossil-neutra-chrono-fs5453.jpg",
            "thumb_image_url": "https://bluespirit.collaudo.biz/i/small/97459/orologio-fossil-neutra-chrono-fs5453.jpg",
            "sku": "FS5453",
            "sap_sku": "FO.FS5453",
            "ean13": 4051432318740,
            "name": "OROLOGIO FOSSIL NEUTRA CHRONO - FS5453",
            "main_category": "Orologi",
            "default_category": "Orologi",
            "brand": "Fossil",
            "brand_img": "https://bluespirit.collaudo.biz/media/images/brands_default/fossil.jpg",
            "collection": "Neutra chrono",
            "gender_type": "M",
            "list_price": 129,
            "sell_price": 129,
            "list_price_formatted": "€ 129,00",
            "sell_price_formatted": "€ 129,00",
            "quantity": 0,
            "availability_status": "preorder",
            "description": "OROLOGIO FOSSIL NEUTRA CHRONO - FS5453 - Genere: Uomo, Materiale e finitura cassa: Acciaio, Misura cassa: 44 mm, Spessore cassa: 12 mm, Finitura cassa: Mista, Colore cassa: Silver, Blu, Materiale cinturino: Pelle, Colore cinturino: Marrone, Chiusura: Fibbia ad ardiglione, Water resistant: 5 atm, Garanzia: Ufficiale 2 anni Fossil, Confezione: Originale Fossil",
            "canvass": "01-08-2019",
            "is_new": false,
            "is_outlet": false,
            "is_sale": false,
            "is_featured": false,
            "is_discounted": false,
            "has_combinations": false,
            "total_sales": 0,
            "categories": [
                "Orologi",
                "Cronografo"
            ],
            "hierarchical_categories": {
                "lvl0": "Orologi",
                "lvl1": "Orologi > Cronografo"
            },
            "trends": [],
            "sizes": [],
            "color": [
                "Silver",
                "Blu",
                "Marrone"
            ],
            "material": [
                "Acciaio",
                "Pelle"
            ],
            "gender": [
                "Uomo"
            ],
            "symbol": [],
            "nav": [],
            "boost": 530,
            "images": [
                {
                    "position": 1,
                    "small": "https://bluespirit.collaudo.biz/i/small/97459/orologio-fossil-neutra-chrono-fs5453.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/97459/orologio-fossil-neutra-chrono-fs5453@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/97459/orologio-fossil-neutra-chrono-fs5453.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/97459/orologio-fossil-neutra-chrono-fs5453@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/97459/orologio-fossil-neutra-chrono-fs5453.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/97459/orologio-fossil-neutra-chrono-fs5453@2x.jpg"
                },
                {
                    "position": 2,
                    "small": "https://bluespirit.collaudo.biz/i/small/80411/2-orologio-fossil-neutra-chrono-fs5453.jpg",
                    "small2x": "https://bluespirit.collaudo.biz/i/small/80411/2-orologio-fossil-neutra-chrono-fs5453@2x.jpg",
                    "default": "https://bluespirit.collaudo.biz/i/default/80411/2-orologio-fossil-neutra-chrono-fs5453.jpg",
                    "default2x": "https://bluespirit.collaudo.biz/i/default/80411/2-orologio-fossil-neutra-chrono-fs5453@2x.jpg",
                    "zoom": "https://bluespirit.collaudo.biz/i/zoom/80411/2-orologio-fossil-neutra-chrono-fs5453.jpg",
                    "zoom2x": "https://bluespirit.collaudo.biz/i/zoom/80411/2-orologio-fossil-neutra-chrono-fs5453@2x.jpg"
                }
            ],
            "objectID": "58874",
            "_highlightResult": {
                "sku": {
                    "value": "FS5453",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "ean13": {
                    "value": "4051432318740",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "name": {
                    "value": "OROLOGIO <mark>FOSSI</mark>L NEUTRA CHRONO - FS5453",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "main_category": {
                    "value": "Orologi",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "default_category": {
                    "value": "Orologi",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "<mark>Fossi</mark>l",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "collection": {
                    "value": "Neutra chrono",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "description": {
                    "value": "OROLOGIO <mark>FOSSI</mark>L NEUTRA CHRONO - FS5453 - Genere: Uomo, Materiale e finitura cassa: Acciaio, Misura cassa: 44 mm, Spessore cassa: 12 mm, Finitura cassa: Mista, Colore cassa: Silver, Blu, Materiale cinturino: Pelle, Colore cinturino: Marrone, Chiusura: Fibbia ad ardiglione, Water resistant: 5 atm, Garanzia: Ufficiale 2 anni <mark>Fossi</mark>l, Confezione: Originale <mark>Fossi</mark>l",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "fossi"
                    ]
                },
                "categories": [
                    {
                        "value": "Orologi",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Cronografo",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "color": [
                    {
                        "value": "Silver",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Blu",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Marrone",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "material": [
                    {
                        "value": "Acciaio",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "Pelle",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ],
                "gender": [
                    {
                        "value": "Uomo",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            },
            "__position": 24,
            "__queryID": "9cb4d5401ec3d0bc07bc8385814152c7"
        }
    ],
    "eventModifier": "internal"
}
```

### Variables full details

::: warning VERY IMPORTANT:
The entire payload is crafted and managed by Algolia and by the InstantSearch JS library; we CANNOT define or explain every variable since can be subjected to change outside Blade ecosystem; please refer to the official documentation provided by Algolia;

see: https://www.algolia.com/doc/guides/building-search-ui/events/js/
:::
