function showModal(id){
    document.getElementById(id).classList.remove('hidden')
    $(`#${id}`).animate({opacity:1})
}

function hideModal(id){
    $(`#${id}`).animate({opacity:0})
    setTimeout(() => {
        document.getElementById(id).classList.add('hidden')
    }, 1000);
}