# Info

This package Help you to get a github user info

## How to install?

`npm i github-info`

## Example

```js
const Discord = new("discord.js");
const client = new Discord.Client()
const { Info } = require("userinfo-github")
const github = new Info();


client.on("ready", () => {
  console.log("Im on!")
})

client.on("message", async message => {
  if(message.content === "!info") {
    let info = await github.getInfo("RPGTheGreat")
    message.channel.send(info)
  }
})
```


**P.S 1 - If you have any bug report here [Github](https://github.com/RPGTheGreat/github-info)**

**P.S 2 - If you need help with anything join support server [Discord](https://discord.gg/yqAGXbz)**
