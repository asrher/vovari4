const { cmd, sck1 } = require("../lib/");
 const footbal = {
  "https://i.ibb.co/56SsqH9/IMG-20230705-WA0184.jpg": ["غوجو"],
  "https://i.ibb.co/R66nbYV/IMG-20230706-WA0526.jpg": ["يور"],
  "https://i.ibb.co/wwDQvdQ/IMG-20230707-WA0138.jpg": ["هيت"],
  "https://i.ibb.co/tmTQTXB/IMG-20230707-WA0200.jpg": ["ليفاي"],
  "https://i.ibb.co/Ss9Fhjp/IMG-20230707-WA0465.jpg": ["سانجو"],
  "https://i.ibb.co/nQTZTQG/IMG-20230707-WA0466.jpg": ["بروك"],
  "https://i.ibb.co/CWZhLxs/IMG-20230707-WA0467.jpg": ["ياماتو"],
  "https://i.ibb.co/rpcBFXZ/IMG-20230707-WA0468.jpg": ["نيوغيت", "ادوارد"],
  "https://i.ibb.co/SvYkhHP/IMG-20230707-WA0469.jpg": ["سابو"],
  "https://i.ibb.co/mBMCkPk/IMG-20230707-WA0470.jpg": ["ميداري"],
  "https://i.ibb.co/rx5b81j/IMG-20230707-WA0473.jpg": ["هوري"],
  "https://i.ibb.co/qyYNvzG/IMG-20230707-WA0475.jpg": ["ماكي"],
  "https://i.ibb.co/X3QqHCN/IMG-20230707-WA0476.jpg": ["زينيتسو"],
  "https://i.ibb.co/xqx9gBJ/IMG-20230707-WA0478.jpg": ["تانجيرو"],
  "https://i.ibb.co/Kz6VKH9/IMG-20230707-WA0480.jpg": ["ايتشيغو"],
  "https://i.ibb.co/5Gxp7XY/IMG-20230707-WA0481.jpg": ["نيزوكو"],
  "https://i.ibb.co/P59TV83/IMG-20230707-WA0482.jpg": ["ريم"],
  "https://i.ibb.co/VWyf3Qk/IMG-20230707-WA0483.jpg": ["ميسا"],
  "https://i.ibb.co/zJfKhrp/IMG-20230707-WA0485.jpg": ["يوميكو"],
  "https://i.ibb.co/kQmCnDB/IMG-20230707-WA0495.jpg": ["اكازا"],
  "https://i.ibb.co/b354773/IMG-20230707-WA0496.jpg": ["تشوبر"],
  "https://i.ibb.co/CWNrmBK/IMG-20230707-WA0498.jpg": ["غارب"],
  "https://i.ibb.co/HDGttCs/IMG-20230707-WA0522.jpg": ["شانكس"],
  "https://i.ibb.co/YLcqgLJ/IMG-20230707-WA0563.jpg": ["غوجو"],
  "https://i.ibb.co/RP0BnmL/IMG-20230707-WA0564.jpg": ["غون"],
  "https://i.ibb.co/HB4gWZD/IMG-20230707-WA0567.jpg": ["اوسوب"],
  "https://i.ibb.co/WDHBHtP/IMG-20230707-WA0669.jpg": ["سانيمي", "شينازوغاوا"],
  "https://i.ibb.co/44RpwxY/IMG-20230707-WA0732.jpg": ["دازاي"],
  "https://i.ibb.co/nkBGbYv/IMG-20230707-WA0734.jpg": ["توكيتو"],
  "https://i.ibb.co/9HzPSVT/IMG-20230707-WA0812.jpg": ["ايتشيغو"],
  "https://i.ibb.co/bLzQgFf/IMG-20230707-WA0813.jpg": ["هينانو"],
  "https://i.ibb.co/mzMvL8Y/IMG-20230707-WA0816.jpg": ["كارما"],
  "https://i.ibb.co/7NSXJQm/IMG-20230707-WA0915.jpg": ["دوما"],
  "https://i.ibb.co/pzVPTpH/IMG-20230707-WA0965.jpg": ["لوفي"],
  "https://i.ibb.co/rcn0Hgd/IMG-20230707-WA0969.jpg": ["سينشي", "كودو"],
  "https://i.ibb.co/HBSFnxp/IMG-20230707-WA0973.jpg": ["مابوتشي", "كو"],
  "https://i.ibb.co/KszTSB7/IMG-20230707-WA0974.jpg": ["سوزوني", "هوريكيتا"],
  "https://i.ibb.co/YX6Tmkv/IMG-20230707-WA0975.jpg": ["سينشي"],
  "https://i.ibb.co/6WKzgGy/IMG-20230707-WA0976.jpg": ["دابي"],
  "https://i.ibb.co/gjJQnRN/IMG-20230707-WA0977.jpg": ["لاو"],
  "https://i.ibb.co/0McpCR7/IMG-20230707-WA0980.jpg": ["يوكينو"],
  "https://i.ibb.co/qgxvg3W/IMG-20230707-WA0981.jpg": ["كاغويا"],
  "https://i.ibb.co/r7fnYj3/IMG-20230707-WA0983.jpg": ["ران"],
  "https://i.ibb.co/9Gm06TL/IMG-20230707-WA0987.jpg": ["يونا"],
  "https://i.ibb.co/Xsc9mSk/IMG-20230707-WA0990.jpg": ["يامي"],
  "https://i.ibb.co/p0cFYrL/IMG-20230707-WA0992.jpg": ["اوتو اي"],
  "https://i.ibb.co/L5HCwsw/IMG-20230707-WA0994.jpg": ["يونا"],
  "https://i.ibb.co/2Ywgn7T/IMG-20230707-WA0995.jpg": ["ايرين"],
  "https://i.ibb.co/B2HpTzB/IMG-20230707-WA0997.jpg": ["هوري"],
  "https://i.ibb.co/DfQhRXs/IMG-20230707-WA0998.jpg": ["دازاي"],
  "https://i.ibb.co/BwKxTRX/IMG-20230707-WA0999.jpg": ["كيويا", "ساتا"],
  "https://i.ibb.co/cxfNSt6/IMG-20230707-WA1000.jpg": ["اكاي"],
  "https://i.ibb.co/KN7J31m/IMG-20230707-WA1002.jpg": ["البيرت"],
  "https://i.ibb.co/jz9HXpN/IMG-20230707-WA1003.jpg": ["كازوها"],
  "https://i.ibb.co/7kPfd9R/IMG-20230707-WA1004.jpg": ["غوجو"],
  "https://i.ibb.co/48D6y6H/IMG-20230707-WA1005.jpg": ["يونا"],
  "https://i.ibb.co/w4sD6sR/IMG-20230707-WA1009.jpg": ["روبي"],
  "https://i.ibb.co/NYFmDh7/IMG-20230707-WA1010.jpg": ["هيروتاكا"],
  "https://i.ibb.co/StmryWg/IMG-20230707-WA1012.jpg": ["دازاي"],
  "https://i.ibb.co/xJKFKSr/IMG-20230707-WA1014.jpg": ["روبي"],
  "https://i.ibb.co/5r933LL/IMG-20230707-WA1015.jpg": ["هيروتاكا"],
  "https://i.ibb.co/jhTZm6R/IMG-20230707-WA1016.jpg": ["ميامورا"],
  "https://i.ibb.co/Mf64gfd/IMG-20230707-WA1018.jpg": ["تيماري"],
  "https://i.ibb.co/Bt7WC0q/IMG-20230707-WA1019.jpg": ["ايروين"],
  "https://i.ibb.co/5nStDsv/IMG-20230707-WA1021.jpg": ["كونان"],
  "https://i.ibb.co/bbZ6tHD/IMG-20230707-WA1022.jpg": ["ليفاي"],
  "https://i.ibb.co/BgphhvL/IMG-20230707-WA1025.jpg": ["هيروتاكا"],
  "https://i.ibb.co/MMGGyq2/IMG-20230707-WA1027.jpg": ["لاو"],
  "https://i.ibb.co/0fXSWH7/IMG-20230707-WA1028.jpg": ["ليفاي"],
  "https://i.ibb.co/98HTGYK/IMG-20230707-WA1029.jpg": ["ليفاي"],
  "https://i.ibb.co/nnsVSxn/IMG-20230707-WA1030.jpg": ["ليفاي"],
  "https://i.ibb.co/6t26rmF/IMG-20230707-WA1035.jpg": ["كينما"],
  "https://i.ibb.co/FDBj08R/IMG-20230707-WA1036.jpg": ["ايرين"],
  "https://i.ibb.co/Kq7f1BR/IMG-20230707-WA1037.jpg": ["شوجي", "هانما"],
  "https://i.ibb.co/qrdMZxC/IMG-20230707-WA1039.jpg": ["يامي"],
  "https://i.ibb.co/ctvXqqJ/IMG-20230707-WA1040.jpg": ["كيرا"],
  "https://i.ibb.co/MR8KRQL/IMG-20230707-WA1041.jpg": ["لاو"],
  "https://i.ibb.co/v1f1m8G/IMG-20230707-WA1043.jpg": ["يوشيوكا", "فوتوبا"],
  "https://i.ibb.co/7yyW17G/IMG-20230707-WA1044.jpg": ["نينو"],
  "https://i.ibb.co/ZMBrPKB/IMG-20230707-WA1045.jpg": ["ساتا", "كيويا"],
  "https://i.ibb.co/84rrNfm/IMG-20230707-WA1046.jpg": ["اوكيجي"],
  "https://i.ibb.co/2YGS68M/IMG-20230707-WA1047.jpg": ["مابوتشي"],
  "https://i.ibb.co/FBKr2yK/IMG-20230707-WA1048.jpg": ["ناروتو"],
  "https://i.ibb.co/pvwMwnC/IMG-20230707-WA1049.jpg": ["ميم", "تشو"],
  "https://i.ibb.co/CBCTj2w/IMG-20230707-WA1050.jpg": ["نارومي"],
  "https://i.ibb.co/HVFMm42/IMG-20230707-WA1051.jpg": ["غورين", "جورين"],
  "https://i.ibb.co/nfC76Tx/IMG-20230707-WA1052.jpg": ["هوري"],
  "https://i.ibb.co/t3XHp0Z/IMG-20230707-WA1053.jpg": ["ييرينيكا"],
  "https://i.ibb.co/Rbzy5yW/IMG-20230707-WA1054.jpg": ["هانما", "شوجي"],
  "https://i.ibb.co/D5PQTKw/IMG-20230707-WA1060.jpg": ["ميم", "تشو"],
  "https://i.ibb.co/tp7pgKR/IMG-20230707-WA1061.jpg": ["هيناتا"],
  "https://i.ibb.co/7Xm2Kp5/IMG-20230707-WA1063.jpg": ["اينيوشا"],
  "https://i.ibb.co/jymr0yN/IMG-20230707-WA1064.jpg": ["هانما"],
  "https://i.ibb.co/6rCMYmZ/IMG-20230707-WA1065.jpg": ["اسونا"],
  "https://i.ibb.co/4NZxJwM/IMG-20230708-WA0182.jpg": ["فريزا"],
  "https://i.ibb.co/h8hgjHX/IMG-20230708-WA0183.jpg": ["فيرو"],
  "https://i.ibb.co/NyGktJr/IMG-20230708-WA0201.jpg": ["يونا"],
  "https://i.ibb.co/yq6VTXj/IMG-20230708-WA0255.jpg": ["شينوبو"],
  "https://i.ibb.co/8shcGkG/IMG-20230708-WA0385.jpg": ["هانجي"],
  "https://i.ibb.co/b2683wT/IMG-20230708-WA0386.jpg": ["ليفاي"],
  "https://i.ibb.co/8xv2TCZ/IMG-20230708-WA0387.jpg": ["دازاي"],
  "https://i.ibb.co/kxgFcht/IMG-20230708-WA0388.jpg": ["غاتس"],
  "https://i.ibb.co/1QMXX8R/IMG-20230708-WA0389.jpg": ["ايتاتشي"],
  "https://i.ibb.co/NKwDWN3/IMG-20230708-WA0390.jpg": ["فيفي"],
  "https://i.ibb.co/B6XHH7C/IMG-20230708-WA0391.jpg": ["نامي"],
  "https://i.ibb.co/CvYpzN9/IMG-20230708-WA0392.jpg": ["روبين"],
  "https://i.ibb.co/0ZvWChN/IMG-20230708-WA0393.jpg": ["غوجو"],
  "https://i.ibb.co/JK7GNJk/IMG-20230708-WA0397.jpg": ["غون"],
  "https://i.ibb.co/pW4xD0c/IMG-20230708-WA0399.jpg": ["لوفي"],
  "https://i.ibb.co/9nLyhy5/IMG-20230708-WA0400.jpg": ["هانكوك"],
  "https://i.ibb.co/yqZHdD1/IMG-20230708-WA0401.jpg": ["لاو"],
  "https://i.ibb.co/4KTH3nw/IMG-20230708-WA0402.jpg": ["ميهوك"],
  "https://i.ibb.co/Dfv5DsG/IMG-20230708-WA0423.jpg": ["سموكر"],
  "https://i.ibb.co/X36wsFC/IMG-20230708-WA0430.jpg": ["توكيتو"],
  "https://i.ibb.co/N7GGMfT/IMG-20230708-WA0449.jpg": ["نانامي"],
  "https://i.ibb.co/Q9Fv6t5/IMG-20230708-WA0450.jpg": ["كاكاشي"],
  "https://i.ibb.co/7gyGF6L/IMG-20230708-WA0451.jpg": ["دابي"],
  "https://i.ibb.co/9NwBHGg/IMG-20230708-WA0452.jpg": ["ايساغي"],
  "https://i.ibb.co/yqnrn0w/IMG-20230708-WA0453.jpg": ["تيا"],
  "https://i.ibb.co/Qp4X9kf/IMG-20230708-WA0455.jpg": ["يونا"],
  "https://i.ibb.co/0hDHwgr/IMG-20230708-WA0456.jpg": ["نويل"],
  "https://i.ibb.co/ZYhdyT5/IMG-20230708-WA0457.jpg": ["مايكي"],
  "https://i.ibb.co/sC4BQNQ/IMG-20230708-WA0458.jpg": ["دراكن"],
  "https://i.ibb.co/58SrvPB/IMG-20230708-WA0459.jpg": ["داكي"],
  "https://i.ibb.co/2jh3ncd/IMG-20230708-WA0460.jpg": ["لوكاس"],
  "https://i.ibb.co/brkZRsq/IMG-20230708-WA0462.jpg": ["هاك"],
  "https://i.ibb.co/fvH3crd/IMG-20230708-WA0463.jpg": ["يامي"],
  "https://i.ibb.co/rf7nd4N/IMG-20230708-WA0464.jpg": ["استا"],
  "https://i.ibb.co/58LZYHR/IMG-20230708-WA0467.jpg": ["ساكورا"],
  "https://i.ibb.co/PxwJtZ2/IMG-20230708-WA0468.jpg": ["غورين"],
  "https://i.ibb.co/68J15JD/IMG-20230708-WA0469.jpg": ["هيستوريا"],
  "https://i.ibb.co/MsZ2bWW/IMG-20230708-WA0472.jpg": ["شوتو", "تودوروكي"],
  "https://i.ibb.co/CQVSYpX/IMG-20230708-WA0473.jpg": ["سنايبر"],
  "https://i.ibb.co/p4J9tLY/IMG-20230708-WA0474.jpg": ["ثورز"],
  "https://i.ibb.co/Jj58kKx/IMG-20230708-WA0475.jpg": ["هيناتا"],
  "https://i.ibb.co/W24ZZHN/IMG-20230708-WA0476.jpg": ["هاك"],
  "https://i.ibb.co/px1tndj/IMG-20230708-WA0477.jpg": ["اينيل"],
  "https://i.ibb.co/9tKKtSh/IMG-20230708-WA0487.jpg": ["موزان"],
  "https://i.ibb.co/Y7NrhSJ/IMG-20230708-WA0488.jpg": ["هيناتا", "شويو"],
  "https://i.ibb.co/ZLfpQ28/IMG-20230708-WA0489.jpg": ["فاي"],
  "https://i.ibb.co/B4WQyNF/IMG-20230708-WA0491.jpg": ["ماسومي", "سيرا"],
  "https://i.ibb.co/2cBpGy4/IMG-20230708-WA0493.jpg": ["ماكوتو"],
  "https://i.ibb.co/N3cNV8p/IMG-20230708-WA0497.jpg": ["نوبارا"],
  "https://i.ibb.co/sVXrBsJ/IMG-20230708-WA0498.jpg": ["نامي"],
  "https://i.ibb.co/55zDPYW/IMG-20230708-WA0500.jpg": ["تسونادي"],
  "https://i.ibb.co/bzBsnRP/IMG-20230708-WA0502.jpg": ["سوكونا"],
  "https://i.ibb.co/qdM8MS2/IMG-20230708-WA0508.jpg": ["كرولو", "لوسيلفر"],
  "https://i.ibb.co/zJwj6Ms/IMG-20230708-WA0599.jpg": ["توكيتو"],
  "https://i.ibb.co/4KpypPn/IMG-20230708-WA0600.jpg": ["زورو"],
  "https://i.ibb.co/8Dy71JX/IMG-20230708-WA0605.jpg": ["يويتشي"],
  "https://i.ibb.co/N24fmdn/IMG-20230708-WA0609.jpg": ["مارين"],
  "https://i.ibb.co/CWY6xmv/IMG-20230708-WA0610.jpg": ["فايوليت"],
  "https://i.ibb.co/YhqjjGh/IMG-20230708-WA0611.jpg": ["كاتشان", "باكوغو"],
  "https://i.ibb.co/rtKsDmh/IMG-20230708-WA0616.jpg": ["كاي" ,"شيساكي"],
  "https://i.ibb.co/RNHVH3X/IMG-20230708-WA0684.jpg": ["فرانكي"],
  "https://i.ibb.co/RPDVRsq/IMG-20230708-WA1147.jpg": ["دازاي"],
  "https://i.ibb.co/Vg9JWmP/IMG-20230709-WA0067.jpg": ["سيرينوما"],
  "https://i.ibb.co/7nsyS5K/IMG-20230709-WA0453.jpg": ["سوكونا"],
  "https://i.ibb.co/LQx82hR/IMG-20230709-WA0514.jpg": ["جيومي"],
  "https://i.ibb.co/QrY5d1x/IMG-20230709-WA0515.jpg": ["شينيا","كوغامي"],
  "https://i.ibb.co/Yb7WbTX/IMG-20230709-WA0517.jpg": ["ميامورا"],
  "https://i.ibb.co/Gk6r6sg/IMG-20230709-WA0518.jpg": ["كروم"],
  "https://i.ibb.co/0ffm6dG/IMG-20230709-WA0519.jpg": ["كاروت"],
  "https://i.ibb.co/FhzWvJ7/IMG-20230709-WA0521.jpg": ["جورنو"],
  "https://i.ibb.co/fSJwfLt/IMG-20230709-WA0523.jpg": ["توغا"],
  "https://i.ibb.co/JCVWxyM/IMG-20230709-WA0703.jpg": ["غوكو"],
  "https://i.ibb.co/sbZFWW5/IMG-20230709-WA0704.jpg": ["كيلوا"],
  "https://i.ibb.co/3Sy0Grp/IMG-20230709-WA0705.jpg": ["اول فور ون"],
  "https://i.ibb.co/xYKyK92/IMG-20230709-WA0706.jpg": ["هنري"],
  "https://i.ibb.co/b3240sb/IMG-20230709-WA0707.jpg": ["بوبو"],
  "https://i.ibb.co/XVXFzPH/IMG-20230709-WA0708.jpg": ["تشيكا", "فوجيوارا"],
  "https://i.ibb.co/L1mfvPf/IMG-20230709-WA0710.jpg": ["يوليويس"],
  "https://i.ibb.co/wNvSHzG/IMG-20230709-WA0712.jpg": ["توايس"],
  "https://i.ibb.co/q0QXcF7/IMG-20230709-WA0713.jpg": ["كاتاكوري"],
  "https://i.ibb.co/FgMnvG4/IMG-20230709-WA0715.jpg": ["يامي"],
  "https://i.ibb.co/1JM87GM/IMG-20230709-WA0716.jpg": ["بونغو"],
  "https://i.ibb.co/qWNPbMH/IMG-20230709-WA0717.jpg": ["فيجيتا"],
  "https://i.ibb.co/3cHpWyf/IMG-20230709-WA0718.jpg": ["كيلوا", "ال", "ليفاي"],
  "https://i.ibb.co/0F2X4HK/IMG-20230709-WA0719.jpg": ["اينمو"],
  "https://i.ibb.co/YpLBJ1s/IMG-20230709-WA0720.jpg": ["غوجو"],
  "https://i.ibb.co/94zmNX2/IMG-20230709-WA0722.jpg": ["ادوارد"],
  "https://i.ibb.co/kSVwt4R/IMG-20230709-WA0724.jpg": ["زاراكي"],
  "https://i.ibb.co/0h7qkB0/IMG-20230709-WA0725.jpg": ["شين", "نيموتو"],
  "https://i.ibb.co/6rpLCgf/IMG-20230709-WA0728.jpg": ["ايكيشي"],
  "https://i.ibb.co/8090RyY/IMG-20230709-WA0730.jpg": ["فيفي"],
  "https://i.ibb.co/YLCHGbT/IMG-20230709-WA0732.jpg": ["نيتش"],
  "https://i.ibb.co/7YxdVJk/IMG-20230709-WA0734.jpg": ["روي"],
  "https://i.ibb.co/YpTzgPM/IMG-20230709-WA0735.jpg": ["دابي"],
  "https://i.ibb.co/xhY0yWg/IMG-20230709-WA0739.jpg": ["غاتس"],
  "https://i.ibb.co/MPN5Fyn/IMG-20230709-WA0740.jpg": ["كاغويا"],
  "https://i.ibb.co/SwvQZfV/IMG-20230709-WA0741.jpg": ["بيكاتشو"],
  "https://i.ibb.co/sHWL7dD/IMG-20230709-WA0742.jpg": ["ياماتو"],
  "https://i.ibb.co/TrFcN6S/IMG-20230709-WA0747.jpg": ["غوهان"],
  "https://i.ibb.co/j65dVH5/IMG-20230709-WA0750.jpg": ["كامينا"],
  "https://i.ibb.co/HVnnStN/IMG-20230709-WA0751.jpg": ["يوجيرو"],
  "https://i.ibb.co/t4gg1gd/IMG-20230709-WA0753.jpg": ["لاو"],
  "https://i.ibb.co/sb026LV/IMG-20230709-WA0757.jpg": ["توتا","ماتسودا"],
  "https://i.ibb.co/SmPWG1n/IMG-20230709-WA0758.jpg": ["مستر ٢","مستر 2"],
  "https://i.ibb.co/TRBL385/IMG-20230709-WA0759.jpg": ["لايت", "كيرا"],
  "https://i.ibb.co/5GB0mLp/IMG-20230709-WA0760.jpg": ["اندرويد17"],
  "https://i.ibb.co/kHQL2F7/IMG-20230709-WA0763.jpg": ["جازيل"],
  "https://i.ibb.co/PDKvSPW/IMG-20230709-WA0766.jpg": ["بيكولو"],
  "https://i.ibb.co/wRpmCzQ/IMG-20230709-WA0767.jpg": ["هيديري"],
  "https://i.ibb.co/pvgTJ2r/IMG-20230709-WA0768.jpg": ["ليفاي"],
  "https://i.ibb.co/sPyVMf0/IMG-20230709-WA0771.jpg": ["ساكورا"],
  "https://i.ibb.co/t4q7NgJ/IMG-20230709-WA0772.jpg": ["فيديل"],
  "https://i.ibb.co/TrcN7TC/IMG-20230709-WA0773.jpg": ["جوتارو"],
  "https://i.ibb.co/WGKH0Yg/IMG-20230709-WA0775.jpg": ["تشيتاندا"],
  "https://i.ibb.co/pf7QXYL/IMG-20230709-WA0776.jpg": ["موراساكيبارا"],
  "https://i.ibb.co/ZgFvKkr/IMG-20230709-WA0779.jpg": ["ايزايا"],
  "https://i.ibb.co/PwF8SSr/IMG-20230709-WA0780.jpg": ["هياكيمارو"],
  "https://i.ibb.co/4V2yYgn/IMG-20230709-WA0783.jpg": ["غوكو"],
  "https://i.ibb.co/T4DGydT/IMG-20230709-WA0784.jpg": ["لايت", "كيرا"],
  "https://i.ibb.co/9cR2g15/IMG-20230709-WA0785.jpg": ["غارو"],
  "https://i.ibb.co/ykmWzdq/IMG-20230709-WA0786.jpg": ["ترانكس"],
  "https://i.ibb.co/nLY4XNz/IMG-20230709-WA0788.jpg": ["غيوتارو"],
  "https://i.ibb.co/FqCJkpG/IMG-20230709-WA0789.jpg": ["مادارا"],
  "https://i.ibb.co/v1bZGgz/IMG-20230709-WA0790.jpg": ["سيشومارو"],
  "https://i.ibb.co/2FB6jzS/IMG-20230709-WA0791.jpg": ["افيليو", "برونو"],
  "https://i.ibb.co/WyppfVC/IMG-20230709-WA0799.jpg": ["كيريتسوجو"],
  "https://i.ibb.co/VWqj6qw/IMG-20230709-WA0800.jpg": ["كورابيكا"],
  "https://i.ibb.co/SQTtY9d/IMG-20230709-WA0803.jpg": ["هاتشيمان", "هيكي"],
  "https://i.ibb.co/7y8DdRV/IMG-20230709-WA0804.jpg": ["تايجا"],
  "https://i.ibb.co/XsXM1Rs/IMG-20230709-WA0815.jpg": ["كاغياما"],
  "https://i.ibb.co/T4584ZV/IMG-20230709-WA1095.jpg": ["تاكيميتشي"],
  "https://i.ibb.co/Yfc12Bc/IMG-20230709-WA1146.jpg": ["فوشيغورو", "ميغومي"],
  "https://i.ibb.co/61fQPWP/IMG-20230709-WA1147.jpg": ["نيزوكو"],
  "https://i.ibb.co/RSd90pj/IMG-20230710-WA0011.jpg": ["لبون","لابون"],
  "https://i.ibb.co/hgHJkB7/IMG-20230710-WA0079.jpg": ["يامي", "استا"],
  "https://i.ibb.co/GtrTXwz/IMG-20230710-WA0226.jpg": ["توكيتو"],
  "https://i.ibb.co/5216RF8/IMG-20230710-WA0246.jpg": ["اينوسكي"],
  "https://i.ibb.co/zsmr9Kt/IMG-20230710-WA0260.jpg": ["بياكويا"],
  "https://i.ibb.co/6Pmk3GT/IMG-20230710-WA0261.jpg": ["هيتسوغايا", "توشيرو"],
  "https://i.ibb.co/X4t6WNT/IMG-20230710-WA0273.jpg": ["زورو", "لوفي"],
  "https://i.ibb.co/2yxQ88m/IMG-20230710-WA0281.jpg": ["روبين"],
  "https://i.ibb.co/DLBvqz2/IMG-20230710-WA0282.jpg": ["روبن", "روبين"],
  "https://i.ibb.co/YfNZPTQ/IMG-20230710-WA0285.jpg": ["فوشيغورو", "ميغومي"],
  "https://i.ibb.co/dL9bLJV/IMG-20230710-WA0294.jpg": ["كيندو"],
  "https://i.ibb.co/54XTnz8/IMG-20230710-WA0296.jpg": ["ستاين"],
  "https://i.ibb.co/8NJM93S/IMG-20230710-WA0297.jpg": ["اوراراكا"],
  "https://i.ibb.co/2c0qb1p/IMG-20230710-WA0303.jpg": ["كاتارينا"],
  "https://i.ibb.co/4RLMsdq/IMG-20230710-WA0304.jpg": ["بياكويا"],
  "https://i.ibb.co/PjZfSFq/IMG-20230710-WA0306.jpg": ["شوتو", "تودوروكي"],
  "https://i.ibb.co/jbTtW5G/IMG-20230710-WA0307.jpg": ["رايزل", "كاديس"],
  "https://i.ibb.co/wNcpthz/IMG-20230710-WA0309.jpg": ["سيبر"],
  "https://i.ibb.co/X5jXMSG/IMG-20230710-WA0314.jpg": ["ليدي"],
  "https://i.ibb.co/PGWbhG0/IMG-20230710-WA0315.jpg": ["كرلين", "كوريرين"],
  "https://i.ibb.co/PZckg88/IMG-20230710-WA0316.jpg": ["اكازا"],
  "https://i.ibb.co/CJXWbmN/IMG-20230710-WA0317.jpg": ["اوسوب"],
  "https://i.ibb.co/jGHVhwc/IMG-20230710-WA0318.jpg": ["هيسوكا"],
  "https://i.ibb.co/Zzd0f4d/IMG-20230710-WA0364.jpg": ["تانجيرو"],
  "https://i.ibb.co/Qftq4pM/IMG-20230710-WA0366.jpg": ["ناغي"],
  "https://i.ibb.co/wRXW3F3/IMG-20230710-WA0367.jpg": ["لوفي"],
  "https://i.ibb.co/5jWdynz/IMG-20230710-WA0368.jpg": ["ميغومي", "فوشيغورو"],
  "https://i.ibb.co/4FjxP9H/IMG-20230710-WA0369.jpg": ["فيجيتا"],
  "https://i.ibb.co/NsdYLLZ/IMG-20230710-WA0370.jpg": ["غوهان", "جوهان"],
  "https://i.ibb.co/2hy9q4g/IMG-20230710-WA0371.jpg": ["دازاي"],
  "https://i.ibb.co/xLN9vrM/IMG-20230710-WA0372.jpg": ["اكازا"],
  "https://i.ibb.co/nbsYhrt/IMG-20230710-WA0373.jpg": ["دوما"],
  "https://i.ibb.co/Vm78yVW/IMG-20230710-WA0374.jpg": ["ايانوكوجي"],
  "https://i.ibb.co/tZ7M5fh/IMG-20230710-WA0375.jpg": ["توكيتو"],
  "https://i.ibb.co/dmfHkrV/IMG-20230710-WA0379.jpg": ["شويا", "ايشيدا", "ايتشيدا"],
  "https://i.ibb.co/s2cpTgX/IMG-20230710-WA0380.jpg": ["فيتان"],
  "https://i.ibb.co/DQTs1Bz/IMG-20230710-WA0381.jpg": ["انيا"],
  "https://i.ibb.co/k4mh19y/IMG-20230710-WA0382.jpg": ["غيو"],
  "https://i.ibb.co/mH5GY9D/IMG-20230710-WA0383.jpg": ["غيو", "توميوكا"],
  "https://i.ibb.co/Nm0wpBm/IMG-20230710-WA0384.jpg": ["يوتا"],
  "https://i.ibb.co/Jr2Jm0B/IMG-20230710-WA0385.jpg": ["اوتو اي"],
  "https://i.ibb.co/CKYZFd7/IMG-20230710-WA0386.jpg": ["نوبارا"],
  "https://i.ibb.co/b1yVNns/IMG-20230710-WA0387.jpg": ["تنغن"],
  "https://i.ibb.co/0f3cY3Q/IMG-20230710-WA0388.jpg": ["دينجي"],
  "https://i.ibb.co/SVD5BPV/IMG-20230710-WA0389.jpg": ["سانجي"],
  "https://i.ibb.co/VNnDMgd/IMG-20230710-WA0390.jpg": ["راي"],
  "https://i.ibb.co/q969SCZ/IMG-20230710-WA0391.jpg": ["كانيكي"],
  "https://i.ibb.co/84hGrm3/IMG-20230710-WA0392.jpg": ["شينوبو"],
  "https://i.ibb.co/G5xh3Mn/IMG-20230710-WA0439.jpg": ["ماتسودا"],
  "https://i.ibb.co/0VDVcw9/IMG-20230710-WA0469.jpg": ["ليلي"],
  "https://i.ibb.co/7gTSFFX/IMG-20230710-WA0472.jpg": ["كينغ"],
  "https://i.ibb.co/1ZZg9DD/IMG-20230710-WA0473.jpg": ["برولي"],
  "https://i.ibb.co/DRzztHh/IMG-20230710-WA0475.jpg": ["ويليام"],
  "https://i.ibb.co/LdKGXL9/IMG-20230710-WA0476.jpg": ["راينر"],
  "https://i.ibb.co/Wssyc9h/IMG-20230710-WA0477.jpg": ["بيدرو"],
  "https://i.ibb.co/FKGbFRb/IMG-20230710-WA0478.jpg": ["غابي"],
  "https://i.ibb.co/Pr7DtDj/IMG-20230710-WA0479.jpg": ["شالنارك"],
  "https://i.ibb.co/LnZpYJJ/IMG-20230710-WA0480.jpg": ["نوجيكو"],
  "https://i.ibb.co/yWMQWVw/IMG-20230710-WA0482.jpg": ["هابي"],
  "https://i.ibb.co/hVydQM3/IMG-20230710-WA0483.jpg": ["كونان"],
  "https://i.ibb.co/WGJ2CRM/IMG-20230710-WA0487.jpg": ["سوكونا"],
  "https://i.ibb.co/nrQ4Mxy/IMG-20230710-WA0488.jpg": ["اشيلاد"],
  "https://i.ibb.co/qrLRs2C/IMG-20230710-WA0490.jpg": ["ناغيسا"],
  "https://i.ibb.co/KjpYNXS/IMG-20230710-WA0724.jpg": ["توموي"],
  "https://i.ibb.co/2sFCvGd/IMG-20230710-WA0725.jpg": ["ايزن"],
  "https://i.ibb.co/HVDX2kx/IMG-20230710-WA0727.jpg": ["ايس"],
  "https://i.ibb.co/h1R7Xvk/IMG-20230710-WA0752.jpg": ["كرولو", "لوسيلفر"],
  "https://i.ibb.co/S5DKzDP/IMG-20230710-WA0805.jpg": ["اكيرا"],
  "https://i.ibb.co/djDWHRh/IMG-20230710-WA0818.jpg": ["هيسوكا"],
  "https://i.ibb.co/1zfCgKq/IMG-20230710-WA0819.jpg": ["استا"],
  "https://i.ibb.co/W3WD5Sn/IMG-20230710-WA0820.jpg": ["فايوليت"],
  "https://i.ibb.co/fQTVTsj/IMG-20230710-WA0821.jpg": ["ديكو", "ميدوريا"],
  "https://i.ibb.co/2hL2v0x/IMG-20230710-WA0823.jpg": ["هاك"],
  "https://i.ibb.co/hVRXNcd/IMG-20230710-WA0824.jpg": ["تنغن"],
  "https://i.ibb.co/YWJcVFD/IMG-20230710-WA0825.jpg": ["ايري"],
  "https://i.ibb.co/XttH9K6/IMG-20230710-WA0826.jpg": ["يويتشي"],
  "https://i.ibb.co/b5XQdZh/IMG-20230710-WA0827.jpg": ["تانجيرو"],
  "https://i.ibb.co/Ky13pMq/IMG-20230710-WA0829.jpg": ["تشيفويو"],
  "https://i.ibb.co/CnPgbxN/IMG-20230710-WA0830.jpg": ["ايتوشي"],
  "https://i.ibb.co/NCRP3k8/IMG-20230710-WA0831.jpg": ["جيرايا"],
  "https://i.ibb.co/pKCDK5H/IMG-20230710-WA0833.jpg": ["ليفاي"],
  "https://i.ibb.co/djPkH6T/IMG-20230710-WA0837.jpg": ["لوفي"],
  "https://i.ibb.co/smK2NSt/IMG-20230710-WA0838.jpg": ["شيجاراكي", "شيغاراكي"],
  "https://i.ibb.co/L9tZDp1/IMG-20230710-WA0839.jpg": ["توغا"],
  "https://i.ibb.co/SxfbTYN/IMG-20230710-WA0840.jpg": ["كيلوا"],
  "https://i.ibb.co/kKqdPGF/IMG-20230710-WA0843.jpg": ["غوجو"],
  "https://i.ibb.co/bPVHRGx/IMG-20230710-WA0845.jpg": ["باتشيرا"],
  "https://i.ibb.co/YD2LzG1/IMG-20230710-WA0846.jpg": ["اوراراكا"],
  "https://i.ibb.co/nz0K5gr/IMG-20230710-WA0847.jpg": ["فيجيتا"],
  "https://i.ibb.co/f2YXgY9/IMG-20230710-WA0848.jpg": ["اوتو اي"],
  "https://i.ibb.co/pfJSpMh/IMG-20230710-WA0849.jpg": ["ايس"],
  "https://i.ibb.co/LvpMXkP/IMG-20230710-WA0850.jpg": ["ايتاتشي"],
  "https://i.ibb.co/M5dBwMT/IMG-20230710-WA0851.jpg": ["ايرين"],
  "https://i.ibb.co/kHTZ53B/IMG-20230710-WA0852.jpg": ["كاكاشي"],
  "https://i.ibb.co/jrZGmRt/IMG-20230710-WA0854.jpg": ["روكيا", "ايتشيغو"],
  "https://i.ibb.co/tXZR7qc/IMG-20230710-WA0855.jpg": ["هيماواري"],
  "https://i.ibb.co/HVZ7sv9/IMG-20230710-WA0856.jpg": ["موساشي"],
  "https://i.ibb.co/5LwQ9yZ/IMG-20230710-WA0857.jpg": ["ميكاسا"],
  "https://i.ibb.co/cXJQ1V2/IMG-20230710-WA0858.jpg": ["دازاي"],
  "https://i.ibb.co/KD02hQD/IMG-20230710-WA0859.jpg": ["هانما"],
  "https://i.ibb.co/Fw3xYb7/IMG-20230710-WA0860.jpg": ["شيزوكو"],
  "https://i.ibb.co/znR2ZTw/IMG-20230710-WA0862.jpg": ["ميسا"],
  "https://i.ibb.co/zbggXKt/IMG-20230710-WA0868.jpg": ["ايتشيغو"],
  "https://i.ibb.co/R9ybFRm/IMG-20230710-WA1015.jpg": ["سنايبر"],
  "https://i.ibb.co/12kMsQS/IMG-20230710-WA1021.jpg": ["دابي"],
  "https://i.ibb.co/w0Y602d/IMG-20230710-WA1023.jpg": ["توجي"],
  "https://i.ibb.co/SNwNtqb/IMG-20230710-WA1029.jpg": ["ساسوري"],
  "https://i.ibb.co/3S5QMzk/IMG-20230710-WA1042.jpg": ["ايرين"],
  "https://i.ibb.co/pj6Gf9w/IMG-20230710-WA1043.jpg": ["فوشيغورو", "ميغومي"],
  "https://i.ibb.co/Chrrt9T/IMG-20230712-WA0162.jpg": ["ماش", "ماشلي"],
  "https://i.ibb.co/Cm8M3fK/IMG-20230712-WA0165.jpg": ["يوهان"],
  "https://i.ibb.co/LRtCNHT/IMG-20230712-WA0166.jpg": ["غيو", "توميوكا"],
  "https://i.ibb.co/0yXj6cV/IMG-20230712-WA0167.jpg": ["كيلوا"],
  "https://i.ibb.co/3RHrZ9j/IMG-20230712-WA0168.jpg": ["اينوماكي", "توغي"],
  "https://i.ibb.co/dpY3jdP/IMG-20230712-WA0169.jpg": ["هيسوكا"],
  "https://i.ibb.co/6WLt1zz/IMG-20230712-WA0170.jpg": ["انيا"],
  "https://i.ibb.co/rxtgpSm/IMG-20230712-WA0171.jpg": ["ناخت"],
  "https://i.ibb.co/gjLmsN1/IMG-20230712-WA0172.jpg": ["ايتاتشي"],
  "https://i.ibb.co/q167LLy/IMG-20230712-WA0174.jpg": ["ماش", "ماشلي"],
  "https://i.ibb.co/1LhtstD/IMG-20230712-WA0175.jpg": ["شوتو"],
  "https://i.ibb.co/M6BnfwV/IMG-20230712-WA0177.jpg": ["ماتسودا"],
  "https://i.ibb.co/CJJ2pvg/IMG-20230712-WA0178.jpg": ["لوفي"],
  "https://i.ibb.co/6wxJZZ6/IMG-20230712-WA0179.jpg": ["ماري"],
  "https://i.ibb.co/FJTCWNk/IMG-20230712-WA0180.jpg": ["شيسوي"],
  "https://i.ibb.co/DQvKr3G/IMG-20230712-WA0181.jpg": ["دازاي"],
  "https://i.ibb.co/V9PsGL6/IMG-20230712-WA0182.jpg": ["رينغوكو"],
  "https://i.ibb.co/8b2Qm0F/IMG-20230712-WA0184.jpg": ["سوكونا"],
  "https://i.ibb.co/QXMnsBD/IMG-20230712-WA0185.jpg": ["روبي"],
  "https://i.ibb.co/mC871WR/IMG-20230712-WA0186.jpg": ["غوكو"],
  "https://i.ibb.co/MnvnzHD/IMG-20230712-WA0187.jpg": ["ارثر"],
  "https://i.ibb.co/8Y3Dkdj/IMG-20230712-WA0188.jpg": ["ميكاسا"],
  "https://i.ibb.co/80VCqWj/IMG-20230712-WA0189.jpg": ["شينوبو"],
  "https://i.ibb.co/tCmJs3b/IMG-20230712-WA0190.jpg": ["جيرايا"],
  "https://i.ibb.co/12SWJBG/IMG-20230712-WA0191.jpg": ["ياماتو"],
  "https://i.ibb.co/hWjLqHX/IMG-20230712-WA0192.jpg": ["سينكو"],
  "https://i.ibb.co/rkTPgCW/IMG-20230712-WA0193.jpg": ["نامي"],
  "https://i.ibb.co/XtkXNqk/IMG-20230712-WA0194.jpg": ["استا"],
  "https://i.ibb.co/TwqmDWt/IMG-20230712-WA0195.jpg": ["غيتو"],
  "https://i.ibb.co/y4JYV9x/IMG-20230712-WA0196.jpg": ["غوجو", "نوبارا"],
  "https://i.ibb.co/kBQSs9b/IMG-20230712-WA0197.jpg": ["زورو"],
  "https://i.ibb.co/L5dPcy0/IMG-20230712-WA0199.jpg": ["اكازا"],
  "https://i.ibb.co/MspLgvD/IMG-20230712-WA0200.jpg": ["سانجي"],
  "https://i.ibb.co/brpdL5y/IMG-20230712-WA0201.jpg": ["زينيتسو"],
  "https://i.ibb.co/grVpQr9/IMG-20230712-WA0202.jpg": ["ايانوكوجي"],
  "https://i.ibb.co/5FpnThj/IMG-20230712-WA0203.jpg": ["روجر"],
  "https://i.ibb.co/3NNPPH4/IMG-20230712-WA0204.jpg": ["ايساغي"],
  "https://i.ibb.co/tY399K2/IMG-20230712-WA0205.jpg": ["ماكيما"],
  "https://i.ibb.co/RH60315/IMG-20230712-WA0206.jpg": ["هيناتا"],
  "https://i.ibb.co/HTQdHNq/IMG-20230712-WA0207.jpg": ["توكيتو"],
  "https://i.ibb.co/QQQm7DJ/IMG-20230712-WA0209.jpg": ["دوفلامينغو", " دوفي"],
  "https://i.ibb.co/NLyvHvw/IMG-20230712-WA0210.jpg": ["يوجي", "ايتادوري"],
  "https://i.ibb.co/RpMqNLb/IMG-20230712-WA0211.jpg": ["غريفيث"],
  "https://i.ibb.co/LnBLYgy/IMG-20230712-WA0212.jpg": ["ايما"],
  "https://i.ibb.co/r3g4Q4m/IMG-20230712-WA0213.jpg": ["ساكورا"],
  "https://i.ibb.co/tDcSVWv/IMG-20230712-WA0214.jpg": ["باتشيرا"],
  "https://i.ibb.co/jLBV7w1/IMG-20230712-WA0215.jpg": ["ناتسو"],
  "https://i.ibb.co/wyCh0Zh/IMG-20230712-WA0216.jpg": ["ميكو"],
  "https://i.ibb.co/QcJ6Bvw/IMG-20230712-WA0217.jpg": ["كوكوشيبو"],
  "https://i.ibb.co/x7v1hqs/IMG-20230712-WA0218.jpg": ["يونو"],
  "https://i.ibb.co/7bLVYSj/IMG-20230712-WA0219.jpg": ["ريكا"],
  "https://i.ibb.co/JkQDdhF/IMG-20230712-WA0220.jpg": ["يور"],
  "https://i.ibb.co/Xb354JP/IMG-20230712-WA0221.jpg": ["يوريتشي"],
  "https://i.ibb.co/86PBtQZ/IMG-20230712-WA0223.jpg": ["توجي"],
  "https://i.ibb.co/XzhGK4R/IMG-20230712-WA0224.jpg": ["نيزوكو"],
  "https://i.ibb.co/7RPbZvM/IMG-20230712-WA0225.jpg": ["بيغ مام"],
  "https://i.ibb.co/thPBQ2t/IMG-20230712-WA0226.jpg": ["كاجومي"],
  "https://i.ibb.co/ck1g21J/IMG-20230712-WA0227.jpg": ["لاو"],
  "https://i.ibb.co/db6NYFR/IMG-20230712-WA0228.jpg": ["راينر"],
  "https://i.ibb.co/bN03vd2/IMG-20230712-WA0229.jpg": ["ريم"],
  "https://i.ibb.co/9vVY9hq/IMG-20230712-WA0230.jpg": ["ميساكي"],
  "https://i.ibb.co/KsfzmNr/IMG-20230712-WA0231.jpg": ["اسكانور"],
  "https://i.ibb.co/jVXygg4/IMG-20230712-WA0232.jpg": ["اينوسكي"],
  "https://i.ibb.co/sHvptxn/IMG-20230712-WA0233.jpg": ["غيتو"],
  "https://i.ibb.co/ZMq9nH6/IMG-20230712-WA0234.jpg": ["اشيلاد"],
  "https://i.ibb.co/yYrwvMH/IMG-20230712-WA0236.jpg": ["توكيتو"],
  "https://i.ibb.co/C2K8vth/IMG-20230712-WA0237.jpg": ["ليفاي"],
  "https://i.ibb.co/dcStCpH/IMG-20230712-WA0238.jpg": ["زاك"],
  "https://i.ibb.co/tq2WdFC/IMG-20230712-WA0239.jpg": ["لوفي"],
  "https://i.ibb.co/9wzTmjH/IMG-20230712-WA0240.jpg": ["سينكو"],
  "https://i.ibb.co/RvRn9sH/IMG-20230712-WA0241.jpg": ["اكامي"],
  "https://i.ibb.co/W2dgRQd/IMG-20230712-WA0242.jpg": ["هوتاو"],
  "https://i.ibb.co/qnvwYLM/IMG-20230712-WA0243.jpg": ["يونا", "هاك"],
  "https://i.ibb.co/G2YN4mT/IMG-20230712-WA0244.jpg": ["ليوريو"],
  "https://i.ibb.co/n10LRXG/IMG-20230712-WA0245.jpg": ["كاكاشي"],
  "https://i.ibb.co/HnD561w/IMG-20230712-WA0246.jpg": ["غون"],
  "https://i.ibb.co/wBFxdGS/IMG-20230712-WA0247.jpg": ["كاكاشي"],
  "https://i.ibb.co/hZgnDDy/IMG-20230712-WA0248.jpg": ["توغا"],
  "https://i.ibb.co/crhTfpz/IMG-20230712-WA0249.jpg": ["غوجو"],
  "https://i.ibb.co/LtfRGZ0/IMG-20230712-WA0250.jpg": ["نويل"],
  "https://i.ibb.co/BGtD6sg/IMG-20230712-WA0251.jpg": ["هانجي"],
  "https://i.ibb.co/mGdxq5P/IMG-20230712-WA0252.jpg": ["موزان"],
};

