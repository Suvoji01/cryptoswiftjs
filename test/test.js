// test/test.js
import { encrypt, decrypt } from '../src/index.js';

const message = "Hello, Secure World!";
const secretKey = "mySuperStrongPassword123";

(async () => {
    const encrypted = await encrypt(message, secretKey);
    console.log("Encrypted:", encrypted);

    const decrypted = await decrypt(encrypted, secretKey);
    console.log("Decrypted:", decrypted);
})();
