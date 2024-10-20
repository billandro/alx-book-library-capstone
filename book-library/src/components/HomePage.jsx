import { useState } from 'react';
import BookCard from './BookCard';
import HeroSection from './HeroSection';

function HomePage() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="border-none m-0 flex flex-row min-h-fit justify-center ">
            <main>
                <HeroSection />
                <BookCard />
            </main>
        </div>
    );
}

export default HomePage