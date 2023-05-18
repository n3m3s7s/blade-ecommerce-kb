# i18n - Web app usage and things to know

In this section You will find several informations on how to properly use the main translation manager web application.

## Translations manager app

Remeber: you will need a valid account; if You are not logged-in, You will be automatically redirect to the Login page; 

<span style="font-size: 125%">[:open_book: Open translations manager](https://blade-trans-ui.collaudo.biz/translations)</span>

<span style="font-size: 125%">[:open_book: Account management](/backend/i18n/app-account.md)</span>

When you will be able to login, You will be redirected to the main page.

![An image](/assets/trans_home.png)

In this page You will find the percentage completion for the installed language!

## List phrases

The translations manager app ("app" for now) will present to You a list of "phrases";
a "phrase" is a lexicon entry, which has been (or not) translated;

when a "phrase" is missing a translation, the "Missing!" red flag will be shown in the UI;

a "phrase" is always referred by a unique "key", which can be a code (like for "lexicon" and "validation" group or an entire sentence);

You probably don't need to worry about "keys" in general, since they cannot be edited by the UI, but they are very important to import/export entire phrases without loosing data!

![An image](/assets/trans_cmp_home.png)

From this panel You will have access to some infos about "logical group", "last update time" and "phrase" status.

## Filter phrases

Listing and working on the whole list of phrases can be overwhelming; luckily the UI is capable to offer some clever filters, which will help You navigate and resume UI general state;


![An image](/assets/trans_cmp_filter.png)

You can filter by:

- "Missing only": only show all "phrases" that require a translation
- "Group": only show all "phrases" which belong to a singe "logical group"
- "Key or value": only show all "phrases" with given match in "key" or "translation";

## Update a phrase

When You click on a "phrase" You will be redirected to the main "phrase form" page:

![An image](/assets/trans_cmp_form.png)

basically this the main panel where You will provide a translation for a certain "phrase";

Important: in this panel You will see two areas:

- on the left side there is the "source phrase", the "logical group" and the "key" (You can look only at the source phrase and forget about "group" and "key"); 
- on the right side there is a textarea in which You have to provide the entire translation for the current "phrase";

When You have entered your translation, please remember to "SAVE" it, otherwire it will be lost!

Important: if you click "CANCEL" or "SAVE" You will be redirected to the main "list" of "phrases", with all the "filters" You have activated!

## Warning: light markup

Please note that some "phrases" can have a very small set of "HTML tags", such as 

```
<b>, <strong>, <em>, <i> or <a>
```

It is very important that the "translated phrase" will inherite all these subset of HTML tags, like in the picture below:

![An image](/assets/trans_cmp_html.png)

## Warning: i18n parameters

Please note that some "phrases" will adopt some particular string, which can be recognized by the characther ":" in front of them; ex:

```
You have :count products
```

the web app is quite smart to recnognize and highlight them, because these have to be present in the "translated phrase" <b>WITHOUT</b> any translation;

furthermore, when You click on one of these "parameters" in the left side, they will copied on the right side, in the exact location of your cursor.

![An image](/assets/trans_cmp_attr.png)

If you try to save a "translated phrase" without the exact number of "parameters" an error will be triggered!

![An image](/assets/trans_cmp_attr_error.png)