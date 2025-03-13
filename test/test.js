const { encrypt, decrypt } = require('../src/index.js');
const password = "mySecretPassword";
const data = "Hello, World!";
(async () => {
  try {
    const encrypted = await encrypt(data, password);
    console.log("Encrypted:", encrypted);
    const decrypted = await decrypt(encrypted, password);
    console.log("Decrypted:", decrypted);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();