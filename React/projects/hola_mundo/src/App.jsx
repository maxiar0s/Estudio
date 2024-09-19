import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="kikobeats">Kiko Beats</TwitterFollowCard>
      <TwitterFollowCard userName="pheralb">Pablo Hernanez</TwitterFollowCard>;
    </section>
  );
}
