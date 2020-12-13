var input = document.querySelector('input[name=nome]')
var button = document.querySelector('button')
var app = document.querySelector('#app')
var ul = document.querySelector('#app ul')

button.onclick  = function(){
    var user = input.value;
    return new Promise((resolve, reject)=>{
        const api = new XMLHttpRequest('http')
        api.open('GET', `http://api.github.com/users/${user}`)
        api.send(null)
        api.onreadystatechange = function(){
            if(api.readyState === 4){
                if(api.status === 200){
                    resolve(JSON.parse(api.responseText))
                }else{
                    reject(error)
                }
            }
        }
    })
    .then((response)=>{
      for(var key of Object.keys(response)){
          var li = document.createElement('li')
          li.style.listStyle = 'none' 
          li.style.padding = '10px'
          li.style.backgroundColor = '#f0efeb'
          li.style.marginTop = '5px'
          li.style.border = 'solid #fff'
          li.style.borderRadius = '10px'
          li.appendChild(document.createTextNode(key +" => "+response[key]))
          
          app.appendChild(li)
      }
    })
    .catch((error)=>{
        console.log(error)
    })
}
