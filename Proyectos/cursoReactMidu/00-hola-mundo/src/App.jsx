import "./App.css";
import "./TwitterFollowCard.jsx";
import TwitterFollowCard from "./TwitterFollowCard.jsx";

const App = () => {
    const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
        <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Ángel Durán" />
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="pheralb" name="Nombre Aleatorio" />
        <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="elonmusk" name="Elon Musk" />
    </section>
  )
}

export default App;