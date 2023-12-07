document.addEventListener("DOMContentLoaded", function() {
    loadPage("home");
});

function loadPage(page) {
    const main = document.querySelector("main");

    // Limpa o conteúdo atual
    main.innerHTML = "";

    switch (page) {
        case "home":
            loadHome();
            break;
        case "links":
            loadLinks();
            break;
        case "blog":
            loadBlog();
            break;
        case "about":
            loadAbout();
            break;
        default:
            break;
    }
}

function loadHome() {
    const main = document.querySelector("main");

    const homeSection = document.createElement("section");
    homeSection.innerHTML = `
        <h2>Imagens</h2>
        <!-- Adicione aqui o código para exibir imagens -->
        
        <h2>Depoimentos</h2>
        <!-- Adicione aqui o código para exibir depoimentos -->
    `;

    main.appendChild(homeSection);
}

function loadLinks() {
    const main = document.querySelector("main");

    const linksSection = document.createElement("section");
    linksSection.innerHTML = `
        <h2>Links Externos</h2>
        <!-- Adicione aqui o código para exibir links externos -->
    `;

    main.appendChild(linksSection);
}

function loadBlog() {
    const main = document.querySelector("main");

    const blogSection = document.createElement("section");
    blogSection.innerHTML = `
        <h2>Bem-vindo ao Blog</h2>
        <div class="blog-post">
            <h3>Pergunta 1</h3>
            <p>Resposta 1</p>
        </div>
        <div class="blog-post">
            <h3>Pergunta 2</h3>
            <p>Resposta 2</p>
        </div>
        <!-- Adicione aqui o código para um campo de bate-papo -->
    `;

    main.appendChild(blogSection);
}

function loadAbout() {
    const main = document.querySelector("main");

    const aboutSection = document.createElement("section");
    aboutSection.innerHTML = `
        <h2>Sobre Nós</h2>
        <p>Informações sobre a empresa.</p>
        
        <h2>Contato</h2>
        <!-- Adicione aqui o código para informações de contato -->
    `;

    main.appendChild(aboutSection);
}
