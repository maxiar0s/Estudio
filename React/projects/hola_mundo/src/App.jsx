import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const name = useState("midudev");
  return (
    <section className="App">
      <TwitterFollowCard userName="kikobeats" initialIsFollowing={true}>
        Kiko Beats
      </TwitterFollowCard>
      <TwitterFollowCard userName="pheralb">Pablo Hernanez</TwitterFollowCard>;
    </section>
  );
}
