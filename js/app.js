const items_bar = document.querySelectorAll('.itens-nav');
items_bar.forEach((item) => {
    item.addEventListener('click', (evento) => {
        items_bar.forEach((item) => {
            var id = item.id.split('-');
            document.getElementById(id[1]).classList.add('d-none');
            item.classList.remove('actived');
        });

        document.querySelector(evento.target.hash).classList.remove('d-none');
        evento.currentTarget.classList.add('actived');
    });
});

var items_menu = document.querySelectorAll('.itens-menu');
items_menu.forEach((item) => {
    item.addEventListener('click', (evento) => {
        items_menu.forEach((item) => {
            var id = item.id.split('-');
            document.getElementById(id[1]).classList.add('d-none');
            item.classList.remove('actived');
        });

        document.querySelector(evento.target.hash).classList.remove('d-none');
        evento.currentTarget.classList.add('actived');
    });
});