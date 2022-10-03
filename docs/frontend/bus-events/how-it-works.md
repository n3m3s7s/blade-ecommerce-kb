# How it works
Every time a determined event is handled by Blade a small payload will be crafted and asynchronely "shipped" to the frontend bus channel, with a custom internal "eventLabel" which will "scope" the type of the event/trigger.

As a result every tool capable to run Javascript on the Blade frontend can "subscribe" to the bus channel, in order to capture that "eventLabel" and receive a copy of the payload crafted by Blade.

::: warning IMPORTANT
the "eventLabel" refers to the label of the global event on the bus channel and has nothing to do with the type and nature of the "event" triggered on the UX scope/level.
:::

## Subscribe to the event bus
Currently, the "eventLabel" depends on the type of the event triggered on the frontend.

So, You have to "subscribe" to the event bus for the event marked as "onXXX", where "onXXX" is a custom keyword scoped to a particular context;

This is an example on how you can easily make the subscription, regardless of the tool used and the "async" loading of the frontend.

```js{4-16}
var generalEventSubscriber = function () {
    try {
        Shared.listeners({
            'onCartAdd': function (payload) {
                //make something with the payload or traverse it
                console.log(payload, 'Blade.onCartAdd');
            },
            'onCartUpdate': function (payload) {
                //make something with the payload or traverse it
                console.log(payload, 'Blade.onCartUpdate');
            },
            'onCartDelete': function (payload) {
                //make something with the payload or traverse it
                console.log(payload, 'Blade.onCartDelete');
            }
        });
    } catch (e) {
        console.error(e);
    }
};

// if jQuery has already been loaded, register the function with the jQuery API...
if (window.jQuery) {
    jQuery(document).ready(generalEventSubscriber);
} else {
    //... otherwise push the function to the "defer_functions" array, 
    // which is a special array ALWAYS available in all Blade frontends; 
    // Blade will take care to fire every function pushed to this array, 
    // when the DOM has been loaded
    defer_functions.push(generalEventSubscriber);
}
```

The highlighted block represents the callback function that will receive the monolith payload as an argument (in the example the "payload" Javascript variable of the anonymous function).

Every time a new payload will be "crafted" and "shipped" to the global bus event, every "listener" successfully subscribed to the eventLabel "onCartAdd", "onCartUpdate" and "onCartDelete" will receive a copy of the JSON payload.

## The JSON payload
On the Javascript side, "payload" will be **ALWAYS** a standard JSON object enriched with several informations about the action's target triggered.


::: tip THATS'IT!
The rest of this documentation is to give most of the details and eloquent description about **EACH** branch, sub-branch and leaf, in order to properly collect all the informations You need!
:::