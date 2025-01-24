const EC = require('elliptic').ec;
const crypto = require('crypto');

const ec = new EC('secp256k1');

const keyPair = ec.genKeyPair();
const privateKey = keyPair.getPrivate('hex');
const publicKey = keyPair.getPublic('hex');
const hash = crypto.createHash('sha256').update(publicKey, 'hex').digest();
const address = `0x${hash.slice(-20).toString('hex')}`;

  console.log({ privateKey, publicKey, address });


