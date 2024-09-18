import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="kikobeats">
        Kiko Beats
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="pheralb">
        Pablo Hernanez
      </TwitterFollowCard>
      ;
    </section>
  );
}
