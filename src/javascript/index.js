const myObserver = new IntersectionObserver((entries) => {
    console.log(entries);
})

const img = document.getElementById("li-img-1");
const img2 = document.getElementById("li-img-2");
const img3 = document.getElementById("li-img-3");
const img4 = document.getElementById("li-img-4");
const img5 = document.getElementById("li-img-5");
const img6 = document.getElementById("li-img-6");
const img7 = document.getElementById("li-img-7");
const img8 = document.getElementById("li-img-8");

function abrirMenu(){
    let menuLateral = document.getElementById('menuLateral');
    let headerBtnMenu = document.getElementById('header-btn-menu');
    menuLateral.style.display = 'block';
    headerBtnMenu.style.display = 'none';
}

function fecharMenu(){
    let menuLateral = document.getElementById('menuLateral');
    let headerBtnMenu = document.getElementById('header-btn-menu');
    menuLateral.style.display = 'none';
    headerBtnMenu.style.display = 'flex';
}

function teste(){
    console.log("oi");
}

function projetosDesign(){
    let imagem1 = document.getElementById("imagem1");
    let imagem2 = document.getElementById("imagem2");
    let imagem3 = document.getElementById("imagem3");
    let imagem4 = document.getElementById("imagem4");
    let imagem5 = document.getElementById("imagem5");
    let imagem6 = document.getElementById("imagem6");
    let imagem7 = document.getElementById("imagem7");
    let imagem8 = document.getElementById("imagem8");
    let liImg1 = document.getElementById("li-img-1");
    let liImg2 = document.getElementById("li-img-2");
    let liImg3 = document.getElementById("li-img-3");
    let liImg4 = document.getElementById("li-img-4");
    let liImg5 = document.getElementById("li-img-5");
    let liImg6 = document.getElementById("li-img-6");
    let liImg7 = document.getElementById("li-img-7");
    let liImg8 = document.getElementById("li-img-8");

    liImg1.style.display = liImg2.style.display = liImg3.style.display = liImg4.style.display = liImg5.style.display = liImg6.style.display = liImg7.style.display = liImg8.style.display = "flex";

    imagem1.src = "../../assets/projetos/design/img_1.jpeg";
    imagem1.style.display = "block";
    imagem1.style.display = "100%";
    
    imagem2.src = "../../assets/projetos/design/img_2.png";
    imagem2.style.display = "block";
    imagem2.style.width = "100%";
    
    imagem3.src = "../../assets/projetos/design/img_3.jpg";
    imagem3.style.display = "block";
    imagem3.style.width = "100%";
    
    imagem4.src = "../../assets/projetos/design/img_4.jpeg";
    imagem4.style.display = "block";
    imagem4.style.width = "100%"
    
    imagem5.src = "../../assets/projetos/design/img_5.png";
    imagem5.style.display = "block";
    imagem5.style.width = "100%";
    
    imagem6.src = "../../assets/projetos/design/img_6.jpg";
    imagem6.style.display = "block";
    imagem6.style.width = "100%";
    
    imagem7.src = "../../assets/projetos/design/img_7.jpg";
    imagem7.style.display = "block";
    imagem7.style.width = "100%";
    
    imagem8.src = "../../assets/projetos/design/img_8.jpg";
    imagem8.style.display = "block";
    imagem8.style.width = "100%";
}

