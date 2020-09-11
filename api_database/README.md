# Api Database

## Configuration

```
mkdir config
cd config
touch  config.json
```
###  Example
config.json

```
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}

```
### rename

.env.example | .env

### Endpoints

| Method | Path           | Data                                                          | Description              | Requires authorization | Cache | Services | External Services |
| :----- | :------------- | ------------------------------------------------------------- | :----------------------- | :--------------------- | :---- | :------- | :---------------- |
| `POST` | `api/user`     | `id*,email *,password*,name*,lastname*,photoURL,phoneNumber` | Create user for Firebase | `No`                   | `No`  | Firebase | Cloud Firestore   |
| `GET`  | `api/user{email}` | N/A                                                           | Get user for Firebase    | `No`                   | `No`  | Firebase | Cloud Firestore   |
| `PUT`  | `api/user{id}` | `{name,lastname,password,email} aun no esta`                              | Update user for Firebase | `No`                   | `No`  | Firebase | Cloud Firestore   |

## errors

### User
201 data exist

```
{
    "error": {
        "code": "auth/email-already-exists",
        "message": "The email address is already in use by another account."
        }
}
```

**\*Nomenclatura:** {Service} - {Method}
