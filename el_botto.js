const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

		//login. should never be disclosed

client.on("ready", () => {
  console.log("I am ready!");					//When the bot becomes active, it prints this to the console
});

client.on("message", (message) => {				//this code block is executed after *every* message 
		let prefix = "$$";						//self explanatory
		if(!message.content.startsWith(prefix)||message.author.bot) //it would *now* ignore all messages that it sends or are not preceded by the aforementioned prefix
	    {return;}
	
	/*******************************************************
	*		Commands and actions						   *
	*       (can be anything, mention sub-categories)      *
	********************************************************/
		
		
		if (message.content.startsWith(prefix + "hello")) {					//ping [in channel, send-and-reply, fun]
		message.channel.send("Leave me alone.");
		}
		else if (message.content.startsWith(prefix + "messageme")) {					//[DM, send-and-reply,fun]
			message.author.sendMessage("Go die.");
		}
	
		else if (message.content.startsWith(prefix + "die")) {					//[DM, send-and-reply, fun]
		message.channel.send("I am already dead.");
		}
		
		else if (message.content.startsWith(prefix + "PSA")){				
		message.channel.send("Endellion is dangerous. Approach with caution"); //[in channel, send-and-reply, no hard feelings XP]
		}
		else if (message.content.startsWith(prefix + "BOOM")){				
			message.channel.send("CLAP");										//[in channel, send-and-reply, fun]
		}
		
		
		
		
		else if(message.content.startsWith(prefix + "out")){
			var channel_out = "283845967231582211";							//by changing value of channel_out, and uncommenting the proper send() method
			var channel_in = "387927169311047680";							//you can send messages through the bot to the user or to a specific channel
			var parts = message.content.split(" ");							//all user/channel IDs can be retrieved from IDs.txt from Git (which currently does not exist)
			parts.splice(0,1);
			mesg = parts.join(" ");
			//client.users.get(channel_out).send(mesg);
			client.channels.get("393042398432854026").send(mesg);			
	
		}
		
		else{
		message.channel.send("Shaddup and go away, bellywrinkler");			//like Steve's GiantSquidOfAnger reaction
	}
		
		}
