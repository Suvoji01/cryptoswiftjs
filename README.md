# CryptoSwiftJS 🔐

A secure AES-256-GCM encryption/decryption library using **Argon2 password hashing**.

## 🚀 Features

✅ Uses **AES-256-GCM** (high security)  
✅ Password-based key derivation using **Argon2id**  
✅ Uses **random salts & IVs** for stronger encryption  
✅ Easy to use & lightweight  

---

## 📦 Installation

Install via npm:

```sh
npm install cryptoswiftjs
```

Or with yarn:

```sh
yarn add cryptoswiftjs
```

---

## 🔧 Usage

### **Encrypt Data**
```js
import { encrypt } from 'cryptoswiftjs';

const message = "Hello, Secure World!";
const password = "mySuperStrongPassword123";

(async () => {
    const encrypted = await encrypt(message, password);
    console.log("Encrypted:", encrypted);
})();
```

### **Decrypt Data**
```js
import { decrypt } from 'cryptoswiftjs';

(async () => {
    const encryptedData = "your_encrypted_data_here";
    const decrypted = await decrypt(encryptedData, "mySuperStrongPassword123");
    console.log("Decrypted:", decrypted);
})();
```

---

## 🛠 How It Works

1. **Password-Based Key Derivation**  
   - Uses **Argon2id** to generate a 32-byte key from the password.  
   - Includes **random salts** for enhanced security.  

2. **AES-256-GCM Encryption**  
   - Encrypts data with a **random IV** using AES-256-GCM.  
   - Generates an **authentication tag** to prevent tampering.  

3. **Secure Decryption**  
   - Uses the same password to **derive the key** and **decrypt the data**.  
   - Validates the **authentication tag** to ensure integrity.  

---

## 🔥 Security Considerations

- **Never reuse salts & IVs** for the same password.  
- **Do not hardcode passwords** in your application.  
- **Use a strong password** (long, random, and unique).  
- **Consider additional encryption layers** for highly sensitive data.  

---

## 📄 API Reference

### `encrypt(text: string, password: string) => Promise<string>`
Encrypts the given text using **AES-256-GCM** and returns an encrypted string.

### `decrypt(encryptedData: string, password: string) => Promise<string>`
Decrypts the encrypted string back to its original plaintext.

---

## 🛠 Issues & Enhancements

For bug reports or feature requests, visit:  
🔗 **[GitHub Issues](https://github.com/Suvoji01/cryptoswiftjs/issues)**

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Commit your changes (`git commit -m "Added a cool feature"`)  
4. Push the branch (`git push origin feature-branch`)  
5. Submit a pull request 🚀  

---

## 📜 License

Licensed under the **MIT License**.  

---

💡 **Made with ❤️ by [Suvojit Modak](https://github.com/Suvoji01/)**  

---