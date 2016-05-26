# Boilerplate Facebook Messenger Bot

## Installation
```bash
  $ npm install
  $ node index.js
```

## Usage

1. Create a [Facebook App](https://developers.facebook.com/quickstarts/?platform=web) and [Page](https://www.facebook.com/pages/create).
2. Setup your webhook for your app by going [here](https://developers.facebook.com), selecting your app, and selecting the Messenger tab on the left. Register new webhook by putting in "https://*your domain here*/webhook" for the webhook, entering a verify token that you decide, and selecting the "messages" subscription field.
3. Get your access token by selecting your App under the "Token Generation" header.

At this point, create a `.env` file under this repository with the following format:
```yml
APP_ACCESS_TOKEN=<enter your access token from step 3>
PAGE_VERIFY_TOKEN="<enter your verify token from step 2>
```

This file won't be uploaded to the repository, so while hosting the page on heroku you have to create those env variables again.
`heroku config:set APP_ACCESS_TOKEN=<enter your access token from step 3>`.

Don't forget to subscribe your App to the Page (this only needs to be done once per app unless you get [unsubscribed](https://developers.facebook.com/docs/messenger-platform/webhook-reference#unsubscribe):
```bash
curl -ik -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<token>"
```

Now you can run this service on your server and have your bot start responding to chats!
