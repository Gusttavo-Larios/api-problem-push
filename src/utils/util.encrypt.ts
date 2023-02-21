import crypto from 'crypto-js'

class EncryptUtil {
    static PASSWORD_KEY_SECRET_ENCRYPT: string = process.env.PASSWORD_KEY_SECRET_ENCRYPT as string;

    encrypt(text: string, secretKey: string) {
        const cipherText = crypto.AES.encrypt(text, secretKey).toString()
        return cipherText
    }

    dencrypt(cipherText: string, secretKey: string) {
        try {
            const bytes = crypto.AES.decrypt(cipherText, secretKey);
            const originalText = bytes.toString(crypto.enc.Utf8);
            return originalText
        } catch (error) {
            throw error
        }
    }
}

export default EncryptUtil