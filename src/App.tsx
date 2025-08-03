import ArtisticHero from './components/ArtisticHero';
import MinimalAbout from './components/MinimalAbout';
import GeometricSkills from './components/GeometricSkills';
import MinimalProjects from './components/MinimalProjects';
import ArtisticContact from './components/ArtisticContact';
import WalkingMascot from './components/WalkingMascot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Interactive elements */}
      <WalkingMascot />
      
      <main>
        <ArtisticHero />
        <MinimalAbout />
        <GeometricSkills />
        <MinimalProjects />
        <ArtisticContact />
      </main>
    </div>
  );
}

export default App;
