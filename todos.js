

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')

// .then( (ga) =>{
//     console.log('the THEN',ga)
//     return ga.json()})
// .then( data =>{
//     console.log("wtf it's here")
//      console.log(data.ticker.volume)
// })    
// .catch(or => {
//     console.log('this is Catch' )
// })



//  const bitcoin = async() => {
//      try{
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd ');
//     const data = await res.json()
//     console.log(data.ticker.price)}
//     catch{
//         console.log("something went wrong")
//     }
// }

// WITH AXIOS

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(succ => {
//     console.log(succ.data.ticker.volume)})
// .catch(err=>{
//     console.log("erooooooorrrrrr")
// })    

    
// const bitcoin = async() => {
//          try{
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd ')
//          console.log(res.data.ticker.volume)
        
//     }
//         catch {
//             console.log("errori")
//         }
//     }       

// const jokes = document.querySelector('#jokes')
// const btn = document.querySelector('#btn')

// const addNewJoke = async () =>{
//     const joketext =  await getDadJoke()
//     const newLI = document.createElement('li');
//      newLI.append(joketext)
//      jokes.append(newLI)}







// const getDadJoke= async () => { 
//     try{
//     const config = { headers: { Accept: 'application/json'}}
//     const  res = await axios.get('https://icanhazdadjoke.com/', config)
//     return res.data.joke}
//     catch(e) {
//          return "no jokes sorry"
//      }
     


   
// }

// btn.addEventListener("click", addNewJoke)

const input = document.querySelector('input')
const form = document.querySelector('#form'); 

const image = document.querySelector('img')

// form.addEventListener('submit', async function (e ){
//     e.preventDefault();
//     console.log("submitted")
//     const searchTerm = form.elements.query.value;
//     const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
//     const imgg = res.data
    
//     for(let result of imgg){
//     const image = document.createElement('img')
//     image.src = result.show.image.medium
//     document.body.append(image)
//     }
    



// ALSO WITH AXIOS 

form.addEventListener('submit', async function (e ){
    e.preventDefault();
    console.log("submitted")
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm} }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config );
    const imgg = res.data
    form.elements.query.value = ''
    
    for(let result of imgg){
    const image = document.createElement('img')
    image.src = result.show.image.medium
    document.body.append(image)
    }
} )



const deleteImgs = function () {
    const imgs = document.querySelectorAll('img');
     for(let img of imgs){
        img.remove();
     
    }
    
    }
form.addEventListener('click', deleteImgs)

