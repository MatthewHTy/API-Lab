
const button = document.querySelector('button')

button.addEventListener('click', (evt) =>{
    button.style.display = 'none'
    axios.get('https://swapi.dev/api/planets/2').then((res) => {
        for(let i = 0; i < res.data.residents.length; i++){
        console.log(res.data.residents[i])
            axios.get(res.data.residents[i]).then((resi) =>{
                let resident = document.createElement('h2')
                resident.textContent = `${resi.data.name}`
                document.querySelector('body').appendChild(resident)}) 
                    }
             });
})