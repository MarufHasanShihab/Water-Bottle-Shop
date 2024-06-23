import "./Bottle.css"

const Bottle = ({bottle}) => {
    const {name, img} = bottle;
    return (
        <div>
            <div className="bottle">
            <div>
            <img src={img}/>
            <h4>{name}</h4>
            </div>
            </div>
        </div>
    );
};

export default Bottle;