import React from 'react';
import { Monitor, Layers, Users, Smartphone, Globe } from 'lucide-react';
import Footer from './components/Footer';

const Service = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            {/* <nav className="bg-gray-900 text-white py-4">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="mr-4">
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                                <span className="text-yellow-500 font-bold">trydo</span>
                            </div>
                        </div>
                        <span className="text-xl font-bold">trydo</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="hover:text-red-500">Home</a>
                        <a href="#" className="text-red-500">Service</a>
                        <a href="#" className="hover:text-red-500">About</a>
                        <a href="#" className="hover:text-red-500">Pages</a>
                        <a href="#" className="hover:text-red-500">Blocks</a>
                        <a href="#" className="hover:text-red-500">Contact</a>
                    </div>
                    <button className="border border-white rounded px-4 py-2 hover:bg-red-500 hover:border-red-500 transition duration-300">
                        BUY NOW
                    </button>
                </div>
            </nav> */}

            {/* Hero Section - 50vh height */}
            <section className="bg-gray-900 text-white h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">Service</h1>
                <div className="flex items-center">
                    <a href="#" className="text-white hover:text-red-500">Home</a>
                    <span className="mx-2">/</span>
                    <span className="text-red-500">Service</span>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-6xl font-bold mb-4">Digital Marketing</h2>
                    <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Business Strategy</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile App Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 6 - With hover effect like the others */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
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



            {/* Services Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-6xl font-bold mb-4">Strategy</h2>
                    <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Business Strategy</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile App Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 6 - With hover effect like the others */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
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



            {/* Services Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-6xl font-bold mb-4">Creative Agency</h2>
                    <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Business Strategy</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile App Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 6 - With hover effect like the others */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
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




            {/* Services Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-6xl font-bold mb-4">Development</h2>
                    <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Business Strategy</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Marketing & Reporting</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Monitor size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile App Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
                        <div className="text-red-500 mb-4 group-hover:text-white">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white">Website Development</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                    </div>

                    {/* Card 6 - With hover effect like the others */}
                    <div className="group border border-gray-200 p-8 rounded transition-all duration-300 hover:bg-red-500">
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