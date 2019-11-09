const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();

//enter token of your burner account. this account will be the one joining the servers
const token = '';

//enter the token of your account that has access to viewing the channel were discord invites will be
const main = '';

//enter ids of channels that discord invites will appear in. seperate each id by a comma. these should be strings
const invite_channels = [''];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (invite_channels.includes(message.channel.id) && msg.content.includes('discord.gg')){
    var code = msg.content.split('.gg/')[1];
    var options = {
      url: `https://discordapp.com/api/v6/invites/${code}`,
      headers: {
        'Authorization': token
      }
    };
    request.post(options);
  }
});

client.login(main);
