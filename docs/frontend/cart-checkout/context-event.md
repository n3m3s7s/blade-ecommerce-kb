# Context and event labels
As we stated in the previous section, since all the pub/sub flow will go through the bus on the same "eventLabel" each time an internal event will be triggered, the payload itself will be "marked" with three very important variables, available on the root of the tree represented by the JSON payload object.

Let's review an example:

```js{2-4}
{
  "context": "cart",
  "event": "paymentChanged",
  "checkout_step": "auth",
  "attributes": {...},
  "products": [...],
  "carrier": {...},
  "payment": {...},
  "delivery": {...},
  "billing": {...},
  "user": {...},
  "engagements": {...}
}
```
Basically "context" and "event" will always be there to tell You (almost) precisely what kind of event occurred, without registering/subscribe a separate Javascript listener for each event.

These variables combined can be chained toghether to have a "scoped" description, since the "event" variable can (and do) have same values for different contexts (such as "cart.view" => "The cart page is viewed" and "checkout.view" => "The checkout page is viewed");

| <span style="white-space: nowrap; text-align:center">Variable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Description |
|--------|-----|
| context | Current context/scope of the workflow; valid values are ONLY "cart", "checkout" |
| event   | Detailed label of the event that just happened; available and valid values depends on the "context", and are all documented in this guide |
| checkout_step   | The current "logical step" for the SPA checkout workflow |





## Root variable: "context"
The entire workflow use only two contexts: "cart" and "checkout";

### Context: "cart"
Every payload triggered with this context indicates that the user is interacting with the "cart" page on the Blade frontend;

in Blade the entire process that leads to a purchase always start on the "cart" page, which is a separate page (with a differente route) from the "checkout";

in the "cart" page the user chooses the main composition of the order/purchase, such as products, quantities, coupons, vouchers, preferred carrier, preferred payment method, giftcard usage and so on;

every option manually changed or automatically reflected by the user preferences will be triggered asynchronously on the same page; despite the "checkout" page (which is rendered as a S.P.A - Single Page Application) there are no "sub-routes" or "sub-views" in the Cart page, but many events will be triggered;

for the exact list of events that can be triggered on the "cart" context, please refer to the table in the "event" section below;

### Context: "checkout"
When the user proceeds to the checkout process, after reviewing his/her own preferences in the "cart" page, Blade will render a dedicated S.P.A. (Single Page Application) to handle the entire workflow, which will - hopely - ends with the order submission;

since the "checkout" process is split into several "steps", and the particolar composition of the cart/order can logically affect the nature and the number of these steps, every single sub-view will be filled into the "checkout_step" variable, which will be always available in the payload (even in the "cart" context);

for the exact list of events that can be triggered on the "cart" context, please refer to the table in the "event" section below;

::: tip TIP
the steps in the "checkout workflow" are not always sequential; for example if the user is always "logged in" the checkout step that will ask for authorization will be skipped, and maybe (depends on the cart preferences) will go directly to the "shipping" step;
however You have access to this information even in the "cart" context, and in this case will tell You the "next/first step" that will be displayed to the user when he will access the "checkout" page;
:::

## Root variable: "event"
This variable will be filled with a custom label to describe the nature and the type of the internal event that has been just triggered.

::: warning IMPORTANT
It is quite important to know that the "event" variable itself only describe a particular trigger, not the source or the cause of the trigger.
For example most of the time a payload will be triggered immediately after a manual interaction by the user (choose an option, press a button, etc.) but at the same time every physical "page load" (on a frontend point of view) will be triggered and marked within a proper event "label";
:::

As a result this is the part of the implementation where You have to know exactly all the labels designed that can be applied to the "event" variable, and their logical meaning or description.

| <span style="white-space: nowrap; text-align:center">Value</span> | Description |
|--------|-----|
| <span style="white-space: nowrap;">view</span> | User is viewing the context at screen |
| <span style="white-space: nowrap;">carrierChanged</span>  | Carrier/shipping option has been changed |
| <span style="white-space: nowrap;">paymentChanged</span>   | Payment method option has been change |
| <span style="white-space: nowrap;">giftOptionToggled</span> | The "gift option" has been toggled (true/false) |
| <span style="white-space: nowrap;">extraServiceToggled</span> | The "service option" (for ex. "Engraving") has been toggled (true/false) |
| <span style="white-space: nowrap;">couponAdded</span> | A valid coupon has been added with a given code |
| <span style="white-space: nowrap;">couponRemoved</span> | A coupon code has been removed from the cart |
| <span style="white-space: nowrap;">voucherAdded</span> | A valid voucher code has been added with a given code |
| <span style="white-space: nowrap;">voucherRemoved</span> | A voucher code has been removed from the cart |
| <span style="white-space: nowrap;">giftCardAdded</span> | A valid giftcard has been added with a given code |
| <span style="white-space: nowrap;">giftCardRemoved</span> | A giftcard has been removed from the |
| <span style="white-space: nowrap;">showLogin</span> | The embedded login form has been showed |
| <span style="white-space: nowrap;">showRegister</span> | The embedded register form has been showed |
| <span style="white-space: nowrap;">userLogged</span> | The user has successfully logged-in |
| <span style="white-space: nowrap;">shippingAddressSaved</span> | A shipping address has been created or updated |
| <span style="white-space: nowrap;">shippingAddressChanged</span> | User has selected a different shipping address |
| <span style="white-space: nowrap;">billingAddressSaved</span> | A billing address has been created or updated |
| <span style="white-space: nowrap;">billingAddressChanged</span> | User has selected a different billing address |
| <span style="white-space: nowrap;">invoiceToggled</span> | The "invoice required" option has been toggled (true/false) |
| <span style="white-space: nowrap;">storesListView</span> | User is using the "list view" to select a pick-up store |
| <span style="white-space: nowrap;">storesMapView</span> | User is using the "map view" to select a pick-up store |
| <span style="white-space: nowrap;">pickupStoreChanged</span> | User has selected a pick-up store |
| <span style="white-space: nowrap;">submit</span> | User has submitted the order to the payment gateway |

## Root variable: "checkout_step"
In Blade the checkout is rendered as a S.P.A. (Single Page Application) and that is means that when the checkout will go to a step to another (and the UI change) there will no be a physical "page load", from a browser point-of-view.

Since the "checkout" process is split into several "steps", and the particolar composition of the cart/order can logically affect the nature and the number of these steps, every single sub-view will be filled into the "checkout_step" variable, which will be always available in the payload (even in the "cart" context);

So the "checkout_step" variable will be filled with the exact "logical step" in which the context workflow is currenly on;
at the moment these are valid values:

| <span style="white-space: nowrap; text-align:center">Value</span> | Description |
|--------|-----|
| <span style="white-space: nowrap;">auth</span> | User is not currently logged-in, so the first/next step will show the login/register form |
| <span style="white-space: nowrap;">shipping</span> | User has to choose addresses (shipping/billing) or a pick-up store |
| <span style="white-space: nowrap;">carrier</span> | If the current cart requires a selection of different carriers or shipping methods, then the new options are presented to the User |
| <span style="white-space: nowrap;">confirm</span> | User is reviewing the order, before submitting it to the choosen payment method |

::: tip TIP
the steps in the "checkout workflow" are not always sequential; for example if the user is always "logged in" the checkout step that will ask for authorization will be skipped, and maybe (depends on the cart preferences) will go directly to the "shipping" step;
however You have access to this information even in the "cart" context, and in this case will tell You the "next/first step" that will be displayed to the user when he will access the "checkout" page;
:::