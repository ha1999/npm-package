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

// console.log(publicKey.toString('hex'), privateKey)
const data = crypto.randomBytes(20).toString('hex');
export const encryptedData = (data) => crypto.publicEncrypt(
	{
		key: publicKey,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
	},
	Buffer.from(data)
)

// console.log("encypted data: ", encryptedData.toString("hex"))
export const decryptedData = (encryptedData) => crypto.privateDecrypt(
	{
		key: privateKey,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
		passphrase: 'top secret',
	},
	encryptedData
)

console.log("decrypted data: ", decryptedData.toString())