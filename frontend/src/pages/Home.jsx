import React, { useState } from "react";
import ApiCalling from "../components/ApiCalling";

const Home = () => {
    const [memes, setMemes] = useState([]);
    const [search, setSearch] = useState("");
    const API = "https://api.imgflip.com/get_memes";
    const handleInput = (e) => {
        setSearch(e.target.value);

    };
    const filteredMemes = memes.filter((meme) =>
        meme.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-8">
                Meme Template Viewer
            </h1>

            <ApiCalling API={API} onData={(data) => setMemes(data.data.memes)} />

            <div className="text-center mt-4">
                <input type="text" placeholder="Search Meme" value={search} onChange={handleInput} className="border-2 w-[85%] h-12 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {filteredMemes.length > 0 ? (
                    filteredMemes.map((meme) => (
                        <div key={meme.id} className="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <img className="w-full mx-4" src={meme.url} alt={meme.name}/>
                            <div className="px-4 py-2">
                                <div className="font-bold text-lg mb-2 ">
                                    {meme.name}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 text-lg mt-6">
                        No memes found.
                    </p>
                )}
            </div>
        </div>
    );
};
export default Home;
