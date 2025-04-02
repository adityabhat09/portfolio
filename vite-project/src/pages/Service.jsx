import React, { useState } from 'react';
import { Monitor, Layers, Users, Smartphone, Globe, Menu, X } from 'lucide-react';
import Footer from './components/Footer';

const Service = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation - Uncommented and made responsive */}
            

            {/* Hero Section - Made more responsive */}
            <section className="bg-gray-900 text-white h-[40vh] sm:h-[50vh] md:h-[60vh] flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-4">Service</h1>
                <div className="flex items-center">
                    <a href="#" className="text-white hover:text-red-500">Home</a>
                    <span className="mx-2">/</span>
                    <span className="text-red-500">Service</span>
                </div>
            </section>

            {/* Services Section - Digital Marketing */}
            <section className="py-12 sm:py-16 px-4 sm:px-6">
                <div className="container mx-auto text-center mb-10 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Digital Marketing</h2>
                    <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Card 1 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Business Strategy</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile App Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section - Strategy */}
            <section className="py-12 sm:py-16 px-4 sm:px-6">
                <div className="container mx-auto text-center mb-10 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Strategy</h2>
                    <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Card 1 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Business Strategy</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile App Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section - Creative Agency */}
            <section className="py-12 sm:py-16 px-4 sm:px-6">
                <div className="container mx-auto text-center mb-10 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Creative Agency</h2>
                    <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Card 1 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Business Strategy</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile App Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section - Development */}
            <section className="py-12 sm:py-16 px-4 sm:px-6">
                <div className="container mx-auto text-center mb-10 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Development</h2>
                    <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Card 1 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Business Strategy</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile App Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="group border border-gray-200 p-6 sm:p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Service;