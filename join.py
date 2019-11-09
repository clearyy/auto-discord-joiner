import asyncio
import discord
from discord.ext.commands import Bot
from discord.ext import commands
import requests

client = Bot('aiwdjiawd&&')
client.remove_command('help')

#enter ids of channels that discord invites will appear in. seperate each id by a comma. these should be ints
invite_channels = []

#enter token of your burner account. this account will be the one joining the servers
burner = ''

#enter the token of your account that has access to viewing the channel were discord invites will be
main = ''

@client.event
async def on_ready():
    print(str(client.user))

@client.event
async def on_message(message):
    if message.channel.id in invite_channels and 'discord.gg' in message.content:
        code = message.content.split('.gg/')[1]
        requests.post(f'https://discordapp.com/api/v6/invites/{code}',headers={"authorization": burner})

client.run(main,bot=False)