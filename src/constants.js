const CONTRACT_ADDRESS = '0xD024BDd84f7F88357bF2cd4D2D98AFdee54B58E7';
const IPFS = 'https://cloudflare-ipfs.com/ipfs/'

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData, IPFS };