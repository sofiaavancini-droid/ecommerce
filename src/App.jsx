import ProductCard from "./components/ProductCard";

export default function App() {

  const productos = [
    { id: 1, name: "Activador de brillo ", price: 12000, stock: 20 },
    { id: 2, name: "Cera para plásticos interiores", price: 8000, stock: 0 },
    { id: 3, name: "Esponja", price: 4700, stock: 5 },
    { id: 4, name: "Shampoo para lavado", price: 7000, stock: 9 },
    { id: 5, name: "Paños de microfiba", price: 3000, stock: 0 },
  ];

  return (
    <div>
      <h1>Lista de productos disponibles</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {productos
          .filter(p => p.stock > 0)
          .map(p => (
            <ProductCard key={p.id} {...p} />
          ))
        }
      </div>
    </div>
  );
}