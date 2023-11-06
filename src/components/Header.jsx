// eslint-disable-next-line react/prop-types
export default function Header({ name }) {
    return (
        <div className="w-full h-auto p-6 bg-blue-100">
            <h1 className="mt-6 text-5xl font-bold text-center font-borel">Catatan Harian {name} 📝</h1>
        </div>
    );
}