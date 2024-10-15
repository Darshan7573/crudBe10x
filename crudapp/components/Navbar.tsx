import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-6 py-4 shadow-lg w-full">
      <div className="text-white font-bold text-xl">Task Management</div>
      <div className="flex space-x-4">
        <Link
          className="text-white hover:bg-slate-700 px-3 py-2 rounded transition duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="bg-white text-slate-800 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-slate-200 transition duration-300"
          href="/addTopic"
        >
          Add Tasks
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