function projetosEducacao(){
    let imagem1 = document.getElementById("imagem1");
    let imagem2 = document.getElementById("imagem2");
    let imagem3 = document.getElementById("imagem3");
    let imagem4 = document.getElementById("imagem4");
    let imagem5 = document.getElementById("imagem5");
    let imagem6 = document.getElementById("imagem6");
    let imagem7 = document.getElementById("imagem7");
    let imagem8 = document.getElementById("imagem8");
    let liImg1 = document.getElementById("li-img-1");
    let liImg2 = document.getElementById("li-img-2");
    let liImg3 = document.getElementById("li-img-3");
    let liImg4 = document.getElementById("li-img-4");
    let liImg5 = document.getElementById("li-img-5");
    let liImg6 = document.getElementById("li-img-6");
    let liImg7 = document.getElementById("li-img-7");
    let liImg8 = document.getElementById("li-img-8");

    liImg1.style.display = liImg2.style.display = liImg3.style.display = liImg4.style.display = liImg5.style.display = liImg6.style.display = liImg7.style.display = liImg8.style.display = "flex";

    imagem1.src = "../../assets/projetos/educação/img_1.jpeg";
    imagem1.style.display = "block";
    imagem1.style.width = "100%";
    
    imagem2.src = "../../assets/projetos/educação/img_2.jpeg";
    imagem2.style.display = "block";
    imagem2.style.width = "100%";
    
    imagem3.src = "../../assets/projetos/educação/img_3.jpeg";
    imagem3.style.display = "block";
    imagem3.style.width = "100%";
    
    imagem4.src = "../../assets/projetos/educação/img_4.jpeg";
    imagem4.style.display = "block";
    imagem4.style.width = "100%";
    
    imagem5.src = "../../assets/projetos/educação/img_5.jpeg";
    imagem5.style.display = "block";
    imagem5.style.width = "100%";
    
    imagem6.src = "../../assets/projetos/educação/img_6.jpeg";
    imagem6.style.display = "block";
    imagem6.style.width = "100%";
    
    imagem7.src = "../../assets/projetos/educação/img_7.jpeg";
    imagem7.style.display = "block";
    imagem7.style.width = "100%";
    
    imagem8.src = "../../assets/projetos/educação/img_8.jpeg";
    imagem8.style.display = "block";
    imagem8.style.width = "100%";
}
function projetosUiUx(){
    let imagem1 = document.getElementById("imagem1");
    let imagem2 = document.getElementById("imagem2");
    let imagem3 = document.getElementById("imagem3");
    let imagem4 = document.getElementById("imagem4");
    let imagem5 = document.getElementById("imagem5");
    let imagem6 = document.getElementById("imagem6");
    let imagem7 = document.getElementById("imagem7");
    let imagem8 = document.getElementById("imagem8");
    let liImg1 = document.getElementById("li-img-1");
    let liImg2 = document.getElementById("li-img-2");
    let liImg3 = document.getElementById("li-img-3");
    let liImg4 = document.getElementById("li-img-4");
    let liImg5 = document.getElementById("li-img-5");
    let liImg6 = document.getElementById("li-img-6");
    let liImg7 = document.getElementById("li-img-7");
    let liImg8 = document.getElementById("li-img-8");

    liImg1.style.display = liImg2.style.display = liImg3.style.display = liImg4.style.display = liImg5.style.display = liImg6.style.display = liImg7.style.display = liImg8.style.display = "flex";

    imagem1.src = "../../assets/projetos/UI-UX/img_1.png";
    imagem1.style.display = "block";
    imagem1.style.width = "100%";
    
    imagem2.src = "../../assets/projetos/UI-UX/img_2.png";
    imagem2.style.display = "block";
    imagem2.style.width = "100%";
    
    imagem3.src = "../../assets/projetos/UI-UX/img_3.png";
    imagem3.style.display = "block";
    imagem3.style.width = "100%";
    
    imagem4.src = "../../assets/projetos/UI-UX/img_4.png";
    imagem4.style.display = "block";
    imagem4.style.width = "100%";
    
    imagem5.src = "../../assets/projetos/UI-UX/img_5.png";
    imagem5.style.display = "block";
    imagem5.style.width = "100%";
    
    imagem6.src = "../../assets/projetos/UI-UX/img_6.png";
    imagem6.style.display = "block";
    imagem6.style.width = "100%";
    
    imagem7.src = "../../assets/projetos/UI-UX/img_7.png";
    imagem7.style.display = "block";
    imagem7.style.width = "100%";
    
    imagem8.src = "../../assets/projetos/UI-UX/img_8.png";
    imagem8.style.display = "block";
    imagem8.style.width = "100%";
}

