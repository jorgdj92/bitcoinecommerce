# api-bitcoin-tesnet

# Api Database

### Endpoints

| Method | Path                   | Data       | Description              | Requires authorization | Cache | Services | External Services |
| :----- | :--------------------- | ---------- | :----------------------- | :--------------------- | :---- | :------- | :---------------- |
| `POST` | `/api/wallet`          | `email *,` | Create wallet user | `No`                   | `No`  | Firebase | Cloud Firestore   |
| `GET`  | `/api/wallet{address}` | N/A        | Get info wallet    | `No`                   | `No`  | Firebase | Cloud Firestore   |
