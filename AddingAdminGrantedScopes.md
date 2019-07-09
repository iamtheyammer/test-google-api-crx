# Adding admin-granted Scopes

Adding admin-granted scopes allows you (a G Suite Super Administrator) to grant certain scopes to a specific client ID for everyone, so they won't see the dialog asking for permission.

## Instructions

### Open Google Admin

Then, click on Security.

![admin console](/img/adminConsoleHome.png)

### Click on Advanced Settings

Then, click on `Manage API Client Access`

![security settings](/img/adminConsoleSecurity.png)

### Add scopes and Client ID

In the `Client Name` box, enter your Client ID.

In the `One or More API Scopes` box, enter `https://www.googleapis.com/auth/userinfo.email,https://www.googleapis.com/auth/userinfo.profile`

Then, click on `Authorize`.

![manage api client access screen](/img/manageAPIClientAccess.png)
