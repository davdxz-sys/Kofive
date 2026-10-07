/* ==========================================
   KOFIVE
   SCRIPT.JS
========================================== */


/* ==========================================
   PRODUTOS
==========================================

   COLOQUE AQUI OS LINKS DIRETOS DO IMGUR.

   front = imagem da frente

   back = imagem das costas

========================================== */


const products = [

    {
        id: 1,

        name: "K5 CORE BLACK",

        category: "Classic",

        price: "R$ 129,90",

        description:
            "Camiseta KOFIVE com estampa autoral K5. Modelagem confortável e identidade minimalista.",

        front:
            "https://i.imgur.com/SEU-FRONT-01.png",

        back:
            "https://i.imgur.com/SEU-BACK-01.png"
    },


    {
        id: 2,

        name: "BLUE SIGNAL",

        category: "Oversized",

        price: "R$ 149,90",

        description:
            "Uma peça oversized criada para quem quer presença e conforto.",

        front:
            "https://i.imgur.com/SEU-FRONT-02.png",

        back:
            "https://i.imgur.com/SEU-BACK-02.png"
    },


    {
        id: 3,

        name: "NO RULES",

        category: "Limited",

        price: "R$ 169,90",

        description:
            "Edição limitada KOFIVE. Uma estampa feita para representar liberdade.",

        front:
            "https://i.imgur.com/SEU-FRONT-03.png",

        back:
            "https://i.imgur.com/SEU-BACK-03.png"
    },


    {
        id: 4,

        name: "KOFIVE CHROME",

        category: "Limited",

        price: "R$ 159,90",

        description:
            "Visual chrome com identidade futurista KOFIVE.",

        front:
            "https://i.imgur.com/SEU-FRONT-04.png",

        back:
            "https://i.imgur.com/SEU-BACK-04.png"
    },


    {
        id: 5,

        name: "MIDNIGHT CODE",

        category: "Oversized",

        price: "R$ 149,90",

        description:
            "Uma leitura digital do universo KOFIVE.",

        front:
            "https://i.imgur.com/SEU-FRONT-05.png",

        back:
            "https://i.imgur.com/SEU-BACK-05.png"
    },


    {
        id: 6,

        name: "AFTER DARK",

        category: "Classic",

        price: "R$ 129,90",

        description:
            "Minimalismo, preto e identidade.",

        front:
            "https://i.imgur.com/SEU-FRONT-06.png",

        back:
            "https://i.imgur.com/SEU-BACK-06.png"
    },


    {
        id: 7,

        name: "ELECTRIC BLUE",

        category: "Oversized",

        price: "R$ 149,90",

        description:
            "Azul elétrico inspirado na estética digital da KOFIVE.",

        front:
            "https://i.imgur.com/SEU-FRONT-07.png",

        back:
            "https://i.imgur.com/SEU-BACK-07.png"
    },


    {
        id: 8,

        name: "FIRST DROP",

        category: "Limited",

        price: "R$ 179,90",

        description:
            "A primeira peça da história KOFIVE.",

        front:
            "https://i.imgur.com/SEU-FRONT-08.png",

        back:
            "https://i.imgur.com/SEU-BACK-08.png"
    }

];


/* ==========================================
   RENDER PRODUTOS
========================================== */

const productsGrid =
    document.getElementById(
        "productsGrid"
    );


function renderProducts(
    filter = "Todos"
) {

    if (!productsGrid) return;


    const filtered =
        filter === "Todos"

        ? products

        : products.filter(
            product =>
                product.category === filter
        );


    productsGrid.innerHTML =
        filtered.map(product => `

            <article
                class="product-card"
                onclick="openProduct(${product.id})"
            >

                <div class="product-images">

                    <img
                        src="${product.front}"
                        class="product-front"
                        alt="${product.name} frente"
                    >

                    <img
                        src="${product.back}"
                        class="product-back"
                        alt="${product.name} costas"
                    >

                    <div class="image-indicator">

                        <span></span>
                        <span></span>

                    </div>

                </div>


                <div class="product-info">

                    <h3 class="product-name">
                        ${product.name}
                    </h3>


                    <div class="product-bottom">

                        <span class="product-category">
                            ${product.category}
                        </span>

                        <span class="product-price">
                            ${product.price}
                        </span>

                    </div>


                    <button
                        class="product-action"
                    >
                        VER PRODUTO →
                    </button>

                </div>

            </article>

        `).join("");
}


/* ==========================================
   ABRIR PRODUTO
========================================== */

function openProduct(id) {

    window.location.href =
        `produto.html?id=${id}`;

}


/* ==========================================
   FILTROS
========================================== */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                document
                    .querySelectorAll(".filter")
                    .forEach(btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );


                button.classList.add(
                    "active"
                );


                renderProducts(
                    button.dataset.filter
                );

            }
        );

    });


