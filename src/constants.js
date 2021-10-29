const CONTRACT_ADDRESS = '0x5F58B95E4c7ea643eF46b793cbbAC68277B63E13';
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