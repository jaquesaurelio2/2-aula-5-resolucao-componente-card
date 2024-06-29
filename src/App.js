import Card from "./components/Card";
import "./styles.css";

export default function App() {
  return (
    <div className="contacts">
      <Card
        image="https://placedog.net/222"
        name="Caramelison"
        phone="(81) 98888 8888"
        email="caramelison@dogo.com"
      />
    </div>
  );
}
