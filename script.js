function dark() {
    let bodyTheme = document.querySelector('#bodyTheme')
    let lightTheme = document.querySelector('#light')
    let darkTheme = document.querySelector('#dark')
    bodyTheme.classList.toggle('dark'), 
    lightTheme.classList.toggle('active'), 
    darkTheme.classList.toggle('active')
}

function blackTheme() {
    let bodyTheme = document.querySelector('#bodyTheme')
    if (bodyTheme.classList.contains("dark")) {
        bodyTheme.setAttribute('class', 'black dark')
    } else {
        bodyTheme.setAttribute('class', 'black')
    }
}

function redTheme() {
    let bodyTheme = document.querySelector('#bodyTheme')
    if (bodyTheme.classList.contains("dark")) {
        bodyTheme.setAttribute('class', 'red dark')
    } else {
        bodyTheme.setAttribute('class', 'red')
    }
}

function pinkTheme() {
    let bodyTheme = document.querySelector('#bodyTheme')
    if (bodyTheme.classList.contains("dark")) {
        bodyTheme.setAttribute('class', 'pink dark')
    } else {
        bodyTheme.setAttribute('class', 'pink')
    }
}

function yellowTheme() {
    let bodyTheme = document.querySelector('#bodyTheme')
    if (bodyTheme.classList.contains("dark")) {
        bodyTheme.setAttribute('class', 'yellow dark')
    } else {
        bodyTheme.setAttribute('class', 'yellow')
    }
}

function greenTheme() {
    let bodyTheme = document.querySelector('#bodyTheme')
    if (bodyTheme.classList.contains("dark")) {
        bodyTheme.setAttribute('class', 'green dark')
    } else {
        bodyTheme.setAttribute('class', 'green')
    }
}

function blueTheme() {
    let bodyTheme = document.querySelector('#bodyTheme')
    if (bodyTheme.classList.contains("dark")) {
        bodyTheme.setAttribute('class', 'blue dark')
    } else {
        bodyTheme.setAttribute('class', 'blue')
    }
}