let ImageQuizGameData = {};

cmd({
  pattern: 'صورة',
  filename: __filename
}, async (message, match, group) => {
  if (ImageQuizGameData[match.chat]) {
    return await message.sendMessage(match.chat, {
      text: `*هناك لعبة جارية بالفعل!*`,
    });
  }

  let gameData = await startImageQuiz(message, match);
  ImageQuizGameData[match.chat] = gameData;
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const gameData = ImageQuizGameData[match.chat];

  if (!gameData) return;

  if (gameData.id === match.chat && gameData.preAns !== match.text && !match.isBaileys) {
    gameData.preAns = match.text;

    const correctAnswers = footbal[gameData.question];
    const userAnswer = match.text.trim();

    if (correctAnswers.some(ans => ans.toLowerCase() === userAnswer.toLowerCase())) {
      addPointToParticipant(message, match, gameData, match.sender);
      await sendNewImage(message, match, gameData);
    }
  }
});

cmd({
  pattern: 'stop',
  filename: __filename
}, async (message, citel, group) => {
  const id = citel.chat.split("@")[0];
  const gameData = ImageQuizGameData[citel.chat];

  if (!gameData || !gameData.participants) {
    return await message.sendMessage(citel.chat, {
      text: `*لا يوجد لعبة جارية حاليا!*`,
    });
  }

  let results = 'نتائج اللعبة :\n\n';

  for (const participantId in gameData.participants) {
    const points = gameData.participants[participantId];
    const registeredUser = await sck1.findOne({ id: participantId });
    const playerName = registeredUser ? registeredUser.name : "دون لقب";

    results += `${playerName}  برصيد ${points} إجابات\n`;
  }

  await message.sendMessage(citel.chat, {
    text: results,
  });

  delete ImageQuizGameData[citel.chat];
});

