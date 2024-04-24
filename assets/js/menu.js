const menuData= [
    {
        name:"Coco colo",
        description:"Best cola of the world!",
        picture:"",
        price:"2",
        category:"drink",
        type:"soda"
    },

    {
        name:"Jupilaes",
        description:"Best beer of the world!",
        picture:"",
        price:"25",
        category:"drink",
        type:"alcool"
    }
]

const menu = document.querySelector("#menu")

const createArticle = menuData.map(item => {
    const article = document.createElement('article')
    article.innerHTML = `
    <h3>${item.name}</h3>
    <img src="${item.picture}" alt="${item.name}">
    <div class="category-and-price-of-article">
        <div class="category-of-article">${item.category}: ${item.type}</div>
        <p class="price">${item.price}€</p>
    </div>
    <p class="description-of-article">
        ${item.description}
    </p>
    <input type="button" value="add to cart">
    `
    return article
})

menu.append(...createArticle)