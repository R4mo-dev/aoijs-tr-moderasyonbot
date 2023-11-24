const { AoiClient } = require("aoi.js-tr");
// Bot
const client = new AoiClient({
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    prefix: "PREFİX",
    token: "DISCORD BOT TOKEN",
        database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});
// Bot durum
client.status({
  name: "Discord",
  type: "PLAYING",
  status: "online",
  time: 12,
});

// 7/24 aktif tutmak için web server (replit vb içindir onun dışı aktif tutmalarda vsc, vds vb de kaldirabilirsiniz)
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Web Server Başladı.'));

app.listen(port, () =>
    console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
);
// Command Handler
client.loadCommands("./komutlar/", true);
