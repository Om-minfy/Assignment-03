# A Robust Auth App with Profile Management

## Link to the deployed application:

https://robust-auth-app.web.app/

---

## Build on the "Easy" version's foundation:
![alt text](11.PNG)

---

## Global State Management:

### Logout Page:
![alt text](1.PNG)

---

## Enhance Authentication Features:

### Forgot Password?" feature:
![alt text](2.PNG)
![alt text](12.PNG)
![alt text](13.PNG)
![alt text](14.PNG)
![alt text](15.PNG)
![alt text](16.PNG)

### Add a "Sign in with Google" button
![alt text](3.PNG)

---

## Improve User Experience:

### This email is already in use:
![alt text](4.PNG)

### Invalid password:
![alt text](5.PNG)

---

## Profile Page:

### display the currently logged-in user's email and UID:
![alt text](6.PNG)

---

## (Bonus Task):

### Add email verification:
![alt text](7.PNG)
![alt text](8.jpeg)
![alt text](9.jpeg)
![alt text](10.PNG)

---

## Local setup instructions:

- Clone the repo & install dependencies
```bash
git clone my repo
cd user-auth-app
npm install
```

- Create a Firebase project & enable Email/Password login.

- Create a .env file in the root with your Firebase config:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

- Run the app:
```bash
npm run dev
```

- Visit: http://localhost:5173

---

## A short description of the advanced features you implemented (Context, Google Sign-in, Password Reset):

- **Auth Context**: Centralized authentication state management using React Context to avoid prop drilling.
- **Google Sign-In**: Integrated Google authentication via Firebase's popup method for quick and secure login.
- **Password Reset**: Added a "Forgot Password?" feature that emails users a secure password reset link.