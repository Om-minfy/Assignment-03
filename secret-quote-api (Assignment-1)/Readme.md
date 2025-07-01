# Secret Quote API

A simple Node.js + Express API that demonstrates JWT-based authentication.

## Features:

- Register and login users (in-memory).
- Generate JWT tokens.
- Protect routes with JWT middleware.
- Access secret content with a valid token.

---

## Setup:

```bash
git clone my repo
cd secret-quote-api
npm install
npm start
```

---

## Create Endpoints:

### POST /register

![alt text](1.PNG)
![alt text](2.PNG)

### POST /login

![alt text](3.PNG)
![alt text](4.PNG)

---

## Create a Protected Route:

### Access Protected Route

![alt text](5.PNG)

---

## Create Authentication Middleware:

### Missing Token

![alt text](6.PNG)

### Invalid Token

![alt text](7.PNG)

---

## Testing with Postman:

- Register a user
- Login and copy the token from the response
- Use the token as Authorization: Bearer token in headers to access /api/secret-quote