# Blade Cart & Checkout API events
On this guide You will find a complete description about the Javascript events available during a cart/checkout/order-confirmation workflow, with full details about JSON payloads crafted by the platform.

Every time a determined event is handled by Blade a very large payload will be crafted within an internal AJAX call and asynchronely "shipped" to the frontend bus channel, always with the same "eventLabel".

As a result every tool capable to run Javascript on the Blade frontend can "subscribe" to the bus channel, in order to capture that "eventLabel" and receive a copy of the payload crafted on the server.

::: tip REMEMBER
the "eventLabel" is always "onCheckoutWorkflowEvent" regardless of the type of event which will be triggered (even page loads); please check the example on how to subscribe to this global event within the current Javascript helper available in the Blade frontend bundle.
:::

::: warning IMPORTANT
this API is designed to trigger events about user interaction, experience and navigation from the beginning of a "CHECKOUT" (the "CART" page/context) until the (positive) "ORDER CONFIRMATION" workflow; it is not capable to trigger events or to handle payload OUTSIDE of these scopes!
:::