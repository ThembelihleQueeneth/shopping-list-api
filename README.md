### Shopping List API
---

#  Items API

A simple **RESTful API** built with **Express** and **TypeScript** for managing a list of items.  
Supports basic CRUD operations: create, read, update, and delete.

---

##  Features
- Add new items with `name` and `quantity`
- Retrieve all items or a single item by ID
- Update item details (name, quantity, purchased status)
- Delete items
- Error handling for invalid requests

---

##  Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ThembelihleQueeneth/shopping-list-api.git
  
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm run dev
   ```
   By default, the app runs on **http://localhost:3000
---

##  API Endpoints

### Create Item
```http
POST /items
```
**Request Body:**
```json
{
  "name": "Apples",
  "quantity": 5
}
```
**Response:**
```json
{
  "id": 1,
  "name": "Apples",
  "quantity": 5,
  "purchased": false
}
```

---

### Get All Items
```http
GET /items
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Apples",
    "quantity": 5,
    "purchased": false
  }
]
```

---

### Get Item by ID
```http
GET /items/:id
```
**Response (200):**
```json
{
  "id": 1,
  "name": "Apples",
  "quantity": 5,
  "purchased": false
}
```
**Response (404):**
```json
{ "error": "Item not found" }
```

---

### Update Item
```http
PUT /items/:id
```
**Request Body (partial updates allowed):**
```json
{
  "name": "Bananas",
  "quantity": 10,
  "purchased": true
}
```
**Response:**
```json
{
  "id": 1,
  "name": "Bananas",
  "quantity": 10,
  "purchased": true
}
```

---

### Delete Item
```http
DELETE /items/:id
```
**Response (204):** No content  
**Response (404):**
```json
{ "error": "Item not found" }
```

---

##  Error Handling
- `400` → Missing required fields (`name`, `quantity`)
- `404` → Item not found
- `500` → Internal server error

---

##  Tech Stack
- **Node.js**
- **Express**
- **TypeScript**
- **body-parser**

---

