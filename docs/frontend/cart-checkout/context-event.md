# Context and event labels

Main variables: "context", "event" and "checkout_step"

## Main variable: "context"
Every time a determined event is handled by Blade a very large payload will be crafted within an internal AJAX call and asynchronely "shipped" to the frontend bus channel, always with the same internal "eventLabel".

As a result every tool capable to run Javascript on the Blade frontend can "subscribe" to the bus channel, in order to capture that "eventLabel" and receive a copy of the payload crafted on the server.

::: warning IMPORTANT
the "eventLabel" refers to the label of the global event on the bus channel and has nothing to do with the type and nature of the "event" triggered on the UX scope/level.
:::

## Main variable: "event"

## Main variables: "checkout_step"