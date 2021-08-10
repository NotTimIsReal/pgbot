const Discord=require('discord.js')
const Client=new Discord.Client()
const fs=require('fs')
require('dotenv').config()
let env=process.env
const config=require('./botconfig/config.json')
client.login(env.TOKEN)