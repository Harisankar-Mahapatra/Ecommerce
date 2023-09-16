function toggleNav(){
    const bar = document.getElementById('bar')
    const nav = document.getElementById('navbar')
    nav.classList.add("active")
}

function closeNav(){
    const close = document.getElementById('close')
    const nav = document.getElementById('navbar')
    nav.classList.remove('active')
}