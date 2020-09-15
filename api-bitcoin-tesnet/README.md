# api-bitcoin-tesnet

# Api Database

### Endpoints

| Method | Path                   | Data       | Description        | Requires authorization | Cache | Services | External Services |
| :----- | :--------------------- | ---------- | :----------------- | :--------------------- | :---- | :------- | :---------------- |
| `POST` | `/api/wallet`          | `email *,` | Create wallet user | `No`                   | `No`  | Firebase | Bitcoin tesnet   |
| `GET`  | `/api/wallet{address}` | N/A        | Get info wallet    | `No`                   | `No`  | Firebase | Block Cypher Bitcoin tesnet    |
