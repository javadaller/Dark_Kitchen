// début de base de données
const menuData= [
    {
        name: "Coco colo",
        description: "Découvrez le meilleur cola au monde avec Coco colo ! Rafraîchissant et pétillant, parfait pour étancher votre soif à tout moment de la journée.",
        picture: "",
        price: "2",
        category: "drink",
        type: "soda"
    },
    {
        name: "Jupilaes",
        description: "Plongez dans la perfection brassicole avec Jupilaes, la meilleure bière du monde ! Son goût riche et équilibré en fait la boisson idéale pour accompagner vos moments de détente.",
        picture: "",
        price: "25",
        category: "drink",
        type: "alcool"
    },
    {
        name: "Lemonade",
        description: "Rafraîchissez-vous avec notre limonade maison, parfaite pour une journée ensoleillée. Le zeste de citron frais et une touche de menthe font de cette boisson une véritable délice désaltérante.",
        picture: "",
        price: "3",
        category: "drink",
        type: "lemonade"
    },
    {
        name: "Iced Coffee",
        description: "Régalez-vous avec notre café glacé, idéal pour vous rafraîchir pendant les journées chaudes. Café corsé servi sur glace avec une touche de crème pour une expérience caféinée rafraîchissante.",
        picture: "",
        price: "4",
        category: "drink",
        type: "coffee"
    },
    {
        name: "Mango Smoothie",
        description: "Savourez une explosion de saveurs tropicales avec notre smoothie à la mangue. Un mélange rafraîchissant de mangue juteuse et de yaourt crémeux, parfait pour une pause revitalisante.",
        picture: "",
        price: "5",
        category: "drink",
        type: "smoothie"
    },
    {
        name: "Fresh Orange Juice",
        description: "Commencez votre journée du bon pied avec notre jus d'orange fraîchement pressé. Riche en vitamines et en saveurs naturelles, c'est le compagnon idéal pour un petit-déjeuner équilibré.",
        picture: "",
        price: "4",
        category: "drink",
        type: "juice"
    },
    {
        name: "Strawberry Smoothie",
        description: "Savourez notre smoothie aux fraises rafraîchissant, préparé avec des fraises fraîches, du yaourt onctueux et un soupçon de miel pour une boisson sucrée et délicieuse.",
        picture: "",
        price: "6",
        category: "drink",
        type: "smoothie"
    },        
    // {
    //     name: "Pasta Primavera",
    //     description: "Fresh pasta with seasonal vegetables.",
    //     picture: "",
    //     price: "15",
    //     category: "meal",
    //     type: "pasta"
    // },
    // {
    //     name: "Grilled Chicken",
    //     description: "Juicy grilled chicken breast served with roasted potatoes.",
    //     picture: "",
    //     price: "18",
    //     category: "meal",
    //     type: "chicken"
    // },
    // {
    //     name: "Margherita Pizza",
    //     description: "Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
    //     picture: "",
    //     price: "14",
    //     category: "meal",
    //     type: "pizza"
    // },
    // {
    //     name: "Beef Burger",
    //     description: "Juicy beef patty served with lettuce, tomato, onion, and pickles on a toasted bun.",
    //     picture: "",
    //     price: "16",
    //     category: "meal",
    //     type: "burger"
    // },
    // {
    //     name: "Vegetable Stir Fry",
    //     description: "Fresh mixed vegetables stir-fried in a savory sauce served over rice.",
    //     picture: "",
    //     price: "13",
    //     category: "meal",
    //     type: "stir-fry"
    // },
    // {
    //     name: "Grilled Salmon",
    //     description: "Fresh salmon fillet seasoned and grilled to perfection.",
    //     picture: "",
    //     price: "20",
    //     category: "meal",
    //     type: "salmon"
    // },
    // {
    //     name: "Chicken Tikka Masala",
    //     description: "Tender pieces of chicken cooked in a creamy tomato-based sauce.",
    //     picture: "",
    //     price: "18",
    //     category: "meal",
    //     type: "curry"
    // },
    {
        name: "Classic Beef Burger",
        description: "Savourez notre délicieux burger classique avec un patty de bœuf juteux, garni de laitue fraîche, de tomate, d'oignon, de cornichons et de votre choix de condiments sur un pain brioché toasté. Un classique incontournable !",
        picture: "",
        price: "12",
        category: "meal",
        type: "burger"
    },
    {
        name: "Cheeseburger",
        description: "Goûtez à la perfection avec notre cheeseburger classique, mettant en vedette un patty de bœuf juteux recouvert de fromage fondu, de laitue croustillante, de tomate juteuse, d'oignon frais et de cornichons, le tout sur un pain au sésame grillé. Un délice à chaque bouchée !",
        picture: "",
        price: "13",
        category: "meal",
        type: "burger"
    },
    {
        name: "Bacon Cheeseburger",
        description: "Laissez-vous séduire par notre bacon cheeseburger décadent, avec un patty de bœuf juteux garni de bacon croustillant, de fromage fondu, de laitue croquante, de tomate fraîche, d'oignon rouge et de cornichons, le tout sur un pain brioché. Une explosion de saveurs !",
        picture: "",
        price: "14",
        category: "meal",
        type: "burger"
    },
    {
        name: "Mushroom Swiss Burger",
        description: "Plongez dans notre Mushroom Swiss Burger, mettant en vedette un patty de bœuf grillé garni de champignons sautés, de fromage suisse fondu, de laitue croustillante et d'ail aioli, le tout sur un pain pretzel. Un festin pour les papilles !",
        picture: "",
        price: "15",
        category: "meal",
        type: "burger"
    },
    {
        name: "BBQ Bacon Burger",
        description: "Dégustez notre BBQ Bacon Burger, mettant en vedette un patty de bœuf garni de bacon croustillant, de fromage cheddar fondant, de sauce BBQ fumée, de laitue croquante, de tomate juteuse et d'oignon rouge, sur un pain brioché toasté. Une explosion de saveurs BBQ !",
        picture: "",
        price: "14",
        category: "meal",
        type: "burger"
    },
    {
        name: "Spicy Jalapeno Burger",
        description: "Laissez-vous emporter par notre Spicy Jalapeno Burger, avec un patty de bœuf garni de jalapenos tranchés, de fromage pepper jack fondu, de mayonnaise épicée, de laitue croquante, de tomate juteuse et d'oignon rouge, sur un pain brioché. Un coup de fouet épicé !",
        picture: "",
        price: "14",
        category: "meal",
        type: "burger"
    },
    {
        name: "Vegetarian Burger",
        description: "Découvrez notre Vegetarian Burger, avec un patty végétarien à base de plantes, garni de laitue fraîche, de tomate juteuse, d'oignon rouge, de cornichons et de votre choix de condiments, sur un pain complet. Une option savoureuse pour les amateurs de légumes !",
        picture: "",
        price: "13",
        category: "meal",
        type: "burger"
    },
    {
        name: "Caesar Salad",
        description: "Plongez dans une explosion de saveurs avec notre Caesar Salad classique. Croquante romaine, croutons croustillants, et vinaigrette César crémeuse, le tout garni de parmesan fraîchement râpé.",
        picture: "",
        price: "12",
        category: "starter",
        type: "salad"
    },
    {
        name: "Caprese Bruschetta",
        description: "Dégustez une tranche de paradis avec notre bruschetta Caprese. Pain grillé frotté à l'ail, tomates fraîches, mozzarella fondante, basilic frais et une touche de glaçage balsamique.",
        picture: "",
        price: "10",
        category: "starter",
        type: "appetizer"
    },
    {
        name: "Tomato Soup",
        description: "Réchauffez-vous avec une délicieuse soupe de tomates maison. Faite avec des tomates mûres, des herbes fraîches et une touche de crème, cette soupe est un réconfort pour l'âme.",
        picture: "",
        price: "6",
        category: "starter",
        type: "soup"
    },
    {
        name: "Garlic Bread",
        description: "Savourez notre pain à l'ail croustillant, garni de beurre à l'ail, de persil frais et de parmesan fondant. L'accompagnement parfait pour compléter votre repas.",
        picture: "",
        price: "7",
        category: "starter",
        type: "bread"
    },
    {
        name: "Spinach Dip",
        description: "Plongez dans notre épinard Dip, une tartinade crémeuse d'épinards, de fromage fondu et d'assaisonnements délicieux, servie avec des croustilles de tortilla croustillantes.",
        picture: "",
        price: "8",
        category: "starter",
        type: "dip"
    },
    {
        name: "Mozzarella Sticks",
        description: "Savourez nos bâtonnets de mozzarella croustillants, garnis de fromage mozzarella fondant et de chapelure assaisonnée, servis avec une sauce marinara chaude pour tremper.",
        picture: "",
        price: "9",
        category: "starter",
        type: "appetizer"
    },
    {
        name: "Crispy Calamari",
        description: "Plongez dans notre délicieux calamars croustillants, légèrement panés et frits à la perfection, servis avec une sauce au citron aïoli pour une expérience de saveur marine inoubliable.",
        picture: "",
        price: "11",
        category: "starter",
        type: "seafood"
    }        
]
// fin de base de données

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