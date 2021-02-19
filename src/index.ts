const crypto = require('crypto');
const { generateKeyPairSync } = require('crypto');

export const generateKey = () => generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
});
export const encryptedData = (data, publicKey) => crypto.publicEncrypt(
	{
		key: publicKey,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
	},
	Buffer.from(data)
).toString('base64')
export const decryptedData = (encryptedData, privateKey) => crypto.privateDecrypt(
	{
		key: privateKey,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
		passphrase: 'top secret',
	},
	encryptedData
).toString()
