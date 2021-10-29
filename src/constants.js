const CONTRACT_ADDRESS = '0xEfcD8e8eF678f65879B049842Ce55d5C9BECB1DD';
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

export { CONTRACT_ADDRESS, transformCharacterData };