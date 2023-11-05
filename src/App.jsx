import { useState } from "react";

/* eslint-disable react/prop-types */
export default function App() {
  // lifting state
  const [activitys, setActivitys] = useState([]);

  // Menambahkan array baru untuk ditampilkan
  function handleAddActivity(activity){
    setActivitys([...activitys, activity]);
  }

  // Menghapus activity array yang ditangkap menggunakan id
  function handleDeleteActivity(id){
    setActivitys((activitys) => activitys.filter((activity) => activity.id !== id));
  }
  
  
  return (
    <div className="w-full h-screen font-comfortaa">
      <Header name={"Andriawan"} />
      <div className="flex justify-between w-full h-full">
        <GroceryList activitys={activitys} onDeleteActivity={handleDeleteActivity} />
        <FormInput onAddActivity={handleAddActivity} />
      </div>
      <Footer />
    </div>
  );
}

function Header({ name }) {
  return (
    <div className="w-full h-auto p-6 bg-blue-100">
      <h1 className="mt-6 text-5xl font-bold text-center font-borel">Catatan Harian {name} 📝</h1>
    </div>
  );
}

function FormInput({onAddActivity}) {
  const hourNum = [...Array(10)].map((_, i) => (
    <option value={i + 1} key={i + 1} >{i + 1}</option>
  ));
  
  const [name, setName] = useState('');
  const [hours, setHours] = useState(1);

  function handleInput(e) {
    e.preventDefault();

    if(!name) return;
    
    const newItem = { name, hours, checked: false, id: Date.now() };
    onAddActivity(newItem);

    console.log(newItem);

    setName('');
    setHours(1);
  }
  
  return (
    <div className="flex flex-col items-center w-full h-full p-12 bg-green-200">
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

function GroceryList({activitys, onDeleteActivity}) {
  // const groceryItems = [
  //   {
  //     id: 1,
  //     name: 'Kopi Bubuk',
  //     hours: 2,
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'Gula Pasir',
  //     hours: 5,
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     name: 'Air Mineral',
  //     hours: 3,
  //     checked: false,
  //   },
  // ];
  return (
    <div className="w-full p-12 bg-green-200 border-r-2 border-gray-400">
      <h3 className="mb-8 text-2xl font-semibold text-center">List Kegiatan Kamu Hari Ini!</h3>
      <div className="flex items-center justify-between mb-8">
        <select className="p-3 font-semibold cursor-pointer rounded-3xl">
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button className="p-3 font-semibold bg-white rounded-3xl hover:bg-red-600 hover:transition-all hover:duration-150 hover:text-white">Bersihkan Daftar</button>
      </div>
      <div className="w-full">
        <ul className="flex flex-col w-full h-auto gap-8">
          {activitys.map((item) => (
            <li key={item.id} className="flex justify-between">
              <div className="flex gap-4 justify-normal">
                <input type={item.checked} className="w-5 h-5 cursor-pointer " />
                <span className="text-lg font-semibold w-[34rem]" style={item.checked ? { textDecoration: 'line-through' } : {}}>{item.hours} hours for {item.name}</span>
              </div>
              <button className="w-8 h-8 text-white bg-red-600 rounded-full cursor-pointer" onClick={() => {onDeleteActivity(item.id)}}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return <footer className="w-full p-12 text-xl font-semibold text-center bg-blue-200">Ada 10 kegiatan di daftar catatan harian anda, 5 kegiatan sudah diselesaikan (50%)</footer>;
}