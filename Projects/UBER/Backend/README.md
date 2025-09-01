# Users API

## POST /users/register

Register a new user.

- URL: `/users/register`
- Method: `POST`
- Content-Type: `application/json`
- Implemented in: `routes/user.routes.js` -> handler: [`registerUser`](controllers/user.controller.js)

### Description

Creates a new user account. The endpoint validates incoming data, hashes the password, stores the user, and returns a JWT token plus the created user object.

Server-side helpers used:

- User creation: [`createUser`](services/user.service.js)
- Password hashing: [`hashPassword`](models/user.model.js)
- Token generation: [`generateAuthToken`](models/user.model.js)

### Request body

JSON object with these fields:

- `fullname` (object)
  - `firstname` (string) — required, minimum 3 characters
  - `lastname` (string) — optional, minimum 3 characters if provided
- `email` (string) — required, must be a valid email
- `password` (string) — required, minimum 6 characters

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

Validation rules are defined in [routes/user.routes.js](routes/user.routes.js).

### Responses

- 201 Created
  - Description: User successfully created.
  - Body: JSON containing `token` (JWT) and `user` (created user object).
  - Example:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "_id": "60f7f8b9a2e4d34b8c8b4567",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null,
      "__v": 0
    }
  }
  ```

- 400 Bad Request
  - Description: Validation failed.
  - Body: `{ "errors": [ { "msg": "...", "param": "...", ... } ] }`
  - Example:

  ```json
  {
    "errors": [
      { "msg": "Please provide a valid email", "param": "email", "location": "body" }
    ]
  }
  ```

- 500 Internal Server Error
  - Description: Unexpected server error (e.g. database failure, unhandled exception).
  - Body: `{ "error": "Internal server error" }`
  - Example:

  ```json
  {
    "error": "Internal server error"
  }
  ```
