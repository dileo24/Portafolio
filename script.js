/* MENÚ */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn")
    const $menu = d.querySelector(".menu")

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none")
        $btnMenu.lastElementChild.classList.toggle("none")
        $menu.classList.toggle("is-active")
    })

    d.addEventListener("click", (e) => {
        if (!e.target.matches(".menu a")) return false;
        //si el evento es un enlace que esté dentro del menú se va a cerrar
        $btnMenu.firstElementChild.classList.remove("none")
        $btnMenu.lastElementChild.classList.add("none")
        $menu.classList.remove("is-active")
    })

})(document)