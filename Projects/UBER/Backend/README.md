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

## POST /users/login

Authenticate an existing user.

- URL: `/users/login`
- Method: `POST`
- Content-Type: `application/json`
- Implemented in: `routes/user.routes.js` -> handler: [`loginUser`](controllers/user.controller.js)

### Description

Authenticates a user using email and password. Returns a JWT token and the user object if credentials are valid.

### Request body

JSON object with these fields:

- `email` (string) — required, must be a valid email
- `password` (string) — required, minimum 6 characters

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Responses

- 200 OK
  - Description: User successfully authenticated.
  - Body: JSON containing `token` (JWT) and `user` (user object).
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

- 401 Unauthorized
  - Description: Invalid email or password.
  - Body: `{ "message": "Invalid email or password" }`
  - Example:

  ```json
  {
    "message": "Invalid email or password"
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

## GET /users/profile

Get the authenticated user's profile.

- URL: `/users/profile`
- Method: `GET`
- Content-Type: `application/json`
- Requires authentication (JWT in cookie or Authorization header)
- Implemented in: `routes/user.routes.js` -> handler: [`getUserProfile`](controllers/user.controller.js)

### Description

Returns the profile of the currently authenticated user.

### Request

No body required. JWT must be sent via cookie or `Authorization: Bearer <token>` header.

### Responses

- 200 OK
  - Description: Returns the user profile.
  - Example:

  ```json
  {
    "_id": "60f7f8b9a2e4d34b8c8b4567",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null,
    "__v": 0
  }
  ```

- 401 Unauthorized
  - Description: Missing or invalid token.
  - Example:

  ```json
  {
    "message": "Authentication required"
  }
  ```

- 500 Internal Server Error
  - Description: Unexpected server error.
  - Example:

  ```json
  {
    "error": "Internal server error"
  }
  ```

## GET /users/logout

Logout the authenticated user.

- URL: `/users/logout`
- Method: `GET`
- Content-Type: `application/json`
- Requires authentication (JWT in cookie or Authorization header)
- Implemented in: `routes/user.routes.js` -> handler: [`logoutUser`](controllers/user.controller.js)

### Description

Logs out the user by clearing the authentication cookie and blacklisting the JWT token.

### Request

No body required. JWT must be sent via cookie or `Authorization: Bearer <token>` header.

### Responses

- 200 OK
  - Description: User successfully logged out.
  - Example:

  ```json
  {
    "message": "Logged out successfully"
  }
  ```

- 401 Unauthorized
  - Description: Missing or invalid token.
  - Example:

  ```json
  {
    "message": "Authentication required"
  }
  ```

- 500 Internal Server Error
  - Description: Unexpected server error.
  - Example:

  ```json
  {
    "error": "Internal server error"
  }
  ```

# Captain API

## POST /captain/register

Register a new captain (driver).

- URL: `/captains/register`
- Method: `POST`
- Content-Type: `application/json`
- Implemented in: `routes/captain.routes.js` -> handler: [`registerCaptain`](controllers/captain.controller.js)

### Description

Creates a new captain account with vehicle details. Validates incoming data, hashes the password, stores the captain, and returns the created captain object.

### Request body

JSON object with these fields:

- `fullname` (object)
  - `firstname` (string) — required, minimum 3 characters
  - `lastname` (string) — required, minimum 3 characters
- `email` (string) — required, must be a valid email
- `password` (string) — required, minimum 6 characters
- `vehicle` (object)
  - `color` (string) — required, minimum 3 characters
  - `plate` (string) — required, minimum 3 characters
  - `capacity` (integer) — required, minimum 1
  - `vehicleType` (string) — required, must be one of: `bike`, `car`, `auto`

Example:

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "strongPassword456",
  "vehicle": {
    "color": "Red",
    "plate": "AB123CD",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

- 201 Created
  - Description: Captain successfully created.
  - Body: JSON containing the created captain object.
  - Example:

  ```json
  {
    "_id": "60f7f8b9a2e4d34b8c8b4568",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    },
    "__v": 0
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
