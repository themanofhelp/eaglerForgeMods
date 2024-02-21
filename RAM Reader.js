function findAvailableMem(){
    if (document.pointerLockElement != null){
        ModAPI.displayToChat({msg: "§7You have §2" + ModAPI.platform.freeMemory() + " kb §7out of §2" + ModAPI.platform.maxMemory() + " kb§7 remaining!"})
    }
}

var intervalId = setInterval(findAvailableMem, 2000);

/*ModAPI.addEventListener("update", () => {

    ModAPI.displayToChat({msg: "You have " + ModAPI.platform.freeMemory() + "kb out of " + ModAPI.platform.maxMemory() + "kb remaining!"})

})*/