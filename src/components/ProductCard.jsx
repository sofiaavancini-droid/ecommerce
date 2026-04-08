export default function ProductCard({ name, price, stock }) {
  return (
    <div style={{
      borderRadius: "12px",
      padding: "16px",
      width: "220px",
      height: "150px",
      backgroundColor: "#ecf1fa",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "white",
      fontFamily:"Verdana, sans-serif"
      
    }}>
     <h2 style={{color: "black",  fontFamily: "Arial, sans-serif", textDecoration: "underline"}}>{name}</h2>

<p style={{ fontWeight: "bold", color:"black"}}>
  ${price.toLocaleString("es-AR")}
  <p>Cantidad: {stock}</p>
</p>

<p style={{
  color: stock > 0 ? "#22c55e" : "#ef4444",
  fontWeight: "bold"
  
}}>
  {stock > 0 ? "En stock" : "Sin stock"}
</p>
    </div>
  );
}
