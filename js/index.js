var operations = [  'push',  'pop',  'shift',  'unshift'  ]
var currentOperation = null
var arr = []

var arrElem = document.createElement ( 'section' )
document.body.appendChild ( arrElem )
arrElem.innerHTML = arr

var elem = document.createElement ( 'input' )
elem.type = 'text'
document.body.appendChild ( elem )
elem.placeholder = 'новый элемент массива'
elem.style.visibility = 'hidden'

elem.onkeypress = function (event) {
    if (event.key.charCodeAt(0)>47 &&
        event.key.charCodeAt(0)<58 &&
        (this.value+event.key <= arr.length) ||
        event.key==='Enter')
    {
        return true
    }
    else
        return false
}

elem.onchange = function ( event ) {
    arr.splice(elem.value,0,`#${arr.length}`)
    arrElem.innerHTML = arr
    this.style.visibility = 'hidden'
}
var extracted = document.createElement ( 'p' )
document.body.appendChild ( extracted )

var btns = []

for ( var operation of operations ) {
    btns.push (
        document.body.appendChild (
            document.createElement ( 'button' )
        )
    )
    btns [ btns.length-1 ].innerHTML = operation
    btns [ btns.length-1 ].onclick = exploreArray.bind ( elem )
}