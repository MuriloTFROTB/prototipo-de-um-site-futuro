// Obtenha uma referência ao elemento da barra lateral
const sidebar = document.getElementById('sidebar');
const logoTop=document.getElementById('logo-top');
// Obtenha uma referência ao botão com a classe 'open-menu-side'
const openMenuButton = document.querySelector('.open-menu-side button');

// Obtenha uma referência ao elemento .icones
const icones = document.querySelector('.icones');

// Adicione um ouvinte de evento de clique ao botão
openMenuButton.addEventListener('click', function() {
  // Alterne a classe 'active' na barra lateral para mostrar/ocultar
  sidebar.classList.toggle('active');
  
});