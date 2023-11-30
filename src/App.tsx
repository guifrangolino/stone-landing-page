import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { MenosCustoSection } from "./components/MenosCustoSection";
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
        <MenosCustoSection />
      </main>
    </>
  );
}

export default App;
