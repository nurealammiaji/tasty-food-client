

const MenuItem = ({ item }) => {

    const { image, name, recipe, price } = item;

    return (
        <div className="flex justify-center gap-5">
            <figure>
                <img src={image} className="max-w-[118px] min-h-[104px] rounded-tr-[200px] rounded-b-[200px]" alt="" />
            </figure>
            <div>
                <h4><span className="text-xl uppercase">{name} </span>------------------</h4>
                <p className="mt-2 text-slate-500">{recipe}</p>
            </div>
            <div>
                <h5 className="text-lg font-medium text-yellow-600">${price}</h5>
            </div>
        </div>
    );
};

export default MenuItem;