import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
    rand(min=100000000, max=999999999) {
        return String(Math.floor(Math.random() * (max - min)+ min));
    }

    formataCpf(cpf) {
        return cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11);
    }
    geraNovoCPF() {
        const cpfSemDigitos = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCpf = cpfSemDigitos + digito1 + digito2;
        return this.formataCpf(novoCpf);
    }
    
}