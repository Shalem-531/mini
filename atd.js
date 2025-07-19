
function calc(){
    const a = Number(document.querySelector('.ip1').value);
    const b = Number(document.querySelector('.ip2').value);
    
    if (a < b) {
        const tot = (a / b) * 100;
        const html = `<p>Your attendance percentage is: ${tot.toFixed(2)}%</p>`;
        document.querySelector('.ou2').innerHTML = html;
    }
    

}
