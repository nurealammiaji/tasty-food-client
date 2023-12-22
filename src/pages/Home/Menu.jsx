import { useEffect, useState } from "react";
import MenuCard from './MenuCard';


const Menu = () => {

    const [dishes, setDishes] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setDishes(data))
    }, [])

    useEffect(() => {
        if (dishes) {
            const soup = dishes.filter(dish => dish.category === "soup");
            const salad = dishes.filter(dish => dish.category === "salad");
            const pizza = dishes.filter(dish => dish.category === "pizza");
            const dessert = dishes.filter(dish => dish.category === "dessert");

            setCategories([soup, salad, pizza, dessert]);
        }
    }, [dishes])

    return (
        <div>
            {
                (categories) &&
                categories.map(cat => <MenuCard key={cat._id} cat={cat}></MenuCard>)
            }
        </div>
    );
};

export default Menu;