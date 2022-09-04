let countEl = document.getElementById("count-el")  // pass in arguments
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0
function increment() {
    count = count + 1
    countEl.innerText= count
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
}
/*textContent returns every element in the node.
In contrast, innerText is aware of styling and won't
return the text of "hidden" elements.

Moreover, since innerText takes CSS styles into account, 
reading the value of innerText triggers a reflow to ensure 
up-to-date computed styles. (Reflows can be computationally 
expensive, and thus should be avoided when possible.)
*/
