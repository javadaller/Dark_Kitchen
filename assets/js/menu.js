const listArticles = document.querySelector(".list-articles")
const ulCategoryMenu = document.querySelector(".ul-category-menu")
let filter
const ulCart = document.querySelector('.list-add-to-cart')

const displayCalcul = total => {
    const displayTotal = document.querySelector('.cart-content h3')
    displayTotal.innerText = `
        Total: ${total}€
    `
}

// début calcul des éléments du panier
    const calculCart = () => {
        const cartItems = document.querySelectorAll('.cart-content ul li');
        const totalPrice = Array.from(cartItems).reduce((total, cartItem) => {
            const quantity = parseInt(cartItem.querySelector('.cart-quantity').value);
            const price = parseFloat(cartItem.dataset.price);
            return total + (quantity * price);
        }, 0);
        displayCalcul(totalPrice.toFixed(2))
    }
// fin calcul des éléments du panier

// création du panier
    const addToCart = article => {
        const alreadyExist = document.querySelector(`.cart-content ul li[data-name="${article.name}"]`)

        if (alreadyExist) {
            const quantitySpecificArticle = alreadyExist.querySelector('.cart-quantity')
            quantitySpecificArticle.value++
            calculCart()
        } else {
            const cartArticleCreation = document.createElement('li')
            cartArticleCreation.dataset.name = article.name
            cartArticleCreation.dataset.price = article.price
            cartArticleCreation.innerHTML = `
            <span class="cart-name">${article.name}</span>
            <input class="cart-quantity" type="number" value="1">
            `
            const inputNumber = cartArticleCreation.querySelector('input')
            inputNumber.addEventListener('change', () => {
                calculCart()
            })
            ulCart.append(cartArticleCreation)
        }
    }
// fin création du panier

// début création du filtre
const createFilter = menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = 1
    } else {
        acc[item.category]++
    }
    return acc
}, {})
const entriesOfcreateFilter = Object.entries(createFilter)
const displayFilter = entriesOfcreateFilter.map(cat => {
    const liCategoryMenu = document.createElement('li')
    liCategoryMenu.innerText = `
        ${cat[0]}(${cat[1]}),
    `
    liCategoryMenu.addEventListener('click', () => {
        if (filter === cat[0]) {
            filter = null
            // liCategoryMenu.classList.remove("active-li")
        } else {
            filter = cat[0]
            // liCategoryMenu.classList.add("active-li")
        }
        listArticles.innerHTML = ''
        displayArticles()
    })
    return liCategoryMenu
})
ulCategoryMenu.append(...displayFilter)
// fin de création du filtre

// début de création d'articles
const displayArticles = () => {
    const createArticles = menuData.filter(item => {
        if (filter) {
            return filter === item.category
        } else {
            return true
        }
    })
    .map(item => {
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
        const input = article.querySelector('input')
        input.addEventListener('click', () => {
            addToCart(item)
            calculCart()
        })

        return article
    })

    listArticles.append(...createArticles)
}
displayArticles()
// fin de création d'articles