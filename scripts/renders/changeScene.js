//uses jquery
function changeScene(from, to){
    $(`#${from}`).animate({opacity:0})
    
    setTimeout(() => {
        document.getElementById(to).classList.remove('hidden')
        $(`#${to}`).animate({opacity:1})
    }, 200);

    setTimeout(() => {
        document.getElementById(from).classList.add('hidden')
    }, 1500);
}

function changeScene_noanim(from, to){
    document.getElementById(to).classList.add('opacity-0')
    document.getElementById(to).classList.remove('hidden')
    document.getElementById(to).classList.remove('opacity-0')
    document.getElementById(from).classList.add('hidden')
}