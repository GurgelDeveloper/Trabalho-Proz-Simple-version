
//Drop Title
document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector('.hero-text');
    heroText.style.top = "0px"; 
});

document.addEventListener("DOMContentLoaded", function() {
    const heroLeft = document.querySelector('.hero-text2');
    heroLeft.style.top = "0px"; 
});

document.addEventListener("DOMContentLoaded", function(){
    const  content = document.querySelector('.content')
    content.style.top = "0px";
});

document.addEventListener("DOMContentLoaded", function(){
    const imgRobo  = this.querySelector('.robo-img')
    imgRobo.style.left = "0px";
})

document.addEventListener("DOMContentLoaded", function(){
    const imgRobo  = this.querySelector('.robo-img')
    imgRobo.style.left = "0px";
})

document.querySelector('.trial-download').addEventListener('click', function() {
    // URL do arquivo que você quer baixar
    const fileUrl = 'file.txt';
    
    // Nome do arquivo que será baixado
    const fileName = 'file.txt';
    
    // Crie um elemento <a> temporário
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    
    // Adicione o elemento ao DOM
    document.body.appendChild(a);
    
    // Simule o clique no link
    a.click();
    
    // Remova o elemento do DOM
    document.body.removeChild(a);
});
