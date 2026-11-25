import Header from './components/header';
import Hero from './components/hero';
import Benefits from './components/benefits';
import LeadForm from './components/leadForm';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}