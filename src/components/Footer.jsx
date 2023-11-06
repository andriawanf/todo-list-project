/* eslint-disable react/prop-types */
export default function Footer({ activitys }) {
    if (activitys.length === 0) return <footer className="w-full p-12 text-xl font-semibold text-center bg-blue-200">Belum ada Kegiatan yang harus dilakukan!</footer>;

    const totalActivitys = activitys.length;
    const checkedActivitys = activitys.filter((activity) => activity.checked).length;
    const percentage = Math.round((checkedActivitys / totalActivitys) * 100);

    return <footer className="w-full p-12 text-xl font-semibold text-center bg-blue-200">Ada {totalActivitys} kegiatan di daftar catatan harian anda, {checkedActivitys} kegiatan sudah diselesaikan ({percentage}%)</footer>;
}