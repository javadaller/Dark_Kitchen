const menuData= [
    {
        name: "Coco colo",
        description: "Découvrez le meilleur cola au monde avec Coco colo ! Rafraîchissant et pétillant, parfait pour étancher votre soif à tout moment de la journée.",
        picture: "assets/images/product-pictures/vrai-coca.jpg",
        price: "2",
        category: "drink",
        type: "soda"
    },
    {
        name: "Jupilaes",
        description: "Plongez dans la perfection brassicole avec Jupilaes, la meilleure bière du monde ! Son goût riche et équilibré en fait la boisson idéale pour accompagner vos moments de détente.",
        picture: "assets/images/product-pictures/jupilaes.jpg",
        price: "25",
        category: "drink",
        type: "alcool"
    },
    {
        name: "Lemonade",
        description: "Rafraîchissez-vous avec notre limonade maison, parfaite pour une journée ensoleillée. Le zeste de citron frais et une touche de menthe font de cette boisson une véritable délice désaltérante.",
        picture: "assets/images/product-pictures/lemonade.jpg",
        price: "3",
        category: "drink",
        type: "lemonade"
    },
    {
        name: "Iced Coffee",
        description: "Régalez-vous avec notre café glacé, idéal pour vous rafraîchir pendant les journées chaudes. Café corsé servi sur glace avec une touche de crème pour une expérience caféinée rafraîchissante.",
        picture: "assets/images/product-pictures/iced-coffee.jpg",
        price: "4",
        category: "drink",
        type: "coffee"
    },
    {
        name: "Mango Smoothie",
        description: "Savourez une explosion de saveurs tropicales avec notre smoothie à la mangue. Un mélange rafraîchissant de mangue juteuse et de yaourt crémeux, parfait pour une pause revitalisante.",
        picture: "assets/images/product-pictures/mango-smoothie.jpg",
        price: "5",
        category: "drink",
        type: "smoothie"
    },
    {
        name: "Fresh Orange Juice",
        description: "Commencez votre journée du bon pied avec notre jus d'orange fraîchement pressé. Riche en vitamines et en saveurs naturelles, c'est le compagnon idéal pour un petit-déjeuner équilibré.",
        picture: "assets/images/product-pictures/fresh-orange-juice.jpg",
        price: "4",
        category: "drink",
        type: "juice"
    },
    {
        name: "Strawberry Smoothie",
        description: "Savourez notre smoothie aux fraises rafraîchissant, préparé avec des fraises fraîches, du yaourt onctueux et un soupçon de miel pour une boisson sucrée et délicieuse.",
        picture: "assets/images/product-pictures/strawberry-smoothie.jpg",
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
        picture: "assets/images/product-pictures/classic-beef-burger.jpg",
        price: "12",
        category: "meal",
        type: "burger"
    },
    {
        name: "Cheeseburger",
        description: "Goûtez à la perfection avec notre cheeseburger classique, mettant en vedette un patty de bœuf juteux recouvert de fromage fondu, de laitue croustillante, de tomate juteuse, d'oignon frais et de cornichons, le tout sur un pain au sésame grillé. Un délice à chaque bouchée !",
        picture: "assets/images/product-pictures/cheeseburger.jpg",
        price: "13",
        category: "meal",
        type: "burger"
    },
    {
        name: "Bacon Cheeseburger",
        description: "Laissez-vous séduire par notre bacon cheeseburger décadent, avec un patty de bœuf juteux garni de bacon croustillant, de fromage fondu, de laitue croquante, de tomate fraîche, d'oignon rouge et de cornichons, le tout sur un pain brioché. Une explosion de saveurs !",
        picture: "assets/images/product-pictures/bacon-cheeseburger.jpg",
        price: "14",
        category: "meal",
        type: "burger"
    },
    {
        name: "Mushroom Swiss Burger",
        description: "Plongez dans notre Mushroom Swiss Burger, mettant en vedette un patty de bœuf grillé garni de champignons sautés, de fromage suisse fondu, de laitue croustillante et d'ail aioli, le tout sur un pain pretzel. Un festin pour les papilles !",
        picture: "assets/images/product-pictures/mushroom-swiss-burger.jpg",
        price: "15",
        category: "meal",
        type: "burger"
    },
    {
        name: "BBQ Bacon Burger",
        description: "Dégustez notre BBQ Bacon Burger, mettant en vedette un patty de bœuf garni de bacon croustillant, de fromage cheddar fondant, de sauce BBQ fumée, de laitue croquante, de tomate juteuse et d'oignon rouge, sur un pain brioché toasté. Une explosion de saveurs BBQ !",
        picture: "assets/images/product-pictures/bbq-bacon-burger.jpg",
        price: "14",
        category: "meal",
        type: "burger"
    },
    {
        name: "Spicy Jalapeno Burger",
        description: "Laissez-vous emporter par notre Spicy Jalapeno Burger, avec un patty de bœuf garni de jalapenos tranchés, de fromage pepper jack fondu, de mayonnaise épicée, de laitue croquante, de tomate juteuse et d'oignon rouge, sur un pain brioché. Un coup de fouet épicé !",
        picture: "assets/images/product-pictures/spicy-jalapeno-burger.jpg",
        price: "14",
        category: "meal",
        type: "burger"
    },
    {
        name: "Vegetarian Burger",
        description: "Découvrez notre Vegetarian Burger, avec un patty végétarien à base de plantes, garni de laitue fraîche, de tomate juteuse, d'oignon rouge, de cornichons et de votre choix de condiments, sur un pain complet. Une option savoureuse pour les amateurs de légumes !",
        picture: "assets/images/product-pictures/vegetarian-burger.jpg",
        price: "13",
        category: "meal",
        type: "burger"
    },
    {
        name: "Caesar Salad",
        description: "Plongez dans une explosion de saveurs avec notre Caesar Salad classique. Croquante romaine, croutons croustillants, et vinaigrette César crémeuse, le tout garni de parmesan fraîchement râpé.",
        picture: "assets/images/product-pictures/caesar-salad.jpg",
        price: "12",
        category: "starter",
        type: "salad"
    },
    {
        name: "Caprese Bruschetta",
        description: "Dégustez une tranche de paradis avec notre bruschetta Caprese. Pain grillé frotté à l'ail, tomates fraîches, mozzarella fondante, basilic frais et une touche de glaçage balsamique.",
        picture: "assets/images/product-pictures/caprese.jpg",
        price: "10",
        category: "starter",
        type: "appetizer"
    },
    {
        name: "Tomato Soup",
        description: "Réchauffez-vous avec une délicieuse soupe de tomates maison. Faite avec des tomates mûres, des herbes fraîches et une touche de crème, cette soupe est un réconfort pour l'âme.",
        picture: "assets/images/product-pictures/tomato-soup.jpg",
        price: "6",
        category: "starter",
        type: "soup"
    },
    {
        name: "Garlic Bread",
        description: "Savourez notre pain à l'ail croustillant, garni de beurre à l'ail, de persil frais et de parmesan fondant. L'accompagnement parfait pour compléter votre repas.",
        picture: "assets/images/product-pictures/garlic-bread.jpg",
        price: "7",
        category: "starter",
        type: "bread"
    },
    {
        name: "Spinach Dip",
        description: "Plongez dans notre épinard Dip, une tartinade crémeuse d'épinards, de fromage fondu et d'assaisonnements délicieux, servie avec des croustilles de tortilla croustillantes.",
        picture: "assets/images/product-pictures/spinach-dip.jpg",
        price: "8",
        category: "starter",
        type: "dip"
    },
    {
        name: "Mozzarella Sticks",
        description: "Savourez nos bâtonnets de mozzarella croustillants, garnis de fromage mozzarella fondant et de chapelure assaisonnée, servis avec une sauce marinara chaude pour tremper.",
        picture: "assets/images/product-pictures/mozzarella.jpg",
        price: "9",
        category: "starter",
        type: "appetizer"
    },
    {
        name: "Crispy Calamari",
        description: "Plongez dans notre délicieux calamars croustillants, légèrement panés et frits à la perfection, servis avec une sauce au citron aïoli pour une expérience de saveur marine inoubliable.",
        picture: "assets/images/product-pictures/crispi-calamari.jpg",
        price: "11",
        category: "starter",
        type: "seafood"
    }        
]