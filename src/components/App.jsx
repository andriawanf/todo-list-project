import { useState } from "react";
import Header from "./Header";
import FormInput from "./FormInput";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

/* eslint-disable react/prop-types */
export default function App() {
  // lifting state
  const [activitys, setActivitys] = useState([]);

  // Menambahkan array baru untuk ditampilkan
  function handleAddActivity(activity) {
    setActivitys([...activitys, activity]);
  }

  // Menghapus activity array yang ditangkap menggunakan id
  function handleDeleteActivity(id) {
    setActivitys((activitys) => activitys.filter((activity) => activity.id !== id));
  }

  // menambahkan fungsi checked sesuai id activity
  function handleToggleActivity(id) {
    setActivitys((activitys) => activitys.map((activity) => activity.id === id ? { ...activity, checked: !activity.checked } : activity));
  }

  function handleClearActivitys() {
    setActivitys([]);
  }

  return (
    <div className="w-full h-screen font-comfortaa">
      <Header name={"Andriawan"} />
      <div className="flex justify-between w-full h-screen">
        <GroceryList activitys={activitys} onDeleteActivity={handleDeleteActivity} onToggleActivity={handleToggleActivity} onClearActivitys={handleClearActivitys} />
        <FormInput onAddActivity={handleAddActivity} />
      </div>
      <Footer activitys={activitys} />
    </div>
  );
}