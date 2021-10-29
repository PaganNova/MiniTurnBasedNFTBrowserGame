const CONTRACT_ADDRESS = '0x985c84cF49F01D2b3133D7FD4B91CDB6C9d812FB';
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