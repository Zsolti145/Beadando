function Card({card,onEdit,onDelete}) {
  return (
    <>
        <div key={card.id} className="card" style={{ width: "18rem" }}>
          <img src={card.image} className="card-img-top" alt="..." height={"250px"} />
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">{card.about}</p>
            <p className="card-text">{card.price} Ft</p>
            <button className="btn">Buy</button>
          </div>
          <button onClick={() => onEdit(card)}> Edit  </button>
        <button className="btn" onClick={() => onDelete(card.id)}> Delete </button>
         </div>
    </>
  );
}

export default Card;