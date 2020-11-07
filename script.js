var c=1
while(c<=6){
    console.log('Tudo bem?')
    c++
}


function verifica(){
    var num = document.getElementById("numero").value;
    var int_num = Number(num);

    if(int_num%2 == 0){
        alert("Esse número é par!");
    }else{
        alert("Esse número é impar");
    }
}

function zeroacemfor(){
    var resultado="";

    for(let i= 0; i <= 100; i++){
        if (i==0){
            resultado = i;
        }
        else if(i>0 && i<100){   
            resultado= resultado + ', ' + i;
        }
        else{
            resultado= resultado + ', ' + i + '.';
        }
        
    }
    alert(resultado);

}

function zeroacemwhile(){
    var resultado="";
    let i=0;

    while(i<=100){
        if (i==0){
            resultado = i;
        }
        else if(i>0 && i<100){   
            resultado= resultado + ', ' + i;
        }
        else{
            resultado= resultado + ', ' + i + '.';
        }

        i++; //i = i + 1;
        
    }
    alert(resultado);

}

function cemazerofor(){
    var resultado="";

    for(let i= 100; i >= 0; i--){
        if (i==100){
            resultado = i;
        }
        else if(i<100 && i>0){   
            resultado= resultado + ', ' + i;
        }
        else{
            resultado= resultado + ', ' + i + '.';
        }
        
    }
    alert(resultado);

}

function cemazerowhile(){
    var resultado="";
    let i=100;

    while(i>=0){
        if (i==100){
            resultado = i;
        }
        else if(i<100 && i>0){   
            resultado= resultado + ', ' + i;
        }
        else{
            resultado= resultado + ', ' + i + '.';
        }

        i--; //i = i - 1;
   
    }
    alert(resultado);

}

function zeroacemdowhile(){
    var resultado="";
    let i=0;

    do{
        if(i==0){
            resultado = i;
        }
        else if( i > 0 && i < 100){
            resultado = resultado + ', ' + i;
        }
        else{
            resultado = resultado + ', ' + i + '.';
        }
        i++;
    }while(i <= 100);

    alert(resultado);
}















