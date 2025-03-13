// src/index.d.ts
declare module 'cryptoswiftjs' {
    export function encrypt(text: string, password: string): Promise<string>;
    export function decrypt(encryptedData: string, password: string): Promise<string>;
}

export = cryptoswiftjs;