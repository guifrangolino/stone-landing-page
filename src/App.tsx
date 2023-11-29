import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { PageSectionLinks } from "./components/PageSectionLinks";
import { ParceriasSection } from "./components/ParceriasSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <PageSectionLinks />
        <ParceriasSection />
      </main>
    </>
  );
}

export default App;
