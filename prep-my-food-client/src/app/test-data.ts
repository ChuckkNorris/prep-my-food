import { Meal } from './models/meal';
export const Preferences = [
    { title: "Vegetables", 
        options: ['Broccoli', 'Green Beans', 'Carrots', 'Beans', 'Tomato', 'Salad', 'Spinach']
    },
    { title: "Proteins", 
        options: ['Chicken', 'Beef', 'Pork', 'Turkey', 'Egg', 'Sausage']
    },
    { title: "Carbohydrates", 
        options: ['Rice', 'Bread', 'Red Potatoes', 'Sweet Potatoes', 'Pasta']
    },
]

export const Meals: Meal[] = [
    { title: "Chicken Soup", 
        ingredients: ['Chicken', 'Green Beans', 'Rice'],
        nutrients: ['465 calories', '45g protein', '25g carbs'],
        imageUrl: 'http://thefitfork.com/wp-content/uploads/2017/02/Chicken-Meal-Prep-broth-on-soup.jpg'
    },
    { title: "Breakfast Burrito", 
        ingredients: ['Egg', 'Sausage', 'Rice', 'Beans', 'Tomato', 'Spinach'],
        nutrients: ['560 calories', '43g protein', '23g carbs'],
        imageUrl: 'http://thisbeautifuldayblog.com/wp-content/uploads/2016/02/breakfast-burritos.jpg'
    },
    { title: "BBQ Pork Sandwich", 
        ingredients: ['Pork', 'BBQ Sauce', 'Bread', 'Tomato'],
        nutrients: ['478 calories', '42g protein', '29g carbs'],
        imageUrl: 'http://www.acedarspoon.com/wp-content/uploads/2015/10/1-Slow-Cooker-BBQ-Pulled-Chicken-1-of-1.jpg'
    },
    { title: "Turkey Spaghetti", 
        ingredients: ['Turkey', 'Tomato', 'Pasta', 'Salad'],
        nutrients: ['510 calories', '43g protein', '31g carbs'],
        imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/b8/92/05/b89205fb91de154a6dc7e7a358f8e359.jpg'
    },
]