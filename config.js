// config.js
require('dotenv').config();
module.exports = {
  port: process.env.PORT || 3000,
  vonage: {
    applicationId: process.env.VONAGE_APPLICATION_ID,
    privateKey: process.env.VONAGE_PRIVATE_KEY,
    signatureSecret: process.env.VONAGE_API_SIGNATURE_SECRET,
  },
  rcsSenderId: process.env.RCS_SENDER_ID,
  images: {
    footballMatch: "https://raw.githubusercontent.com/ruskibenya/rcs-football-trial/main/football_match.png",
    manOfMatch: "https://raw.githubusercontent.com/ruskibenya/rcs-football-trial/main/man_of_match.png",
    jersey: "https://raw.githubusercontent.com/ruskibenya/rcs-football-trial/main/ronaldinho_jersey.png",
    photo: "https://raw.githubusercontent.com/ruskibenya/rcs-football-trial/main/ronaldinho_photo.png",
    tshirt: "https://raw.githubusercontent.com/ruskibenya/rcs-football-trial/main/ronaldinho_shirt.png",
  },
  merchLinks: {
    jersey: "https://www.ebay.com/b/Ronaldinho-International-Club-Soccer-Fan-Jerseys/2887/bn_16948843",
    photo: "https://www.ebay.com/shop/ronaldinho-signed-photo?_nkw=ronaldinho+signed+photo",
    tshirt: "https://www.ebay.com/itm/236003366810?_skw=ronaldinho+tshirt",
  }
};
