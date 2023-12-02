import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { MenosCustoSection } from "./components/MenosCustoSection";
import { Numero1EmAtendimento } from "./components/Numero1EmAtendimento";
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
        <Numero1EmAtendimento />
      </main>
    </>
  );
}

export default App;
