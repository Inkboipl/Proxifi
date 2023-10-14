function setupBegin(){
    changeScene('scene_1', 'scene_2')
}

function confettiBegin(){
    setTimeout(() => {
        startConfetti()
    }, 500);
}

function enterapp(){
    newtemp('loadingTo', 'app')
    window.location.href = ('./loading.html')
}

function closewindow(){
    notify('Filtru has been closed', 'See ya!', 'default')
    ipcSend('closeWindow', 'true')
}

//Website blocker module
function websiteblocker_nextStep(){
    newtemp("module_websiteblocker", "enabled")
    newtemp('loadingTo', 'module_websiteblocker_setup')
    window.location.href = ('./loading.html')
}

function websiteblocker_disable(){
    newtemp("module_websiteblocker", "disabled")
    changeScene_noanim('scene_2', 'scene_websiteblocker_moduledisabled')
    setTimeout(() => {
        changeScene('scene_websiteblocker_moduledisabled', 'scene_3')
        confettiBegin()
    }, 4000);
}

function websiteblocker_addCustomWebsites(){
    showModal('modal_addWebsitesToBlocker')
}

function websiteblocker_customwebsite_add(){
    alert("This feature is not avalaible yet.")
}