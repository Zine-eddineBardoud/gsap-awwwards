import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        })
    });

    return (
        <main>
            <NavBar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroSection />
                    <MessageSection />
                    <FlavorSection />
                    <div className="h-dvh"></div>
                </div>
            </div>
        </main>
    )
}

export default App