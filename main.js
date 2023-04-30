listaDeNomes=[]
function submit(){
    var name1 = document.getElementById("nome.1").value;
 var  name2= document.getElementById("nome.2").value;
 var name3 = document.getElementById("nome.3").value;
 var name4 = document.getElementById("nome.4").value;

 listaDeNomes.push(name1); 
 listaDeNomes.push(name2); 
 listaDeNomes.push(name3); 
 listaDeNomes.push(name4);

 document.getElementById("display").innerHTML = listaDeNomes; 
 document.getElementById("botaoEnviar").style.display = "none"; 
 document.getElementById("botaoOrganizar").style.display = "inline-block";
}
function sorting(){
    listaDeNomes.sort()
        document.getElementById("display").innerHTML = listaDeNomes; 
}
