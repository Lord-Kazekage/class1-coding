function CartItems({ adnan }) {
  return (
    <>
      {adnan.map((adnan) => (
        <div className="crd">
          <h3>{adnan.name}</h3>
          <p className="text">{adnan.desc}</p>
          <button className="btn">Add to Cart</button>
        </div>
      ))}
    </>
  );
}

export default CartItems;
