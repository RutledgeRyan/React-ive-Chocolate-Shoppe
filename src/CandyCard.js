import { useState } from "react";
const CandyCard = ({candy}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal (true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return(
        <div className="candy-card">
            <img src={candy.image} alt= {candy.name}
            style={{
                padding: "10px 20px",
                textAlign: "center",
                color: "goldenrod",
                background: "beige",
                width: "100px",
                height: "100px",
            }}
            />
            <h3>{candy.name}</h3>
            <p>{candy.description}</p>
            <button onClick={handleOpenModal}>Show Calories and Ingredients</button>

            {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h4>Caloric and Ingredient Information</h4>
            <p>{candy.calories}</p>
            <p>{candy.ingredients}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}

        </div>
    );
};

export default CandyCard;