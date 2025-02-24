export const categories =[
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizza.Icon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/pizza.Icon.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/pizza.Icon.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/pizza.Icon.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/pizza.Icon.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/pizza.Icon.png'),
    },
]

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurant: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.759407,
            lat: 38.252665,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes:[
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
            ]
        },
        {
            id: 2,
            name: 'McDonald',
            image: require('../assets/images/mc donald.png'),
            description: 'Classic cheeseburgers',
            lng: -85.759407,  
            lat: 38.252665,
            address: '123 Main Street',
            stars: 4.5,
            reviews: '10.2k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 2,
                    name: 'burger',
                    description: 'Juicy beef burger',
                    price: 8,
                    image: require('../assets/images/mc donald.png')
                }
            ]
        },
        {
            id: 3,
            name: 'KFC',
            image: require('../assets/images/kfc.png'),
            description: 'Crispy fried chicken',
            lng: -85.759407,  
            lat: 38.252665,
            address: '567 Kentucky Street',
            stars: 4.3,
            reviews: '5.7k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 3,
                    name: 'chicken',
                    description: 'Spicy fried chicken',
                    price: 12,
                    image: require('../assets/images/kfc.png')
                }
            ]
        }
    ]
}