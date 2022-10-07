# Scope "user" events

Blade will send some small payloads to the bus whenever a frontend User will be able to "login" or "logout" into/from current browser's session.

## onUserLogin
Fired whenever a "user" (or a "customer") will login (successfully or not).

Let's review an example:

```js
{
    success: true, 
    msg: 'Login effettuato con successo', 
    errors: [
        'Recaptcha challenge has been timed-out'
    ], 
    redirect: null, 
    customer_id: 1
}
```

### Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">success</span> | <span style="white-space: nowrap;">bool</span> | If the user has been successfully logged-in |
| <span style="white-space: nowrap;">msg</span> | <span style="white-space: nowrap;">string</span> | Message viewed by the user |
| <span style="white-space: nowrap;">errors</span> | <span style="white-space: nowrap;">errors</span> | Array of errors which have been encountered |
| <span style="white-space: nowrap;">redirect</span> | <span style="white-space: nowrap;">string/null</span> | Redirect the user to this URL after a successfull login |
| <span style="white-space: nowrap;">customer_id</span> | <span style="white-space: nowrap;">int</span> | Customer unique id |


## onUserLogout
Fired whenever a "user" (or a "customer") will log out (successfully or not).

Let's review an example:

```js
{
    success: true, 
    msg: 'Disconnessione avvenuta con successo; attendere il redirect automatico',
    redirect: null, 
    customer_id: 1
}
```

### Variables full details
Here you can find a detailed description of each variable or sub-branch:

| <span style="white-space: nowrap; text-align:center">Var</span> | Type | Description |
|--------|-----|-----|
| <span style="white-space: nowrap;">success</span> | <span style="white-space: nowrap;">bool</span> | If the user has been successfully logged-out |
| <span style="white-space: nowrap;">msg</span> | <span style="white-space: nowrap;">string</span> | Message viewed by the user |
| <span style="white-space: nowrap;">redirect</span> | <span style="white-space: nowrap;">string/null</span> | Redirect the user to this URL after a successfull login |
| <span style="white-space: nowrap;">customer_id</span> | <span style="white-space: nowrap;">int</span> | Customer unique id |

