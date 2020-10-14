const fetch = require("node-fetch");
const moment = require("moment")

class Info {
  async getInfo(message, name) {
    
    if(!name) return message.channel.send("Name is not given");
    
  
    
    let main = await fetch("https://api.github.com/users/" + name);
    main = await main.json();
    
    if(!main) return message.channel.send("No Person found");
    
  
    let content = {
      embed: {
        color: "RANDOM",
        title: main.login,
        thumbnail:  main.avatar_url,
        fields: [
		{
			name: 'NAME',
			value: `${main.login}`,
		},
          
   {
     name: 'ID',
      value: `${main.id}`,
   },
          
          {
            name: 'BIO',
            value: `${main.bio || "NO BIO"}`
          },
          
          {
            name: 'REPOSITORY',
            value: `${main.public_repos || "NONE"}`
          },
          
          {
            name: 'FOLLOWERS',
            value: `${main.followers}`,
          },
          
          {
            name: 'FOLLOWING',
            value: `${main.following}`,
          },
          
          {
            name: 'LOCATION',
            value: `${main.location || "CAN'T FIND"}`,
          },
          
          {
            name: 'ACCOUNT CREATION',
            value: moment.utc(main.created_at).format("dddd, MMMM, Do YYYY")
          },
        
        
          ],
	
        
      }
    };

    return message.channel.send(content)
  }
}
  
  module.exports = Info;