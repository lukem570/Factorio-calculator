template = document.getElementById("item").cloneNode(true);

function GetElementInsideContainer(container, childID) {
    var elm = {};
    var elms = container.getElementsByTagName("*");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].id === childID) {
            elm = elms[i];
            break;
        }
    }
    return elm;
}

function addIngredient(item) {
    console.log(item)
    //list = GetElementInsideContainer(item, "list");
    list = item.getElementsByTagName("ul")[0];
    console.log(list)

    item = template.cloneNode(true);
    console.log(item.innerHTML);
    item.getElementsByTagName("ul")[0].innerHTML = "";
    console.log(item.innerHTML);

    list.appendChild(item);
}