require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth rural mixture grace lobster olympic total'; 
let testAccounts = [
"0xbe69645822e1c676e2c0c169887f07ab68b29e8a6d4d185318831735a8261897",
"0x7f2da71161101aff68f9f1f9abf86e86e078b63a3b64befd44c8cad11b920f43",
"0x5fae554c6b30d733a7ac9ffe3e305c274a9e2265b8e52fe0b94ea39557f6f9c5",
"0x9404b92f99e611acd5b9724c9ce322db279b16a71479507d4f068948bda09eae",
"0x968a8ea0c0d4497209aaa93b14612d8caea80151c4f9d5672e6de6bb120fd963",
"0x6b50989b5015a01045d29f5380236597ac628618a3e6b48c975673d51ef7b1d6",
"0xd6ab9bfad3a51050121674246a78a7668de4aad75eaecb384d8f170d5fe09c3a",
"0x0925e84acf6a5cf0266de489acdfb39b7b066a1cfd8338a5636ac9cc16596579",
"0xf4d1e95091ddb77c655750d11d174014f3a27de6d86f6ac5037d788059b12336",
"0xf020020957882a8534c800fdf841978ea0dcaff5116773709236079f1b1c569d"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
