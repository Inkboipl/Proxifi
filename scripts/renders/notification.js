function notify(title, body, icon){
    if(icon === 'default'){
        icon = 'https://github.com/thejimi/filtru-static-website/blob/main/favicon.png?raw=true'
    }
    const notification = new Notification(title, {body:body, icon:icon});
}