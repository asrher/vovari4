// Import necessary modules and functions
const { cmd, getAdmin, tlang } = require("../lib/");
const axios = require('axios');
const cheerio = require('cheerio');
const PDFDocument = require('pdfkit');
const { PassThrough } = require('stream');

// Define the search3asq function
async function search3asq(q) {
    try {
        const { data } = await axios.get(`https://3asq.org/?s=${q}&post_type=wp-manga`);
        const $ = cheerio.load(data);

        return $('.tab-summary').map((index, element) => ({
            name: $(element).find('.post-title h3 a').text().trim(),
            link: $(element).find('.post-title h3 a').attr('href'),
            alternativeNames: $(element).find('.mg_alternative .summary-content').text().trim(),
            genres: $(element).find('.mg_genres .summary-content a').map((i, el) => $(el).text()).get().join(', ')
        })).get();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Define the getAllChapters function
async function getAllChapters(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        return $('.wp-manga-chapter').map((index, element) => ({
            title: $(element).text().trim(),
            link: $(element).find('a').attr('href'),
            releaseDate: $(element).find('.chapter-release-date i').text().trim(),
            views: $(element).find('.view').text().trim(),
        })).get();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Define the getChapterPdf function
async function getChapterPdf(url) {
    try {
        // ... (the existing code for generating PDF)
        // Returns a Promise with the generated PDF buffer
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Process the command
cmd({
    pattern: "nor",
    desc: "Fetch data from 3asq",
    category: "utility",
    handler: async (Void, citel, match) => {
        try {
            let [inputCommand, rest] = match;
            let [feature, inputs] = rest.split("|");
            
            let lister = [
                "search",
                "chapter",
                "pdf"
            ];

            if (!lister.includes(feature)) {
                return citel.reply("*Example:*\n.3asq search|vpn\n\n*Choose from available types:*\n" + lister.map((v, index) => "  ○ " + v).join("\n"));
            }

            switch (feature) {
                case "search":
                    if (!inputs) return citel.reply("Input query link\nExample: .3asq search|vpn");
                    try {
                        let res = await search3asq(inputs);
                        let teks = res.map((item, index) => {
                            return `- *Name:* ${item.name}\n- *Link:* ${item.link}`;
                        }).filter(v => v).join("\n\n________________________\n\n");
                        return citel.reply(teks);
                    } catch (e) {
                        console.error(e);
                        return citel.reply("An error occurred while searching.");
                    }
                    break;

                case "chapter":
                    if (!inputs) return citel.reply("Input query link\nExample: .3asq chapter|group");
                    try {
                        let res = await getAllChapters(inputs);
                        let teks = res.map((item, index) => {
                            return `- *Title:* ${item.title}\n- *Link:* ${item.link}`;
                        }).filter(v => v).join("\n\n________________________\n\n");
                        return citel.reply(teks);
                    } catch (e) {
                        console.error(e);
                        return citel.reply("An error occurred while fetching chapters.");
                    }
                    break;

                case "pdf":
                    if (!inputs) return citel.reply("Input query link\nExample: .3asq pdf|group");
                    try {
                        let data = await getChapterPdf(inputs);
                        // Send the generated PDF file as a reply
                        if (data) {
                            await Void.sendMessage(citel.chat, { document: data }, { quoted: citel });
                        } else {
                            return citel.reply("Failed to generate PDF.");
                        }
                    } catch (e) {
                        console.error(e);
                        return citel.reply("An error occurred while generating PDF.");
                    }
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.error(error);
            return citel.reply("An error occurred.");
        }
    }
});
