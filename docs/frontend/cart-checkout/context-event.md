# Context and event labels
As we stated in the previous section, since all the pub/sub flow will go through the same "eventLabel" each time an internal event will be triggered, the payload itself will be "marked" with two very important variables, available on the root of the tree represented by the JSON payload object.

| <span style="white-space: nowrap; text-align:center">Variable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Description |
|--------|-----|
| context | Current context/scope of the workflow; valid values are ONLY "cart", "checkout" |
| event   | Detailed label of the event that just happened; available and valid values depends on the "context", and are all documented in this guide |
| checkout_step   | The "logical step" for the checkout workflow |

Basically "context" and "event" will always be there to tell You (almost) precisely what kind of event occurred, without registering/subscribe a separate Javascript listener with each event.

These variables combined can be chained toghether to have a "scoped" description, since the "event" variable can (and do) have same values for different contexts (such as "cart.view" => "The cart page is viewed" and "checkout.view" => "The checkout page is viewed");

## Root variable: "context"
Every time a determined event is handled by Blade a very large payload will be crafted within an internal AJAX call and asynchronely "shipped" to the frontend bus channel, always with the same internal "eventLabel".

As a result every tool capable to run Javascript on the Blade frontend can "subscribe" to the bus channel, in order to capture that "eventLabel" and receive a copy of the payload crafted on the server.

::: warning IMPORTANT
the "eventLabel" refers to the label of the global event on the bus channel and has nothing to do with the type and nature of the "event" triggered on the UX scope/level.
:::

## Root variable: "event"

## Root variable: "checkout_step"
In Blade the checkout is rendered as a S.P.A. (Single Page Application)