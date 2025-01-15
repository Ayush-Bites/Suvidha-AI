function searchCommands() {
    let input = document.getElementById('commandSearch').value.toUpperCase();
    let ul = document.getElementById('commandList');
    let li = ul.getElementsByTagName('li');
    
    for (let i = 0; i < li.length; i++) {
        let text = li[i].textContent || li[i].innerText;
        if (text.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

