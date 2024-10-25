import CandyCard from "./CandyCard.js";
import candy from "./candydata.js";

const CandyList = () => {
    return <div className="candy_container">
        {candy.map((candy, index) => (
            <CandyCard key={index} candy={candy} />
        ))}
    </div>
};

export default CandyList;