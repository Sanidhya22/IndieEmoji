var aesjs = require("aes-js");
var pbkdf2 = require("pbkdf2");
import combinations from "../mockdata/Combination";
import character from "../mockdata/Emojis";
export const TextToEncrpted = (password: string, message: string) => {
  const getRandon = getRandomIntInclusive(1, 50);
  var key = pbkdf2.pbkdf2Sync(password, "salt", 1, 128 / 8, "sha512");
  var iv = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
  iv.push(getRandon);

  var textBytes = aesjs.utils.utf8.toBytes(message);
  var aesOfb = new aesjs.ModeOfOperation.ofb(key, iv);
  var encryptedBytes = aesOfb.encrypt(textBytes);
  const emoji = EncryptedToEmoji;
  return emoji;
};
const EmojiToText = (password: string, emojistring: string) => {
  const encryptedBytes = EmojiToEncrypted;
  const key = pbkdf2.pbkdf2Sync(password, "salt", 1, 128 / 8, "sha512");
  var iv = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
  var aesOfb = new aesjs.ModeOfOperation.ofb(key, iv);
  var decryptedBytes = aesOfb.decrypt(encryptedBytes);
  var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  console.log(decryptedText.length);
  return decryptedText;
};
function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

const EncryptedToEmoji = () => {};
const EmojiToEncrypted = () => {};
