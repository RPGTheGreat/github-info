# Info

This package Help you to get a github user info

## How to install?

`npm i userinfo-github`

## Example

```js
const Discord = require("discord.js");//required module
const client = new Discord.Client()
const { Info } = require("userinfo-github") //required module
const github = new Info(); // new info


client.on("ready", () => {
  console.log("Im on!")
})

client.on("message", async message => {
  if(message.content === "!info") {
    github.getInfo(message, "RPGTheGreat") // message is required here
    //no need to do message.channel.send it's already an embed response
  }
})
```
**P.S 1 - If you have any bug report here [Github](https://github.com/RPGTheGreat/github-info)**

**P.S 2 - If you need help with anything join support server [Discord](https://discord.gg/yqAGXbz)**