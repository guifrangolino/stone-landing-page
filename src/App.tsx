import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { PageSectionLinks } from "./components/PageSectionLinks";
import { PartnershipsSection } from "./components/PartnershipsSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <PageSectionLinks />
        <PartnershipsSection />
      </main>
    </>
  );
}

export default App;
