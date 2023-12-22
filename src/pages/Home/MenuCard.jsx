

const MenuCard = ({cat}) => {

    const {category, image} = cat;

    console.log(cat);

    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <h4>{category}</h4>
        </div>
    );
};

export default MenuCard;