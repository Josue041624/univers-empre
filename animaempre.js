function createLeaf(section) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    leaf.style.left = `${Math.random() * 80}vw`;
    
    const fallDuration = Math.random() * 7 + 7;
    leaf.style.animationDuration = `${fallDuration}s`;

    section.appendChild(leaf);

    setTimeout(() => {
        section.removeChild(leaf);
    }, fallDuration * 1000);
}

function generateLeaves() {
    const sections = document.querySelectorAll('.about-section, .products-section, .hero');
    
    sections.forEach(section => {
        setInterval(() => {
            createLeaf(section);
        }, 500);  
    });
}

document.addEventListener('DOMContentLoaded', generateLeaves);

function abrirCarrito() {
    document.getElementById('carrito').style.display = 'block';
}

function realizarCompra(event) {
    event.preventDefault(); 

    alert('Compra exitosa');
    
    document.getElementById('carrito').style.display = 'none';
}