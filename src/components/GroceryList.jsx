/* eslint-disable react/prop-types */
import { useState } from "react";

export default function GroceryList({ activitys, onDeleteActivity, onToggleActivity, onClearActivitys }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedActivity;

    switch (sortBy) {
        case 'name':
            sortedActivity = activitys.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'checked':
            sortedActivity = activitys.slice().sort((a, b) => a.checked - b.checked);
            break;
        default:
            sortedActivity = activitys;
            break;
    }


    return (
        <div className="w-full p-12 bg-green-200 border-r-2 border-gray-400">
            <h3 className="mb-8 text-2xl font-semibold text-center">List Kegiatan Kamu Hari Ini!</h3>
            <div className="flex items-center justify-between mb-8">
                <select className="p-3 font-semibold cursor-pointer rounded-3xl" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button className="p-3 font-semibold bg-white rounded-3xl hover:bg-red-600 hover:transition-all hover:duration-150 hover:text-white" onClick={onClearActivitys}>Bersihkan Daftar</button>
            </div>
            <div className="w-full">
                <ul className="flex flex-col w-full h-auto gap-8">
                    {sortedActivity.map((item) => (
                        <li key={item.id} className="flex justify-between">
                            <div className="flex gap-4 justify-normal">
                                <input type="checkbox" checked={item.checked} className="w-5 h-5 cursor-pointer" onChange={() => { onToggleActivity(item.id) }} />
                                <span className="text-lg font-semibold w-[34rem]" style={item.checked ? { textDecoration: 'line-through' } : {}}>{item.hours} hours for {item.name}</span>
                            </div>
                            <button className="w-8 h-8 text-white bg-red-600 rounded-full cursor-pointer" onClick={() => { onDeleteActivity(item.id) }}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}