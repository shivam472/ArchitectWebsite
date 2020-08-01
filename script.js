window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 1700);
}
document.querySelector(".hamburger-menu").addEventListener('click',() => {
    document.querySelector('.container').classList.toggle('change');
})