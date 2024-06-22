const openMenu = () => {
    document.querySelector('.backdrop').classList.add('active');
    document.querySelector('aside').classList.add('active');
}

const closeMenu = () => {
    document.querySelector('.backdrop').classList.remove('active');
    document.querySelector('aside').classList.remove('active');
}

document.getElementById('menuBtn').addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
});

document.querySelector('aside button.close').addEventListener('click', () => {
    closeMenu();
});

document.querySelector('.backdrop').addEventListener('click', () => {
    closeMenu();
});
