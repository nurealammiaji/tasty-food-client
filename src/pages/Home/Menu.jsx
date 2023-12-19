import { useEffect, useState } from "react";


const Menu = () => {

    const [dishes, setDishes] = useState(null);
    const [soups, setSoups] = useState(null);
    const [salads, setSalads] = useState(null);
    const [pizzas, setPizzas] = useState(null);
    const [desserts, setDesserts] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setDishes(data))
    }, [])

    useEffect(() => {
        if (dishes) {
            const soup = dishes.filter(dish => dish.category === "soup");
            setSoups(soup);
            const salad = dishes.filter(dish => dish.category === "salad");
            setSalads(salad);
            const pizza = dishes.filter(dish => dish.category === "pizza");
            setPizzas(pizza);
            const dessert = dishes.filter(dish => dish.category === "dessert");
            setDesserts(dessert);

            setCategory([soup, salad, pizza, dessert]);
        }
    }, [dishes])

    return (
        <div>
            {
                (category) && 
                category.map(cat => console.log(cat))
            }
        </div>
    );
};

export default Menu;