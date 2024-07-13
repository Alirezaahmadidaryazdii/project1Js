
let btn = document.querySelector('#btn-1');
window.addEventListener('load', ()=>{
    let data = localStorage.getItem('dataSing');
    dataJson = JSON.parse(data)
    if(dataJson !== null){
        let firstFiveChars = dataJson.email.substring(0, 7);
        btn.innerHTML = `...${firstFiveChars}`
    }
})
