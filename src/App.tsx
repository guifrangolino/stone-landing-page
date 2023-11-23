import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { PageSectionLinks } from "./components/PageSectionLinks";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <PageSectionLinks />
      </main>
    </>
  );
}

export default App;