function imgHover1(){    
    var img = document.getElementById("li-img-1");
    var img2 = document.getElementById("li-img-2");
    var img3 = document.getElementById("li-img-3");
    var img4 = document.getElementById("li-img-4");
    img.style.width = "130%";
    img2.style.width = "90%";
    img3.style.width = "90%";
    img4.style.width = "90%";
}
function imgHover2(){
    var img = document.getElementById("li-img-1");
    var img2 = document.getElementById("li-img-2");
    var img3 = document.getElementById("li-img-3");
    var img4 = document.getElementById("li-img-4");
    img.style.width = "90%";
    img2.style.width = "130%";
    img3.style.width = "90%";
    img4.style.width = "90%";
}
function imgHover3(){
    var img = document.getElementById("li-img-1");
    var img2 = document.getElementById("li-img-2");
    var img3 = document.getElementById("li-img-3");
    var img4 = document.getElementById("li-img-4");
    img.style.width = "90%";
    img2.style.width = "90%";
    img3.style.width = "130%";
    img4.style.width = "90%";
}
function imgHover4(){
    var img = document.getElementById("li-img-1");
    var img2 = document.getElementById("li-img-2");
    var img3 = document.getElementById("li-img-3");
    var img4 = document.getElementById("li-img-4");
    img.style.width = "90%";
    img2.style.width = "90%";
    img3.style.width = "90%";
    img4.style.width = "130%";
}
function imgHover5(){
    var img = document.getElementById("li-img-5");
    var img2 = document.getElementById("li-img-6");
    var img3 = document.getElementById("li-img-7");
    var img4 = document.getElementById("li-img-8");
    img.style.width = "130%";
    img2.style.width = "90%";
    img3.style.width = "90%";
    img4.style.width = "90%";
}

function imgHover6(){
    var img = document.getElementById("li-img-5");
    var img2 = document.getElementById("li-img-6");
    var img3 = document.getElementById("li-img-7");
    var img4 = document.getElementById("li-img-8");
    img.style.width = "90%";
    img2.style.width = "130%";
    img3.style.width = "90%";
    img4.style.width = "90%";
}

function imgHover7(){
    var img = document.getElementById("li-img-5");
    var img2 = document.getElementById("li-img-6");
    var img3 = document.getElementById("li-img-7");
    var img4 = document.getElementById("li-img-8");
    img.style.width = "90%";
    img2.style.width = "90%";
    img3.style.width = "130%";
    img4.style.width = "90%";
}

function imgHover8(){
    var img = document.getElementById("li-img-5");
    var img2 = document.getElementById("li-img-6");
    var img3 = document.getElementById("li-img-7");
    var img4 = document.getElementById("li-img-8");
    img.style.width = "90%";
    img2.style.width = "90%";
    img3.style.width = "90%";
    img4.style.width = "130%";
}

function imgOutColum1(){
    var img = document.getElementById("li-img-1");
    var img2 = document.getElementById("li-img-2");
    var img3 = document.getElementById("li-img-3");
    var img4 = document.getElementById("li-img-4");
    img.style.width = "100%";
    img2.style.width = "100%";
    img3.style.width = "100%";
    img4.style.width = "100%";
}
function imgOutColum2(){
    var img = document.getElementById("li-img-5");
    var img2 = document.getElementById("li-img-6");
    var img3 = document.getElementById("li-img-7");
    var img4 = document.getElementById("li-img-8");
    img.style.width = "100%";
    img2.style.width = "100%";
    img3.style.width = "100%";
    img4.style.width = "100%";
}

function linkInstagram(){
    window.location.href = "https://www.instagram.com/alexandresousaartes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
}
function linkGithub(){
    window.location.href = "https://github.com/AlexandrelSousa";
}
function linkLinkedin(){
    window.location.href = "https://github.com/AlexandrelSousa";
}