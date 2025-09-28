
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navBar = document.getElementById('navBar');
    const navItems = document.querySelectorAll('#navBar li.has-submenu');
    navToggle.addEventListener('click', function () {
        navBar.classList.toggle('active');
        const iconBars = this.querySelectorAll('.icon-bar');
        iconBars.forEach(bar => { bar.style.backgroundColor = '#000'; });
        if (navBar.classList.contains('active')) {
            iconBars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            iconBars[1].style.opacity = '0';
            iconBars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            iconBars[0].style.transform = 'none';
            iconBars[1].style.opacity = '1';
            iconBars[2].style.transform = 'none';
        }
    });
    if (window.innerWidth <= 768) {
        navItems.forEach(item => {
            const link = item.querySelector('a');

            link.addEventListener('click', function (e) {
                e.preventDefault();
                item.classList.toggle('active');
                navItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });
    }
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navBar.classList.remove('active');
            navItems.forEach(item => {
                item.classList.remove('active');
            });

            const iconBars = document.querySelectorAll('.icon-bar');
            iconBars.forEach(bar => { bar.style.backgroundColor = '#000'; });
            iconBars[0].style.transform = 'none';
            iconBars[1].style.opacity = '1';
            iconBars[2].style.transform = 'none';
        }
    });
});
