import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function FormInput({ onAddActivity }) {
    const hourNum = [...Array(10)].map((_, i) => (
        <option value={i + 1} key={i + 1} >{i + 1}</option>
    ));

    const [name, setName] = useState('');
    const [hours, setHours] = useState(1);

    function handleInput(e) {
        e.preventDefault();

        if (!name) return;

        const newItem = { name, hours, checked: false, id: Date.now() };
        onAddActivity(newItem);

        console.log(newItem);

        setName('');
        setHours(1);
    }

    return (
        <div className="flex flex-col items-center w-full h-auto p-12 bg-green-200">
            <h3 className="mb-8 text-2xl font-semibold">Hari ini mau ngapain kita?</h3>
            <form className="w-full" onSubmit={handleInput}>
                <div className="flex gap-6">
                    <select className="w-20 p-3 font-semibold cursor-pointer rounded-3xl" value={hours} onChange={(e) => setHours(Number(e.target.value))}>
                        {hourNum}
                    </select>
                    <input type="text" placeholder="nama kegiatan..." className="w-full pl-3 pr-3 font-semibold rounded-3xl" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button className="float-right p-3 mt-6 font-semibold bg-blue-400 rounded-3xl hover:bg-blue-600 hover:transition hover:duration-150">Tambah</button>
            </form>
        </div>
    );
}