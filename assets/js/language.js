// Objeto que mapeia chaves para strings de texto em cada idioma
var languageStrings = {
    'PT': {
        'portfolio_title': 'Meu Portfólio.',
        'main_section_hello': 'Olá!',
        'portfolio_about': 'Sobre',
        'portfolio_projects': 'Projetos',
        'main_section_about_me': 'Sobre mim.',
        'main_section_about_me_description': 'Meu nome é Guilherme, tenho 18 anos e sou um aluno da faculdade de tecnologia (Fatec) de Presidente Prudente. Eu possuo um gosto por front-end, e procuro me desenvolver cada vez mais!',
        'projects_section_title': 'Meus Projetos',
        'project1_title': 'Wany',
        'project1_description': 'Site onde desenvolvedores indies podem publicar seus jogos que estarão acessíveis a outros usuários. Participei no desenvolvimento e fiquei responsável por grande parte das decisões visuais e o front-end de algumas páginas.',
        'button_acess': 'Acessar',
        'project2_title': 'Site SWAPI',
        'project2_description': 'Site simples de consumo de API do SWAPI (The Star Wars API) com uma apresentação front-end usando vanilla CSS e com PHP trabalhandon no back-end.',
        'project3_title': 'Calculadora em React',
        'project3_description': 'Um projeto simples de construção de uma calculadora utilizando a biblioteca front-end JS - React e css vanilla.',
        'project4_title': 'Jogos RPG Maker',
        'project4_description': 'Alguns jogos feitos na Engine de desenvolvimento de jogos "GameMaker Studio 2" enquanto eu a estudava. Todos sprites também foram feitos por mim, utilizando o software Aseprite.',
        'project5_title': 'Programa Login e Cadastro C#',
        'project5_description': 'Programa simples de login e cadastro de usuários com conexão a banco de dados, feito em C# utilizando windows form.',
        'contact_section_title': 'Minhas plataformas!',
        'contact_section_subtitle': 'Contato',
        'contact_section_email': 'Você pode entrar em contato comigo através do meu e-mail:',
        'contact_other_platforms': 'Ou outras plataformas de contato!',
        'contact_section_linkedln': 'Linkedln',
        'contact_section_twitter': 'Twitter',
        'contact_section_instagram': 'Instagram'
    },
    'EN': {
        'portfolio_title': 'My Portfolio.',
        'main_section_hello': 'Hello!',
        'main_section_about_me': 'About Me.',
        'portfolio_about': 'About',
        'portfolio_projects': 'Projects',
        'main_section_about_me_description': 'My name is Guilherme, I am 18 years old and I am a student at the technology college (Fatec) of Presidente Prudente. I have a taste for front-end, and I seek to develop myself more and more!',
        'projects_section_title': 'My Projects',
        'project1_title': 'Wany',
        'project1_description': 'Site where indie developers can publish their games that will be accessible to other users. I took part in the development and was responsible for most of the visual decisions and the front-end of some pages.',
        'button_acess': 'Acess',
        'project2_title': 'Site SWAPI',
        'project2_description': 'Simple website for consuming the SWAPI (The Star Wars API) with a front-end presentation using vanilla CSS and PHP working on the back-end.',
        'project3_title': 'Calculator in React',
        'project3_description': 'A simple project to build a calculator using the front-end JS library - React and vanilla css.',
        'project4_title': 'RPG Maker Games',
        'project4_description': 'Some games made in the game development engine "GameMaker Studio 2" while I was studying it. All sprites were also made by me, using the Aseprite software.',
        'project5_title': 'Login and Signup Program in C#',
        'project5_description': 'Simple program for login and user registration with database connection, made in C# using windows form.',
        'contact_section_title': 'My plataforms!',
        'contact_section_subtitle': 'Contact',
        'contact_section_email': 'You can contact me through my email:',
        'contact_other_platforms': 'Or you can hit me up on some of my other platforms!',
        'contact_section_linkedln': 'Linkedln',
        'contact_section_twitter': 'Twitter',
        'contact_section_instagram': 'Instagram'
    }
};

// Função para atualizar o conteúdo do site com base no idioma selecionado
function updateContent(language) {
    var elementsToUpdate = document.querySelectorAll('.dynamic-content');
    elementsToUpdate.forEach(element => {
        var key = element.dataset.key;
        element.textContent = languageStrings[language][key];
    });
}

// Função para alternar entre os idiomas quando o botão de toggle é clicado
function changeLanguage() {
    var languageToggle = document.getElementById('language-toggle');
    var language = languageToggle.checked ? 'EN' : 'PT';

    // Salvar a preferência de idioma em um cookie com validade de 365 dias
    setCookie('languagePreference', language, 365);

    // Atualiza o conteúdo com base no idioma selecionado
    updateContent(language);
}

// Adiciona um ouvinte de evento para o botão de toggle
document.getElementById('language-toggle').addEventListener('click', changeLanguage);

// Chama a função para atualizar o conteúdo com base no idioma inicial (recuperando do cookie, se existir)
var savedLanguage = getCookie('languagePreference');
if (savedLanguage) {
    updateContent(savedLanguage);
} else {
    // Caso não haja preferência salva, use o idioma padrão (PT)
    updateContent('PT');
}

// Função para definir um cookie
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// Função para recuperar um cookie
function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

