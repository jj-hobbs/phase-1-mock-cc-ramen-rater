// write your code here
const baseURL = 'http://localhost:3000'
const ramenMenu = document.getElementById('ramen-menu')
const ramenDetail = document.getElementById('ramen-detail')
const pRating = document
const detailImage = document.querySelector('.detail-image')
const getRamens = () => {
    return fetch(baseURL + '/ramens')
        .then(data => data.json())
  }

const renderRamen = (ramen) => {
    let ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenMenu.append(ramenImg)
    ramenImg.addEventListener('click', ()=>renderInfo(ramen))
}

const renderInfo = (ramen) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'detail-image')
    img.setAttribute('src', ramen.image)
    img.setAttribute('alt', ramen.name)
  
    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'name')
    h2.innerHTML = ramen.name
  
    const h3 = document.createElement('h3')
    h3.setAttribute('class', 'restaurant')
    h3.innerHTML = ramen.restaurant

    document.querySelector('p span').innerText = ramen.rating
    document.getElementById('comment-display').innerText = ramen.comment
    
    ramenDetail.innerHTML=''

    ramenDetail.append(img)
    ramenDetail.append(h2)
    ramenDetail.append(h3)
  }

//   const ramenCollection = document.querySelector('#ramen-collection')

getRamens()
    .then(data => {
        data.forEach((el) => renderRamen(el))
        renderInfo(data[0])
    })