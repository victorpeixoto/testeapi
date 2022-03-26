SheetDB.post('https://sheetdb.io/api/v1/r0vr4bc2gohs1', {
        "data":{
            "nome": nome,
            "celular": celular,
            "email": email,
            "curso": curso  
        },
        "auth":{
        "username": "ocl3am5t",
        "password": "66mfx9xcia00n19fs25c"
        }

    }).then(function(result){
        console.log(result);
    }, function(error){
        console.log(error);
    });

function fazPost(url, data){
    let request = new XMLHttpRequest;
    request.open("POST",url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(data));

    request.onload = function() {
        console.log(this.responseText)
    };

    return request.responseText;

}

function salvar(){
    let nome = document.getElementById("nome").value;
    let celular = document.getElementById("celular").value;
    let email = document.getElementById("email").value;
    let curso = document.getElementById("curso").value;

    SheetDB.post('https://sheetdb.io/api/v1/r0vr4bc2gohs1', {
        "data":{
            "nome": nome,
            "celular": celular,
            "email": email,
            "curso": curso  
        },
        "auth":{
        "username": "ocl3am5t",
        "password": "66mfx9xcia00n19fs25c"
        }

    }).then(function(result){
        console.log(result);
    }, function(error){
        console.log(error);
    });
    
    let url = "https://sheetdb.io/api/v1/r0vr4bc2gohs1";
    
    console.log(nome);
    console.log(celular);
    console.log(email);
    console.log(curso);
    
    data = {
        "nome": nome,
        "celular": celular,
        "email": email,
        "curso": curso    
    };

    fazPost(url,data);
}

const url = "https://sheetdb.io/api/v1/r0vr4bc2gohs1";

function salvar(){
    axios.post(url,{
        "data": {
            "nome": nome, 
            "celular": celular, 
            "email": email,
            "curso": curso 
        }
    },
    {
        "auth": {
        "username": "ocl3am5t",
        "password": "66mfx9xcia00n19fs25c"
        }
    }
    ).then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}

salvar("Jonathas","6799999515224","Valebrum","20012022");