/* ==========================================
   MENU MOBILE
========================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );

        }
    );

}


/* ==========================================
   FORMULÁRIO DE IDEIA
========================================== */

const ideaForm =
    document.getElementById(
        "ideaForm"
    );


if (ideaForm) {

    ideaForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "ideaName"
                    )
                    .value;


            showToast(
                `Obrigado, ${name}! Sua ideia foi registrada.`
            );


            ideaForm.reset();

        }
    );

}


/* ==========================================
   TOAST
========================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}


/* ==========================================
   PÁGINA DO PRODUTO
========================================== */

const productPage =
    document.getElementById(
        "productPage"
    );


if (productPage) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            params.get("id")
        );


    const product =
        products.find(
            item =>
                item.id === id
        );


    if (!product) {

        productPage.innerHTML = `

            <div class="glass"
                 style="
                    padding:50px;
                    border-radius:25px;
                    text-align:center;
                 "
            >

                <h1>
                    Produto não encontrado.
                </h1>

                <br>

                <a
                    href="index.html"
                    class="button button-primary"
                >
                    VOLTAR À LOJA
                </a>

            </div>

        `;

    } else {

        renderProductPage(product);

    }

}


/* ==========================================
   RENDER PÁGINA PRODUTO
========================================== */

function renderProductPage(product) {

    productPage.innerHTML = `

        <div class="product-detail">


            <!-- GALERIA -->

            <div class="detail-gallery">

                <div class="detail-thumbnails">

                    <div
                        class="detail-thumb"
                        onclick="changeMainImage('${product.front}')"
                    >

                        <img
                            src="${product.front}"
                            alt="Frente"
                        >

                    </div>


                    <div
                        class="detail-thumb"
                        onclick="changeMainImage('${product.back}')"
                    >

                        <img
                            src="${product.back}"
                            alt="Costas"
                        >

                    </div>

                </div>


                <div
                    class="detail-main-image"
                >

                    <img
                        id="mainProductImage"
                        src="${product.front}"
                        alt="${product.name}"
                    >

                </div>

            </div>



            <!-- INFORMAÇÕES -->

            <div class="detail-info">

                <span class="detail-category">
                    ${product.category}
                </span>


                <h1>
                    ${product.name}
                </h1>


                <div class="detail-price">
                    ${product.price}
                </div>


                <p class="detail-description">
                    ${product.description}
                </p>


                <!-- TAMANHOS -->

                <div class="size-title">
                    ESCOLHA O TAMANHO
                </div>


                <div class="sizes">

                    <button class="size">
                        P
                    </button>

                    <button class="size active">
                        M
                    </button>

                    <button class="size">
                        G
                    </button>

                    <button class="size">
                        GG
                    </button>

                </div>


                <!-- ENDEREÇO -->

                <div class="address-box">

                    <h3>
                        ENDEREÇO DE ENTREGA
                    </h3>


                    <div class="address-grid">

                        <input
                            type="text"
                            placeholder="Nome completo"
                            required
                        >

                        <input
                            type="text"
                            placeholder="CEP"
                            required
                        >

                        <input
                            class="full"
                            type="text"
                            placeholder="Rua / Avenida"
                            required
                        >

                        <input
                            type="text"
                            placeholder="Número"
                            required
                        >

                        <input
                            type="text"
                            placeholder="Complemento"
                        >

                        <input
                            class="full"
                            type="text"
                            placeholder="Cidade"
                            required
                        >

                        <input
                            class="full"
                            type="text"
                            placeholder="Estado"
                            required
                        >

                    </div>


                    <button
                        class="
                            button
                            button-primary
                            buy-button
                        "
                        onclick="fakeCheckout()"
                    >
                        CONTINUAR COMPRA →
                    </button>

                </div>

            </div>

        </div>

    `;


    /* TAMANHOS */

    document
        .querySelectorAll(".size")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".size")
                        .forEach(
                            size =>
                                size.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );

                }
            );

        });

}


/* ==========================================
   TROCAR IMAGEM
========================================== */

function changeMainImage(url) {

    const image =
        document.getElementById(
            "mainProductImage"
        );


    if (!image) return;


    image.style.opacity = "0";


    setTimeout(
        () => {

            image.src = url;

            image.style.opacity = "1";

        },
        180
    );

}


/* ==========================================
   CHECKOUT TEMPORÁRIO
========================================== */

function fakeCheckout() {

    showToast(
        "Pedido preparado! O pagamento será configurado posteriormente."
    );

}


/* ==========================================
   ANO
========================================== */

const year =
    document.getElementById(
        "year"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ==========================================
   INICIAR
========================================== */

renderProducts();
