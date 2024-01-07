
import FoodCard from '../FoodCard/FoodCard';

const ShopCards = ({items}) => {
    return (
        <div className="grid gap-5 md:grid-cols-3">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default ShopCards;