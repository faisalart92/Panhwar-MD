{
  "name": "SILENT-SOBX-MD",
  "description": "ᴊᴀᴠᴀsᴄʀɪᴘᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²",
  "logo": "https://telegra.ph/file/2a06381b260c3f096a612.jpg",
  "keywords": ["bot"],
  "success_url": "/",

    "stack": "container",
  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true,
      "value": ""
    },  
    
    "ALIVE_IMG": {
      "description": "paste your image url if you don't have you can use this public url.",
      "required": true,
      "value": "https://files.catbox.moe/h5ddpq.jpg"
    }, 
    
    "ALIVE_MSG": {
      "description": "paste your alive message hear.",
      "required": true,
      "value": "HII DEAR IM ONLINE.!!♻️"
    },
    
    "PREFIX": {
      "description": "paste your bot prefix note! Don't apply null prefix.",
      "required": true,
      "value": "."
    },
    
    "MODE": {
      "description": "select your bot work type public-private-inbox-group.",
      "required": true,
      "value": "public"
    }, 

    "AUTO_VOICE": {
      "description": "Make it true if you want bot auto voice.",
      "required": true,
      "value": "true"
    }, 

    "AUTO_REPLY": {
      "description": "Make it true if you want bot auto reply.",
      "required": true,
      "value": "true"
    }, 

    "AUTO_STICKER": {
      "description": "Make it true if you want bot auto sticker.",
      "required": true,
      "value": "false"
    }, 

    "AUTO_READ_STATUS": {
      "description": "Make it true if you want bot auto auto_read_status.",
      "required": true,
      "value": "true"
    }, 

    "ANTI_LINK": {
      "description": "Make it true if you want bot auto remove group link.",
      "required": true,
      "value": "true"
    },

    "ANTI_BAD": {
      "description": "Make it true if you want bot auto delete bad words from group example xxx porn etc.",
      "required": true,
      "value": "false"
    }, 

    "FAKE_RECORDING": {
      "description": "Make it true if you want bot fake record.",
      "required": false,
      "value": "true"
    },

    "AUTO_REACT": {
      "description": "Make it true if you want bot AutoReact.",
      "required": true,
      "value": "true"
    },

    "OWNER_REACT": {
      "description": "Make it true if you want bot OwnerReact.",
      "required": true,
      "value": "true"
    
    }, 

    "BOT_NAME": {
      "description": "write hear your name.",
      "required": true,
      "value": "✦PANHWAR-MD✦"
    }, 

    "HEART_REACT": {
      "description": "Make it true if you want bot only heart ♥️ emjois reaction .",
      "required": true,
      "value": "false"
    }

},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
