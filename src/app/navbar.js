import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className="flex flex-col lg:flex-row items-center justify-between p-6 bg-none w-screen sticky top-0 z-50">
            <div className="flex items-center justify-between lg:justify-start w-full lg:w-auto">
                <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={375} height={150} />
                </Link>
            </div>

        </nav>
    );
};



export default Navbar;