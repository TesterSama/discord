const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const prefix = process.env.prefix;
const token = process.env.token;


client.on("ready", () => {
 console.log("Ready to troll!");
 client.user.setActivity("-help", { type: "LISTENING" });
});

client.on("message", message => {
  
  const voice = message.member.voice.channel;
  
  if (message.content.startsWith("-p")) {
    if (!voice) {
      var no = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription("You have to be connected to a voice channel before you can use this command!");
      message.channel.send(no);
      return;
    }
    voice.join().then(connection => {
			const stream = ytdl('https://youtu.be/gvYfRiJQIX8', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voice.leave());
      
      setTimeout(function() {
        message.channel.send("**This fabulous TROLL was planned and structured by AK and SHISUI respectively**")
      }, 38000);
    });
  }
});



client.login(token);

  