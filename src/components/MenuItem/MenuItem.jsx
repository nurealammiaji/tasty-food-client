

const MenuItem = ({ menu }) => {

    const { image, name, recipe, price } = menu;

    return (
        <div className="flex gap-5">
            <div>
                <img src={image} className="w-[200px] h-[100px] rounded-tr-[200px] rounded-b-[200px]" alt="" />
            </div>
            <div>
                <h4><span className="text-xl">{name} </span>------------------</h4>
                <p>{recipe}</p>
            </div>
            <div>
                <h5 className="text-yellow-600">${price}</h5>
            </div>
        </div>
    );
};

export default MenuItem;