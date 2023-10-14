async function randomMotivationalQuote() {
    const response = await fetch("https://api.quotable.io/quotes/random?limit=100&tags=motivation|famous-quotes|work|success&maxLength=80");
    const res = await response.json();
    console.log(res)

    res.every(element => {
        if(element.content.length < 60){
            const quote = `<span onclick='ipcSend(\`openlink\`, \`https://google.com/search?q="${res[0].content}"+meaning\`'>${res[0].content}  ~ </span><span onclick='window.open(\`https://google.com/search?q=${res[0].author}\`)'>${res[0].author}</span>`
            document.getElementById("motivation").innerHTML = `${quote}`
            localStorage.setItem("currentQuote", res[0].content)
            return false
        } else {
            return true
        }
    });
}