# test-google-api-crx

This repository is a simple proof-of-concept for how one would go about identifying a user on a remote server. Essentially, you'll use the `chrome.identity` api to get an auth token for the user, then send that auth token to your remote server where it will make a call to the Google Profile API.

In this example, you'll install a chrome extension that will get the auth token, then you'll start a basic node.js server to make the Google API call (simply proving that this method works.)  

# Setup

## Adding admin granted scopes (optional)

1. Open the google admin console
2. Go to security
3. Advanced settings
4. Managed API client access
5. In “Client Name”, put the oauth client ID
6. In “One or More API Scopes”, put: `https://www.googleapis.com/auth/userinfo.email,https://www.googleapis.com/auth/userinfo.profile`
7. Getting your extension set up

## Get source code

Download this repo

## Load extension as unpacked

1. Go to chrome://extensions
2. Turn on developer mode (top right)
3. Click on Load Unpacked Extension
4. Navigate to the directory with `manifest.json`
5. Close file viewer
6. Open finder
7. Cmd+G to `~/Library/Application Support/Google/Chrome/Default/Extensions`
8. Navigate to the folder with the same name as the ID of the extension you just loaded
9. Open `manifest.json` in a text editor
10. Copy the value from the key field
11. Open your original `manifest.json`
12. Add a new field: `”key”: “whatever you just copied”` at the root level of the manifest
13. Remove the extension and load as unpacked again
14. It should have the same ID. If it doesn’t, try these steps again.

## Generating a google client ID

1. Create a project in Google Cloud Platform
2. Go to APIs & Services
3. Go to OAuth Consent Screen
4. Enter a title for the app and save it at the bottom
5. Go to credentials
6. Create Credentials
7. OAuth Client ID
8. Chrome App
9. Even though your app isn’t on the chrome web store, paste in the ID of the extension from “Getting your extension set up”
10. You should now get an OAuth client ID. Copy it.
11. Open the `manifest.json` file
12. Under `oauth2`, in the `client_id` field, paste the client ID you just got.

## Starting the server

1. Go to (`cd` to) `src/server`
2. In a terminal, run these in order:
3. `npm i`
4. `node index.js`

## Putting it all together

1. Make sure you’re signed into chrome
2. Go back to chrome://extensions
3. Click on inspect: background.html
4. Reload the extension from the extensions page
5. If you added admin granted scopes, you should not see a prompt asking for permission. Retry that section if you do.
6. If you didn’t add admin granted scopes, you may see a prompt asking for permission. Select allow.
7. In the terminal window with your server, and in the dev tools of background.html, you should now see your user’s email along with other information.
