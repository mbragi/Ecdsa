const crypto = require('crypto');

const privateKey = crypto.randomBytes(32).toString('hex');
const ecdh = crypto.createECDH('secp256k1');
ecdh.setPrivateKey(Buffer.from(privateKey, 'hex'));
const publicKey = ecdh.getPublicKey('hex');
const hash = crypto.createHash('sha256').update(Buffer.from(publicKey, 'hex')).digest();
const address = `0x${hash.slice(-20).toString('hex')}`;

console.log({ privateKey, publicKey, address });
