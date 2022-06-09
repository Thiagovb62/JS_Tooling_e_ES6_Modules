const rand = (min, max) => Math.floor(Math.random() * (max - min)+min);
const geraMaiscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.:;-_+=*&^%$#@!~?/<>';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(tamanho,maiusculas,minusculas,numeros,simbolos){
    let senha = [];
    tamanho = Number(tamanho)
    
    for(let i = 0; i < tamanho; i++){
       maiusculas && senha.push(geraMaiscula());
         minusculas && senha.push(geraMinuscula());
            numeros && senha.push(geraNumero());
                simbolos && senha.push(geraSimbolo());
        }
       return senha.join('').slice(0,tamanho);
}
