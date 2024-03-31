function ChangeColour() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let col = '#' + n.slice(0, 6);
    document.getElementById("heading").innerHTML = col;  
    document.body.style.backgroundColor = col;
    
    // Copy color code to clipboard
    navigator.clipboard.writeText(col);
}
