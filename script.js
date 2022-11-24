//dark and light
const darkMode = document.getElementById('dark-mode');
const lightMode = document.getElementById('light-mode');



darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark_mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')

})

lightMode.addEventListener('click', () => {
    document.body.classList.remove('dark_mode')
    lightMode.classList.toggle('hide')
    darkMode.classList.remove('hide')
})

//filter




//rating
