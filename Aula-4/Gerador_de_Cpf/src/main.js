import GeraCPF from "./modules/GeraCPF";

import './assets/css/style.css';

(function() {
    const geraCPF = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = geraCPF.geraNovoCPF();
})();