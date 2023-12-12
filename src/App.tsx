import { FormasDePagamento } from "./components/FormasDePagamento";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { MenosCustoSection } from "./components/MenosCustoSection";
import { Numero1EmAtendimento } from "./components/Numero1EmAtendimento";
import { PageSectionLinks } from "./components/PageSectionLinks";
import { ParceriasSection } from "./components/ParceriasSection";
import { TotalmenteIntegradoSection } from "./components/TotalmenteIntegradoSection";

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
        <TotalmenteIntegradoSection />
        <FormasDePagamento />
      </main>
    </>
  );
}

export default App;
