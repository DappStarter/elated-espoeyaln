require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace glide fringe skull drift razor soccer assume grace slam force symptom'; 
let testAccounts = [
"0x621be5ab8a0cd45b3c0590423079c8e126cce86413cb7c61aa147ed291c0395a",
"0x9344700eb9be6b2951b03f155a07dd0ca1b01bdb4c4d0bb2d60201d63d54eee5",
"0x207018dfb201b830a737780636088fb0078311c93a69d26ec9ed8f7b475a16ce",
"0xbb6aedc492eea409e9c5cb1bd06e867c2a34a2797994e7128836644e3bde466d",
"0xc164082eeb4f5a3c449667a1d15652eafe7179a535bdbeee8272dc4db44432b6",
"0x4bbd9a15879445a10e3c8b2841ac7e98691ea1256fd12571bcc3ddfaad089bde",
"0xcece7a2addd16526ff842e96fafc4ef6d2ad13bc78e2ac379d7dcdbbb63381b6",
"0x5a86deeed5a8fd80c9a170dc1f951118f86225c51563d0eb19023c2d90274b23",
"0x7e290e3df12387afc31c8c86798c8e88bd848ba6653cd1c8a73b4861f8d6ef1d",
"0x996c78e13daf1ac8c1e18af2691da84e32bf1f4ed9ad4e6b7503b9382e8f8a33"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


