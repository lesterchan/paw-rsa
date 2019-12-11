const { JSEncrypt } = require("jsencrypt");

@registerDynamicValueClass // eslint-disable-line
export default class RSA {
  static identifier = "com.lesterchan.PawExtensions.RSA";
  static title = "RSA";
  static inputs = [
    DynamicValueInput("publicKey", "Public Key", "String"),
    DynamicValueInput("privateKey", "Private Key", "String"),
    DynamicValueInput("text", "Text", "String"),
    InputField("encryptDecrypt", "Encrypt/Decrypt", "Radio", {
      choices: { encrypt: "Encrypt", decrypt: "Decrypt" },
      defaultValue: "encrypt"
    })
  ];

  constructor() {
    this.context = null;
  }

  evaluate() {
    const jsencrypt = new JSEncrypt();
    if (this.privateKey) {
      jsencrypt.setPrivateKey(this.privateKey);
    } else {
      jsencrypt.setPublicKey(this.publicKey);
    }

    if (this.encryptDecrypt === "decrypt") {
      return jsencrypt.decrypt(this.text);
    }

    return jsencrypt.encrypt(this.text);
  }
}
