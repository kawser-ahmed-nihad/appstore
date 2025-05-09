import React from 'react';

const Top = () => {
    return (
        <div>
            <div className="py-6 max-w-11/12 mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Top Ranking List</h2>

                <div className="flex mx-auto flex-wrap gap-5">
                    {/* Box 1 */}
                    <div className="flex items-center justify-between bg-orange-100 text-orange-600 rounded-md px-4 py-2 w-[270px]">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🏆</span>
                            <p className="font-medium">Trending Android Apps</p>
                        </div>
                        <div className="flex items-center -space-x-2">
                            <img src="/icons/pubg.png" alt="App1" className="w-6 h-6 rounded-full border" />
                            <img src="/icons/whatsapp.png" alt="App2" className="w-6 h-6 rounded-full border" />
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="flex items-center justify-between bg-pink-100 text-pink-600 rounded-md px-4 py-2 w-[270px]">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🏆</span>
                            <p className="font-medium">Top Rated Apps</p>
                        </div>
                        <div className="flex items-center -space-x-2">
                            <img src="/icons/raspberry.png" alt="App3" className="w-6 h-6 rounded-full border" />
                            <img src="/icons/tools.png" alt="App4" className="w-6 h-6 rounded-full border" />
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="flex items-center justify-between bg-blue-100 text-blue-600 rounded-md px-4 py-2 w-[270px]">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🏆</span>
                            <p className="font-medium">Popular Android Apps</p>
                        </div>
                        <div className="flex items-center -space-x-2">
                            <img src="/icons/tiktok.png" alt="App5" className="w-6 h-6 rounded-full border" />
                            <img src="/icons/whatsapp.png" alt="App6" className="w-6 h-6 rounded-full border" />
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="flex items-center justify-between bg-purple-100 text-purple-600 rounded-md px-4 py-2 w-[270px]">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🏆</span>
                            <p className="font-medium">Latest Updated Apps</p>
                        </div>
                        <div className="flex items-center -space-x-2">
                            <img src="/icons/x.png" alt="App7" className="w-6 h-6 rounded-full border" />
                            <img src="/icons/tiktok.png" alt="App8" className="w-6 h-6 rounded-full border" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Top;