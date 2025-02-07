# Express OIDC Auth Middleware

A TypeScript-friendly Express middleware for OIDC authentication with role-based access control. Version 2.7.0

## Features

- 🔐 OIDC authentication support
- 👥 Role-based access control
- 📝 TypeScript support
- ⚡ Express.js integration
- 🔄 Token validation and verification
- 🎯 Configurable OIDC issuer

## Installation

```bash
npm install @dapl/oidc-auth-middleware
```

## Usage

### Basic Setup

```typescript
import express from "express";
import { createOIDCAuthMiddleware, Roles } from "@dapl/oidc-auth-middleware";

const app = express();

async function setup() {
  // Initialize OIDC middleware ### Make sure Use the same condition as the one in the example for issuerUri
  const issuerUri = process.env.OIDC_ISSUER;
  if (!issuerUri) {
    throw new Error("OIDC_ISSUER environment variable is required");
  }

  const oidcMiddleware = await createOIDCAuthMiddleware({
    issuerUri: issuerUri,
  });

  // Apply authentication middleware globally
  app.use(oidcMiddleware.authenticate);

  // Protected route with role-based access
  app.get("/admin", oidcMiddleware.requireRoles([Roles.ADMIN]), (req, res) => {
    res.json({ message: "Admin access granted" });
  });
}

setup();
```

### TypeScript Usage

For TypeScript users, you can use the provided types for better type safety:

```typescript
import {
  createOIDCAuthMiddleware,
  Roles,
  type AuthenticatedRequest,
} from "@dapl/oidc-auth-middleware";

app.get(
  "/profile",
  oidcMiddleware.requireRoles([Roles.USER]),
  (req: AuthenticatedRequest, res) => {
    // req.user is properly typed
    const username = req.user?.preferred_username;
    res.json({ username });
  }
);
```

### Available Roles

The following roles are predefined:

```typescript
const Roles = {
  ADMIN: "admin",
  SUPERADMIN: "superadmin",
  GOVERNANCE: "governance",
  PRINCIPAL: "principal",
  SME: "sme",
  STUDENT: "student",
  TEACHER: "teacher",
  DERTEXAM: "dertExam",
  DERTACADEMIC: "dertAcademic",
  SUPPORT_EXECUTIVE = "support_executive",
  OPERATION_EXECUTIVE = "operation_executive",
  CRC = "crc",
  BRC = "brc",
  DISTRICT_ADMIN = "district_admin",
  STATE_ADMIN = "state_admin",
};
```

### RESPONSE OF THE DECODED TOKEN

The following roles are predefined:

```json
{
  sub: 'f:7d7b7179-60e4-4d83-99e6-31c6cbb9a984:67a4842d9a317be730cf9ace',
  preferred_username: '123789456',
  realm_access: { roles: [ 'admin' ] },
  role: 'admin',
  upn: 'ObjectId', #ObjectId Of User In Plain String
  email: 'xyz@gmail.com',
  name: 'admin',
  given_name: 'admin',
  family_name: ''
}
```

### JavaScript Usage

For JavaScript users:

```javascript
const {
  createOIDCAuthMiddleware,
  Roles,
} = require("@dapl/oidc-auth-middleware");

// Initialize middleware
const oidcMiddleware = await createOIDCAuthMiddleware({
  issuerUri: "https://your-oidc-issuer.com",
});

// Protected route
app.get("/admin", oidcMiddleware.requireRoles([Roles.ADMIN]), (req, res) => {
  res.json({ message: "Admin access granted" });
});
```

## API Reference

### createOIDCAuthMiddleware(config)

Creates an instance of the OIDC middleware.

```typescript
interface OIDCConfig {
  issuerUri: string;
}

const middleware = await createOIDCAuthMiddleware({
  issuerUri: "https://your-oidc-issuer.com",
});
```

### middleware.authenticate

Express middleware for authenticating requests.

```typescript
app.use(middleware.authenticate);
```

### middleware.requireRoles(roles)

Express middleware for role-based access control.

```typescript
app.get("/admin", middleware.requireRoles([Roles.ADMIN, Roles.SUPERADMIN]));
```

## Error Handling

The middleware provides standard HTTP status codes for different scenarios:

- 401 Unauthorized: No token or invalid token
- 403 Forbidden: Insufficient role permissions
- 500 Internal Server Error: Server-side errors

## Publishing to NPM

To publish this library to NPM:

1. Make sure you add .npmrc file with our registry Url:

2. Run NPM Command:

```bash
vsts-npm-auth -config
```

3. Run NPM Command For authentication:

```bash
npm install -g vsts-npm-auth
```

4. Publish to NPM:

```bash
npm publish
```
