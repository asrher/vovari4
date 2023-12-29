const { pinterest, cmd } = require('../lib')
const { MessageType } = require("@sampandey001/baileys");
const axios = require('axios')

//=====================================================================

cmd({
pattern: "بنتر",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!text) return reply("اكتب عن وش تبحث بالانجليزي.") && Void.sendMessage(citel.chat, {
        react: {
            text: '❌',
            key: citel.key
        }
    })
    try {
        anu = await pinterest(text)
        result = anu[Math.floor(Math.random() * anu.length)]
        let buttonMessage = {
            image: {
                url: result
            },
           
        }
        return Void.sendMessage(citel.chat, buttonMessage, {
            quoted: citel
        })
    } catch (e) {
        console.log(e)
    }
})

//=====================================================================

cmd({
pattern: "قطط",
desc: "البوت يرسل صور قطط",
use: '',
category: "pic",
filename: __filename,
  },
async (Void, citel) => {
 try {
   const response = await axios.get("https://api.thecatapi.com/v1/images/search");
   const imageUrl = response.data[0].url;
   await Void.sendMessage(citel.chat, {image: { url: imageUrl }}, { quoted: citel });
 } catch (error) {
   console.error(error);
   await citel.reply("خطأ");
 }
});

//=====================================================================

cmd({
pattern: "حيوانات",
desc: "البوت يرسل صور حيوانات",
use: '',
category: "pic",
filename: __filename,
  },
async (Void, citel) => {
 try {
   const response = await axios.get("https://api.unsplash.com/photos/random", {
     params: {
       query: "animals",
       client_id: "xAxA4SsnCLw9WA7pnxiR3D8LbgMUSQ8N8UEx2wtYsg4",
     },
   });
   const imageUrl = response.data.urls.regular;
   await Void.sendMessage(citel.chat, {image: { url: imageUrl }}, { quoted: citel });
 } catch (error) {
   console.error(error);
   await message.client.sendMessage(message.jid, "خطأ", MessageType.text);
 }
});

//=====================================================================
/*
cmd({
pattern: "بوكيمون",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel) => {
 try {
   const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118");
   const randomPokemonIndex = Math.floor(Math.random() * response.data.results.length);
   const randomPokemonUrl = response.data.results[randomPokemonIndex].url;
   const pokemonResponse = await axios.get(randomPokemonUrl);
   const pokemonName = pokemonResponse.data.name;
   const pokemonImageUrl = pokemonResponse.data.sprites.other["official-artwork"].front_default;
   const pokemonStats = pokemonResponse.data.stats;
   const pokemonLevel = Math.floor(Math.random() * 100) + 1;
   const pokemonPower = pokemonStats.reduce((total, stat) => total + stat.base_stat, 0);
   await Void.sendMessage(citel.chat, {
     image: { url: pokemonImageUrl },
     caption: `الاسم: ${pokemonName}!\n\nالمستوى: ${pokemonLevel}\nالقوة: ${pokemonPower}`
   }, { quoted: citel });
 } catch (error) {
   console.error(error);
   await citel.reply("خطأ");
 }
});*/

//=====================================================================



