/* ==========================================
   KOFIVE
   SCRIPT.JS
========================================== */


/* ==========================================
   PRODUTOS
==========================================

   TROQUE OS LINKS "image" PELOS LINKS
   DIRETOS DAS SUAS IMAGENS DO IMGUR.

   Exemplo:

   image:
   "https://i.imgur.com/ABC1234.png"

========================================== */


const products = [

    {
        name: "K5 / Core Black",
        category: "Classic",
        price: "R$ 129,90",

        image:
            "https://i.imgur.com/SEU-LINK-01.png",

        print: "K5",
        color: "#58aaff"
    },


    {
        name: "Blue Signal",
        category: "Oversized",
        price: "R$ 149,90",

        image:
            "https://i.imgur.com/SEU-LINK-02.png",

        print: "SIGNAL",
        color: "#328dff"
    },


    {
        name: "No Rules",
        category: "Limited",
        price: "R$ 169,90",

        image:
            "https://i.imgur.com/SEU-LINK-03.png",

        print: "NO//",
        color: "#83c4ff"
    },


    {
        name: "KOFIVE Chrome",
        category: "Limited",
        price: "R$ 159,90",

        image:
            "https://i.imgur.com/SEU-LINK-04.png",

        print: "KOF",
        color: "#c4e4ff"
    },


    {
        name: "Midnight Code",
        category: "Oversized",
        price: "R$ 149,90",

        image:
            "https://i.imgur.com/SEU-LINK-05.png",

        print: "0101",
        color: "#479eff"
    },


    {
        name: "After Dark",
        category: "Classic",
        price: "R$ 129,90",

        image:
            "https://i.imgur.com/SEU-LINK-06.png",

        print: "AD",
        color: "#6bb5ff"
    },


    {
        name: "Electric Blue",
        category: "Oversized",
        price: "R$ 149,90",

        image:
            "https://i.imgur.com/SEU-LINK-07.png",

        print: "K5+",
        color: "#1e7eff"
    },


    {
        name: "First Drop",
        category: "Limited",
        price: "R$ 179,90",

        image:
            "https://i.imgur.com/SEU-LINK-08.png",

        print: "01",
        color: "#a4d5ff"
    }

];


/* ==========================================
   ELEMENTOS
========================================== */

const productsGrid =
    document.getElementById(
        "productsGrid"
    );


const cartCount =
    document.getElementById(
        "cartCount"
    );


const toast =
    document.getElementById(
        "toast"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


const menuButton =
    document.getElementById(
        "menuButton"
    );


/* ==========================================
   CARRINHO
========================================== */

let cart = 0;


/* ==========================================
   TOAST
========================================== */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2400);
}


/* ==========================================
   RENDERIZAR PRODUTOS
========================================== */

function renderProducts(
    filter = "Todos"
) {

    const visibleProducts =
        filter === "Todos"

            ? products

            : products.filter(
                product =>
                    product.category === filter
            );


    productsGrid.innerHTML =
        visibleProducts.map(
            (product) => {

                const realIndex =
                    products.indexOf(product);


                return `

                    <article
                        class="product-card glass"
                    >

                        <div
                            class="product-image"
                        >

                            ${
                                product.image.includes(
                                    "SEU-LINK"
                                )

                                ?

                                `
                                <div
                                    class="mini-shirt"
                                    data-print="${product.print}"
                                    style="
                                        --print:
                                        ${product.color}
                                    "
                                ></div>
                                `

                                :

                                `
                                <img
                                    src="${product.image}"
                                    alt="${product.name}"
                                    loading="lazy"
                                    onerror="
                                        this.style.display='none';
                                        this.nextElementSibling.style.display='block';
                                    "
                                >

                                <div
                                    class="mini-shirt"
                                    data-print="${product.print}"
                                    style="
                                        --print:
                                        ${product.color};
                                        display:none;
                                    "
                                ></div>
                                `
                            }

                        </div>


                        <div
                            class="product-info"
                        >

                            <h3>
                                ${product.name}
                            </h3>


                            <div
                                class="product-meta"
                            >

                                <span>
                                    ${product.category}
                                </span>

                                <span
                                    class="price"
                                >
                                    ${product.price}
                                </span>

                            </div>


                            <button
                                class="add-button"
                                data-index="${realIndex}"
                            >

                                Adicionar ao carrinho +

                            </button>

                        </div>

                    </article>

                `;

            }
        ).join("");


    /* ======================================
       BOTÕES DE ADICIONAR
    ====================================== */

    document
        .querySelectorAll(".add-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );

                    const product =
                        products[index];

                    cart++;

                    cartCount.textContent =
                        cart;

                    showToast(
                        `${product.name} adicionada ao carrinho ✦`
                    );

                }
            );

        });

}


/* ==========================================
   FILTROS
========================================== */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(
                        filter =>
                            filter.classList.remove(
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

menuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "open"
        );

    }
);


/* ==========================================
   FECHAR MENU AO CLICAR
========================================== */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    });


/* ==========================================
   NAVEGAÇÃO ATIVA
========================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


/* ==========================================
   BOTÃO DO CARRINHO
========================================== */

document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        () => {

            if (cart === 0) {

                showToast(
                    "Seu carrinho está vazio."
                );

                return;

            }


            showToast(
                `Seu carrinho possui ${cart} ${
                    cart === 1
                        ? "item"
                        : "itens"
                }.`
            );

        }
    );


/* ==========================================
   FORMULÁRIO DE IDEIA
========================================== */

const ideaForm =
    document.getElementById(
        "ideaForm"
    );


ideaForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document
                .getElementById(
                    "ideaName"
                )
                .value
                .trim();


        showToast(
            `Valeu, ${name}! Sua ideia foi registrada. ✦`
        );


        ideaForm.reset();

    }
);


/* ==========================================
   ANO DO FOOTER
========================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* ==========================================
   INICIALIZAÇÃO
========================================== */

renderProducts();
