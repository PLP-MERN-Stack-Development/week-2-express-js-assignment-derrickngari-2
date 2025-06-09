# 🛍️ Simple Products API

A lightweight Node.js API for managing products.

---

## 🧰 Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

---

## ⚙️ Environment Setup

Create a `.env` file from the template:

```bash
cp .env.example .env
```

Set your desired environment variables.

---

## ▶️ Run the Server

```bash
npm run dev
```

The server will run at `http://localhost:3000` by default.

Alternatively:

```bash
npm start
```

---

## 🌐 API Endpoints Overview

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | `/api/products`       | Get all products    |
| GET    | `/api/products/:id`   | Get a specific product |
| POST   | `/api/products`       | Create a new product |
| PUT    | `/api/products/:id`   | Update a product     |
| DELETE | `/api/products/:id`   | Delete a product     |

---

## 🔐 Authentication

All POST, PUT, and DELETE requests require an API key.

Include your API key in the `x-api-key` header.

**Example Header:**

```http
x-api-key: your_api_key_here
```

---

## 📡 API Usage

### 🔍 Get All Products

**Endpoint:** `GET /api/products`

**Query Parameters:**

- `category` – Filter by category
- `page` – Pagination (default: 1)
- `limit` – Items per page (default: 10)

**Example Request:**

```bash
GET /api/products?category=electronics&page=1&limit=2
```

**Example Response:**

```json
{
  "page": 1,
  "limit": 2,
  "total": 2,
  "products": [
    {
      "id": "1",
      "name": "Laptop",
      "price": 1200,
      "category": "electronics"
    }
  ]
}
```

---

### 🔍 Get Product by ID

**Endpoint:** `GET /api/products/:id`

**Example:**

```bash
GET /api/products/1
```

---

### 🆕 Create a New Product

**Endpoint:** `POST /api/products`

**Headers:**

```http
x-api-key: your_api_key
```

**Body:**

```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 999,
  "category": "electronics",
  "inStock": true
}
```

---

### 🔁 Update a Product

**Endpoint:** `PUT /api/products/:id`

**Headers:**

```http
x-api-key: your_api_key
```

**Body:**

```json
{
  "price": 850
}
```

---

### ❌ Delete a Product

**Endpoint:** `DELETE /api/products/:id`

**Headers:**

```http
x-api-key: your_api_key
```

---

## 🧱 Middlewares

### 🔐 `authMiddleware`

- Checks if an API key is provided in the `x-api-key` header.

### 🧪 `validationMiddleware`

- Ensures all required product fields are present for POST and PUT requests.

---

## ⚠️ Error Handling

Uses custom error classes:

- `ValidationError` – for invalid input
- `NotFound` – for missing resources

Handles errors globally and sends appropriate HTTP status codes.

---

## 🧪 Sample Products (In-Memory)

```json
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  },
  {
    "id": "2",
    "name": "Smartphone",
    "description": "Latest model with 128GB storage",
    "price": 800,
    "category": "electronics",
    "inStock": true
  },
  {
    "id": "3",
    "name": "Coffee Maker",
    "description": "Programmable coffee maker with timer",
    "price": 50,
    "category": "kitchen",
    "inStock": false
  }
]
```

---

Happy building! 🚀
