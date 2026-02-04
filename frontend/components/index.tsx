import Navbar from './Navbar';
import Hero from './Hero';
import ApplicationForm from './ApplicationForm';
import Footer from './Footer';

export { Navbar, Hero, ApplicationForm, Footer };

const HomePage = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display">
            <Navbar />
            <main className="flex grow flex-col">
                <Hero />
                <ApplicationForm />
                <Footer />
            </main>
        </div>
    );
};

export default HomePage;