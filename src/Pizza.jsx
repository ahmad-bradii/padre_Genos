const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img
        src={`https://padre-genos-api-1.onrender.com${props.image}`}
        alt={props.name}
      />
    </div>
  );
};

export default Pizza;
