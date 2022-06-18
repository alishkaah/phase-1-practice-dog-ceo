console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', ()=>{
    renderDogIMages()
    breedsFunction()

})

function renderDogIMages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => {
        data.message.map((img)=>{
            let pic = document.createElement('img');

            pic.src = img;
            document.getElementById('dog-image-container').appendChild(pic)
        })

    })

    
}

function breedsFunction(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data =>{ 
        console.log(data)
        let breedsArray = data.message
       

        for(namebreed in breedsArray){
            let breedCont=document.getElementById('dog-breeds')
            let mybreedName=document.createElement('li')
            mybreedName.textContent=namebreed
            breedCont.appendChild(mybreedName)
            
            mybreedName.addEventListener('click', ()=>{
            mybreedName.style.backgroundColor= 'coral',
            mybreedName.style.borderBottom = '1px solid #ddd',
            mybreedName.style. padding = '8px'
    })

        }


    })

}


 

 

 
