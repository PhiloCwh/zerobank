export const VALUETOKENOBJECTS = [
  {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
    imgsrc: "https://bscscan.com/token/images/bnbchain2_32.png",
  },
];

export const ZEROBANK_ADDRESS = "0xB848cdFaAD5A9C890eEE230c42805FA49Aaa8227";

export const API_URL = import.meta.env.DEV
  ? "http://localhost:3000"
  : "https://api.zerobank.com";
