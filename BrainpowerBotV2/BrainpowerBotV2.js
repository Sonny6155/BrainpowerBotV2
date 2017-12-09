// Sonny's Brainpower spam bot
// Version: 2.0

var Discord = require("discord.js");
var fs = require("fs"); // Allows reading other scripts

var BrainpowerBot = new Discord.Client();

var token = "MjU4NTgwODQ3MzMzMDgxMDk4.CzLVvA.yI4mP_pzzQpcTPS4m6dXSHkiN1Q";

let prefix = "\\";



BrainpowerBot.on("ready", () =>
{
    console.log("Ready");
    // Add channel notification later
});



// Listen for messages
BrainpowerBot.on("message", msg =>
{
    if (!msg.content.startsWith(prefix)) return; // End immediately if prefix is not found
    if(msg.author.bot) return; // Prevent bot loops

    // Ping test
    if (msg.content.startsWith(prefix + "ping"))
    {
      msg.channel.sendMessage("Pong!");
    }

    // Sneeze spam (TTS test)
    if (msg.content.startsWith(prefix + "sneeze"))
    {
      msg.channel.sendTTSMessage("Bless you.");
    }

    if (msg.content.startsWith(prefix + "readTXT"))
    {
      // If function returns true, send success in console and channel
      // If function returns false, report error in console and channel (another error will also be sent to console)
      readTXT(msg);
    }

    // Brainpower (short) lyrics spam
    if (msg.content.startsWith(prefix + "brainpower"))
    {
      msg.channel.sendMessage("Are you ready?");
      setTimeout(function()
      {
        shortBrainpower(msg);
      },22500);
    }

    // Brainpower (full) lyrics spam
    if (msg.content.startsWith(prefix + "longbrainpower"))
    {
      msg.channel.sendMessage("Are you ready?");
      setTimeout(function()
      {
        msg.channel.sendMessage("Are you ready?");
      },20000);
      setTimeout(function()
      {
        shortBrainpower(msg);
      },45500);
      setTimeout(function()
      {
        shortBrainpower(msg);
      },137500);
      setTimeout(function() // Begin solo
      {
        msg.channel.sendMessage("AAAAE-A-A-I-A-U");
      },228000);
      setTimeout(function()
      {
        msg.channel.sendMessage("AAE-O-A-A-U-U-A-E");
      },240000);
      setTimeout(function()
      {
        msg.channel.sendMessage("AAAAE-A-A-I-A-U");
      },251000);
      setTimeout(function()
      {
        msg.channel.sendMessage("Let the bass kick");
      },262000);
      setTimeout(function()
      {
        msg.channel.sendMessage("AAAAE-A-A-I-A-U");
      },273000);
      setTimeout(function()
      {
        msg.channel.sendMessage("AAE-O-A-A-U-U-A-E");
      },284000);
      setTimeout(function()
      {
        msg.channel.sendMessage("AAAAE-A-A-I-A-U");
      },295000);
      setTimeout(function()
      {
        msg.channel.sendMessage("Let the bass kick");
      },308000);
      setTimeout(function()
      {
        msg.channel.sendMessage("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
      },309500);
      setTimeout(function()
      {
        msg.channel.sendMessage("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
      },320500);
      setTimeout(function()
      {
        msg.channel.sendMessage("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
      },331500);
      setTimeout(function()
      {
        msg.channel.sendMessage("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
      },342500);
      setTimeout(function()
      {
        msg.channel.sendMessage("EEEEO-A");
      },352500);
      setTimeout(function()
      {
        msg.channel.sendMessage("EEEEO-A");
      },353250);
      setTimeout(function()
      {
        msg.channel.sendMessage("EEEEO-A");
      },354000);
    }

    // Disconnect bot
    if (msg.content.startsWith(prefix + "disconnect"))
    {
      console.log("Disconnecting")
      msg.channel.sendMessage("Disconnecting...");
      BrainpowerBot.destroy((err)=>
      {
        console.log(err);
      });
    }
});

function readTXT(msg)
{
  // Reads requested spam script

  // This loop is made specifically for music spam, which will include timings
  // Events are queued, so it should be asynchronous

  var textScript = []
  var timing = []
  var scriptName = msg.content.substring(msg.content.indexOf(" ") + 1); // Get exact file name by parsing after first space

  try // Test if path exists
  {
    console.log(__dirname + "/" + scriptName + ".txt");
    fs.accessSync(__dirname + "/" + scriptName + ".txt");
  }
  catch(err) // Ends the function if the file could not be found
  {
    console.log("File does not exist. Now returning function");
    msg.channel.sendMessage("File could not be found. Please check you entered the EXACT file name, or use " + prefix + "scripts for a list of all currently available files.");
    return;
  }

  console.log("File " + scriptName + ".txt found");

  // Grab textScript (and timing if available) via subscript, then store in array
  var text = fs.readFileSync(__dirname + "/" + scriptName + ".txt").toString().split('\n');
  console.log(text);

  for (var i = 0; i < text.length; i++)
  {
    console.log(text[i].match(/\|/g));
    if(text[i].match(/\|/g).length == 1) // If exactly one instance of "|" is found
    {
      textScript[i] = text[i].substring(0, text[i].indexOf("|"));
      timing[i] = parseInt(text[i].substring(text[i].indexOf("|") + 1));
    }
    else // Else return
    {
      console.log("Could not read file: More that 1 or no occurrence of '|'")
      msg.channel.sendMessage("Could not load file, try loading another file")
      return;
    }
  }

  for (var i = 0; i < text.length; i++)
  {
    // Queues the events
    setTimeout(function(i)
    {
      console.log(text[i]);
      msg.channel.sendMessage(textScript[i]);
    }.bind(null, i),timing[i]);
  }
}

function shortBrainpower(msg)
{
  msg.channel.sendMessage("Adrenaline is pumping");
  setTimeout(function()
  {
    msg.channel.sendMessage("Adrenaline is pumping");
  },3000);
  setTimeout(function()
  {
    msg.channel.sendMessage("Generator");
  },5500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Automatic Lover");
  },8200);
  setTimeout(function()
  {
    msg.channel.sendMessage("Atomic, Atomic, Overdrive");
  },11500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Blockbuster");
  },16500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Brainpower");
  },19500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Call me a leader");
  },23500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Cocaine");
  },24500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Don't you try it");
  },28500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Don't you try it");
  },30500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Innovator");
  },33500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Killer machine");
  },36500);
  setTimeout(function()
  {
    msg.channel.sendMessage("There's no fate");
  },39500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Take control");
  },42000);
  setTimeout(function()
  {
    msg.channel.sendMessage("Brainpower");
  },44500);
  setTimeout(function()
  {
    msg.channel.sendMessage("Let the bass kick");
  },46500);
  setTimeout(function()
  {
    msg.channel.sendMessage("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
  },48000);
  setTimeout(function()
  {
    msg.channel.sendMessage("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
  },59500);
  setTimeout(function()
  {
    msg.channel.sendMessage("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
  },70500);
  setTimeout(function()
  {
    msg.channel.sendMessage("O--------------------");
  },81500);
}

// Error listener
BrainpowerBot.on('error', e => { console.error(e); });



BrainpowerBot.login(token);