async function startImageQuiz(message, match) {
  const footbalKeys = Object.keys(footbal);
  const randomImageURL = footbalKeys[Math.floor(Math.random() * footbalKeys.length)];
  const correctAnswers = footbal[randomImageURL];

  await message.sendMessage(match.chat, {
    image: { url: randomImageURL },
    caption: `*بدأت لعبة الصور*`,
  });

  return {
    id: match.chat,
    question: randomImageURL,
    answers: correctAnswers,
    participants: {}, // Store participants' points
    preAns: '',
  };
}

async function addPointToParticipant(message, match, gameData, participantId) {
  if (!gameData.participants[participantId]) {
    gameData.participants[participantId] = 0;
  }

  gameData.participants[participantId] += 1;

  await message.sendMessage(match.chat, {
    text: `*إجابة صحيحة!*\n\n@${participantId.split('@')[0]} حصلت على نقطة جديدة`,
    mentions: [participantId],
  });
}

async function sendNewImage(message, match, gameData) {
  const footbalKeys = Object.keys(footbal).filter(url => url !== gameData.question);
  const randomImageURL = footbalKeys[Math.floor(Math.random() * footbalKeys.length)];
  const correctAnswers = footbal[randomImageURL];

  await message.sendMessage(match.chat, {
    image: { url: randomImageURL },
    caption: `*هنا صورة جديدة!*`,
  });

  gameData.question = randomImageURL;
  gameData.answers = correctAnswers;
  gameData.preAns = '';
}


cmd({
  pattern: 'who',
  filename: __filename
}, async (message, match, group) => {
  const gameData = ImageQuizGameData[match.chat];

  if (!gameData) {
    return await message.sendMessage(match.chat, {
      text: `*لا يوجد لعبة جارية حاليا!*`,
    });
  }

  const correctAnswers = footbal[gameData.question];
  const answersString = `*إجابة الصورة الحالية*: ${correctAnswers.join(', ')}`;

  await message.sendMessage(match.chat, {
    text: answersString,
  });
});
