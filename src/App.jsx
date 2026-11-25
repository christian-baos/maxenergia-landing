import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

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