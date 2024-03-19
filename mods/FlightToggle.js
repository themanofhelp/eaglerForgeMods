ModAPI.require("player")

ModAPI.addEventListener("drawhud", () => {
    ModAPI.drawString({msg: "Press \'F\' to toggle flight! (Creative flight, so it will ban)", x: 15, y: 5, color: 0xFF00FF})
})

setTimeout(function() {
    
    ModAPI.addEventListener("key", event => {
        if(event.key == 33){
            if (ModAPI.player.capabilities.allowFlying == false) {
                ModAPI.player.capabilities.allowFlying = true
                ModAPI.player.capabilities.isFlying = true
                ModAPI.player.reload()
            } else {
                ModAPI.player.capabilities.allowFlying = false
                ModAPI.player.capabilities.isFlying = false
                ModAPI.player.reload()
            }
        }
    })

}, 500);

ModAPI.platform.openLink({url: 'https://kairocks2006.github.io/thank-you'})
