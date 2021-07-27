let list = [
    [2,3,4,5],[2,4,3,5],[2,4,5,3],[2,5,3,4],
    [2,5,4,3],[3,2,4,5],[3,2,5,4],[3,4,2,5],
    [3,5,2,4],[4,2,3,5],[4,2,5,3],[4,5,2,3],
    [5,2,4,3],[5,3,2,4],[5,4,2,3],
];
function randonnum(num){
    return (Math.floor(Math.random() *(15-0))+0) 
}
const codificar = document.querySelector("#code");
const decodificador = document.querySelector("#decode")
const chave = document.getElementById("chave");

codificar.addEventListener('click',function(){
    let n = randonnum()
    let newlist = list[n]
    
    const mensagem = document.getElementById("mensagem").value;
    let arraymensagem =mensagem.split('');
    const novamensagem =[]
    let numero;
    let auxiliar=0;
    let contador = 0;
    let arraychave=[];
    
    arraychave.push(arraymensagem[0]);
    arraymensagem[0] = arraymensagem[0].replace(arraymensagem[0],'') 
    
    
    for(let j = 0;j <newlist.length;j++){
        numero = newlist[j];
        for(let i = 0;i<=mensagem.length;i++){
            while(arraymensagem[numero-1]===''){ 
                numero++
            }
            if(i === numero){
                novamensagem[auxiliar] = arraymensagem[numero-1]
                arraymensagem[numero-1] = arraymensagem[numero-1].replace(arraymensagem[numero-1],'')
                numero+=newlist[j]
                auxiliar++
                contador++
            }
        }
        arraychave.push(newlist[j]+'-'+contador)
        contador=0
    }
    chave.value=arraychave
    let novamen = novamensagem.join('')
    document.getElementById("mensagem").value = novamen
})

decodificador.addEventListener('click', function(){
    let chavedescriptografar = chave.value
    chavedescriptografar = chavedescriptografar.split(",")
    const mensagem = document.getElementById("mensagem").value;
    let messagedecode =mensagem.split('');
    const newmesage= []
    newmesage.length = mensagem.length;
    newmesage.unshift(chavedescriptografar[0])
    for(let x=1;x<newmesage.length;x++){
        newmesage[x]=""
    }
    chavedescriptografar.shift();
    let eachkey = []
    let aux = 0
    for(let i=0;i<4;i++){
        eachkey = chavedescriptografar[i]
        eachkey = eachkey.split('-')   
        let contador = Number(eachkey[0]-1)
         for(let j = 0;j<eachkey[1];j++){
             while(newmesage[contador]!==''){
                 contador++
             }if(newmesage[contador]===""){
                 newmesage[contador] = messagedecode[aux]
             }
             contador+=Number(eachkey[0])
             aux++;
         }
    }
    let newmen = newmesage.join('')
    document.getElementById("mensagem").value = newmen
});