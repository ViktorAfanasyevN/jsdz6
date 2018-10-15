function exploreArray ( event ) {
    currentOperation = event.target.innerHTML
    if ( currentOperation === 'push' || currentOperation === 'unshift' ) {
        switch (currentOperation) {
            case 'push' :
                this.style.visibility = 'visible'
                break
            case 'unshift' :
                arr.unshift(`${arr.length}`)
                arrElem.innerHTML = arr
                break
        }
    } else {
        if ( arr.length === 0 ) {
            this.placeholder = 'Массив пуст, невозможно выполнить операцию'
        } else {
            extracted.innerHTML = arr [ currentOperation ] ()
            arrElem.innerHTML = arr
        }
    }
}