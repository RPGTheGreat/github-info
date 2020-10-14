# Info

This package Help you to get a github user info

## How to install?

`npm i userinfo-github`

## Example

```js
const Discord = require("discord.js");//required module
const client = new Discord.Client()
const { Info } = require("userinfo-github") //required module
const github = new Info(); // new client


client.on("ready", () => {
  console.log("Im on!")
})

client.on("message", async message => {
  if(message.content === "!info") {
    let info = await github.getInfo(message, "RPGTheGreat") // message is required here
    message.channel.send(info)
  }
})
```
**P.S 1 - If you have any bug report here [Github](https://github.com/RPGTheGreat/github-info)**

**P.S 2 - If you need help with anything join support server [Discord](https://discord.gg/yqAGXbz)**