// src/crypto.js
import crypto from 'crypto';
import argon2 from 'argon2';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;  // Recommended IV size
const SALT_LENGTH = 16;

/**
 * Generates a secure encryption key using Argon2.
 */
async function generateKey(password, salt) {
    return await argon2.hash(password, {
        salt,
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 5,
        parallelism: 2,
        hashLength: 32,
        raw: true
    });
}

/**
 * Encrypts a given text using AES-256-GCM with Argon2-derived key.
 */
export async function encrypt(text, password) {
    const salt = crypto.randomBytes(SALT_LENGTH);
    const key = await generateKey(password, salt);
    const iv = crypto.randomBytes(IV_LENGTH);

    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const authTag = cipher.getAuthTag();

    return `${salt.toString('hex')}:${iv.toString('hex')}:${encrypted}:${authTag.toString('hex')}`;
}

/**
 * Decrypts an encrypted string using AES-256-GCM with Argon2 key derivation.
 */
export async function decrypt(encryptedData, password) {
    try {
        const [saltHex, ivHex, encryptedText, authTagHex] = encryptedData.split(':');

        const salt = Buffer.from(saltHex, 'hex');
        const iv = Buffer.from(ivHex, 'hex');
        const authTag = Buffer.from(authTagHex, 'hex');
        const key = await generateKey(password, salt);

        const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
        decipher.setAuthTag(authTag);

        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');

        return decrypted;
    } catch (error) {
        throw new Error('Decryption failed. Invalid key or corrupted data.');
    }
}
