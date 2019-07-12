
var reg = document.getElementById('list');

fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
.then(response => response.json())
.then(result => {
    for(let obj of result){
        

        var div_obj = document.createElement('div');
        div_obj.classList = 'container';

        var imagem = document.createElement('img');
        imagem.src = obj.photo;
        imagem.className = "foto";
        div_obj.appendChild(imagem);

        
        var para2 = document.createElement('p');
        para2.classList = "tipo"
        para2.innerHTML = obj.property_type;
        div_obj.appendChild(para2);

         var h2 = document.createElement('h2');
         h2.innerHTML = obj.name;
         div_obj.appendChild(h2);

         var para1 = document.createElement('p');
         para1.innerHTML = "R$" + obj.price + ".00";
         div_obj.appendChild(para1);



         
         reg.appendChild(div_obj);
        console.log(obj);
    }
    
})