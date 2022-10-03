# Blade General API events
On this guide You will find a complete description about the Javascript events available during some general user actions triggered by any frontend theme, with full details about JSON payloads crafted by the platform.

Every time a determined event is handled by Blade a custom payload will be crafted and asynchronely "shipped" to the frontend bus channel, but with a different "eventLabel".

As a result every tool capable to run Javascript on the Blade frontend can "subscribe" to the bus channel, in order to capture that "eventLabel" and receive a copy of the payload crafted on the server.
