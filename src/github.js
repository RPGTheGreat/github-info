const fetch = require("node-fetch");
const moment = require("moment")
const err = require('./error');
const EventEmitter = require("events");

class Info extends EventEmitter {
  async fetchInfo(name) {
    
    let args = {
      embed: {
        color: "RANDOM",
        title: "ERROR 404",
        description: "**Name was not given**"
      }
    };
    
    let error = {
      embed: {
        color: "RANDOM",
        title: "ERROR 404",
        description: "**No person found**"
      }
    }
    
    if(!name) return args
    
  
    
    let main = await fetch("https://api.github.com/users/" + name);
  main = await main.json();
    
    if(main.error) {
          this.emit('error', main.error);
        return undefined;
        }
    
    if(!main) return error
    
  
    let content = {
      embed: {
        color: "RANDOM",
        title: main.login,
        thumbnail:  main.avatar_url,
        fields: [
		{
			name: 'Name',
			value: `${main.login}`,
		},
          
          {
            name: "Type",
            value: `${main.type}`
          },
          
   {
     name: 'Id',
      value: `${main.id}`,
   },
          
          {
            name: 'Node ID',
            value: `${main.node_id}`,
          },
          
          {
            name: 'Bio',
            value: `${main.bio || "No Bio"}`
          },
          
          {
            name: "Twitter Username",
            value: `${main.twitter_username || "None"}`
          },
          
          {
            name: "Email",
            value: `${main.email || "None"}`
          },
          
          {
            name: "Company",
            value: `${main.company}`
          },
          
          {
            name: 'Repository',
            value: `${main.public_repos || "None"}`
          },
          
          {
            name: "Gist",
            value: `${main.public_gists || "None"}`
            },
          
          {
            name: 'Followers',
            value: `${main.followers}`,
          },
          
          {
            name: 'Following',
            value: `${main.following}`,
          },
          
          {
            name: 'Location',
            value: `${main.location || "Can't Find"}`,
          },
          
          {
            name: 'Creation Date',
            value: moment.utc(main.created_at).format("dddd, MMMM, Do YYYY")
          },
        
          {
            name: "Updated At",
            value: moment.utc(main.updated_at).format("dddd, MMMM, Do YYYY")
          },
          ],
	
        
      }
    };

    return content
  }
}
  
  module.exports = Info;