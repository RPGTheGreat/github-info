# Userinfo-Github

The package help you to get a github user info and etc

![Userinfo-Github](https://nodei.co/npm/userinfo-github.png)

## How to install?

`npm i userinfo-github`

# Feature

- User Friendly

- Easy To Use

- Already Embeded 

- Easy Functions

# Example

## DISCORD.JS
```js
const Discord = require("discord.js");
const client = new Discord.Client()
const { Info } = require("userinfo-github") //required module
const github = new Info(); // new info


client.on("ready", () => {
  console.log("Im on!")
})

client.on("message", async message => {
  if(message.content === "!info") {
  let info =  await github.fetchInfo("RPGTheGreat")
    message.channel.send(info) 
  }
})
```

## ERIS
```js
const Eris = require("eris")
const client = new Eris("token")
const { Info } = require("userinfo-github")
const github = new Info()

client.on("messageCreate", async msg => {
  if(msg.content === "!info") {
    let info = await github.getInfo("RPGTheGreat")
    msg.createMessage(msg.channel.id, info)
```

# Events

`error` - Returns error when error on response

# Links

- **[Github](https://github.com/RPGTheGreat/github-info)**

- **[Discord](https://discord.gg/yqAGXbz)**