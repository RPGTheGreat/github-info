//var got = require('got');
//var registryUrl = require('registry-url');
const Promise = require('pinkie-promise');
const fetch = require("node-fetch")

module.exports = function (name) {
	if (typeof name !== 'string') {
		return Promise.reject(new Error('user name required'));
	}

	return fetch(`https://api.github.com/users/ + ${name.toLowerCase()}`)
		.then(res => res.json()).then(body => {
     // if(body.message) return message.channel.send(`USER NOT FOUND `);
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;

  /*let user = [];
  let avatar = [];
  let name = [];
  let id = [];
  let html_url = [];
  let public_repos = [];
  let followers = [];
  let following = [];
  let location = [];
  let created_at = [];
  let bio = [];*/

			var dataParsed = JSON.parse(body);

			name 	= dataParsed.name
			avatar_url 	= dataParsed.avatar_url;
			id = dataParsed.id
			html_url = dataParsed.html_url
      public_repos = dataParsed.public_repos
     followers = dataParsed.followers
     following = dataParsed.following
     location = dataParsed.location
     bio = dataParsed.bio
     created_at = dataParsed.created_at
    
		/*	if(dataParsed.homepage !== undefined){
				ho 	= dataParsed.homepage;
			}

			if(dataParsed.author !== undefined){
				authorName = dataParsed.author.name;
			}
			else{
				if(dataParsed.maintainers !== undefined){
					for (var i in dataParsed.maintainers) {
						var maintainer = dataParsed.maintainers[i];
						if(authorName === ''){
							authorName = maintainer.name;
						}
						else{
							authorName = authorName + ', ' + maintainer.name;
						}
					}
				}
			}*/

			return {
				login: login,
        name          	: name,
				id		: id,
				avatar		: avatar_url,
				repository		: public_repos,
				bio		: bio,
				location			: location,
        created_at : created_at,
        following : following,
        followers: followers,
        url: html_url
			};
		})
		.catch(function (err) {
			if (err.statusCode === 404) {
				err.message = 'user doesn\'t exist';
			}

			throw err;
		});
};