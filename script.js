window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 3000);
}
document.querySelector(".hamburger-menu").addEventListener('click',() => {
    document.querySelector('.container').classList.toggle('change');
})