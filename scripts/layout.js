const navSelector = document.getElementById("nav");

const options = [
    {
        title: "Ofertas", linkTo: "#"
    },
    {
        title: "Cómo comprar", linkTo: "#"
    },
    {
        title: "Costos y tarifas", linkTo: "#"
    },
    {
        title: "Mis pedidos", linkTo: "#"
    },
    {
        title: "Garantía", linkTo: "#"
    }
];

    for (let option of options) {

        const navli = document.createElement("li");
        navli.className = "nav-li";
        const anchor = document.createElement("a");
        anchor.className = "nav-a";
        anchor.textContent = option.title;
        anchor.href = option.linkTo;
        navli.appendChild(anchor);
        navSelector.appendChild(navli);
    }

const footerSelector = document.getElementById("footer");

const footerOptions = [
    
        {
            title: "Ofertas", opts: ["Laptops", "Audio", "Auriculares"]
        },
        {
            title: "Cómo comprar", opts:["Formas de pago", "Envios", "Devoluciones"]
        },
        {
            title: "Costos y tarifas", opts: ["Impuesto", "Facturación"]
        },
        {
            title: "Mis pedidos", opts: ["Pedir nuevamente", "Lista de deseos"]
        },
        {
            title: "Garantía", opts: []
        }
    
];
for (let footerOption of footerOptions) {
    const footerUl = document.createElement("ul");
    footerUl.className = "footer-ul";
    const footerLi = document.createElement("li");
    footerLi.className = "footer-main-item";
    const footerAnchorTit = document.createElement("a");
    footerAnchorTit.className = "footer-a";
    footerAnchorTit.href = "#";
    footerAnchorTit.textContent = footerOption.title;
    footerLi.appendChild(footerAnchorTit);
    footerUl.appendChild(footerLi);
    
    for (const footerOpts of footerOption.opts) {
        const footerLiOpt = document.createElement("li");
        footerLiOpt.className = "footer-li";
        const footerAnchor = document.createElement("a");
        footerAnchor.className = "footer-a";
        footerAnchor.href = "#";
        footerAnchor.textContent = footerOpts;
        footerLiOpt.appendChild(footerAnchor);
        footerUl.appendChild(footerLiOpt);

    }
    footerSelector.appendChild(footerUl);
}

