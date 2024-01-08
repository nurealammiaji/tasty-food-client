
import FoodCard from '../FoodCard/FoodCard';

const ShopCards = ({ items }) => {
    return (
        <div>
            <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default ShopCards;