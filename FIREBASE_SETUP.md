# URUZ Flow V13
Firebase project: uruzflow

Authentication:
- Email/Password only.
- Anonymous Authentication is NOT required.
- Encik Amir UID is locked as the first Full Access account.

Before use:
1. Firebase Authentication > Sign-in method > enable Email/Password.
2. Ensure Encik Amir exists under Authentication > Users with UID:
   A5GLNpoxXnUi6U0gHuMET7Yucqi2
3. Firestore Database > Rules: the included firestore.rules matches this UID.
4. Deploy all files.

Do not place passwords inside source code. Encik Amir enters his Firebase Authentication email/password on the login screen.
