import { Outlet, NavLink } from 'react-router-dom';
import Matrixbg from '../ui/Matrixbg';
export default function Layout() {
    return (

        <div className="">
            <div className="flex justify-around">
                <div className="p-2 text-zinc-300 text-2xl font-extrabold">
                    HNDRK (-_-)\
                </div>
                <nav className="flex p-1 text-white text-2xl font-extrabold">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive
                            ? 'text-cyan-600 font-bold p-1  hover:text-cyan-500'
                            : 'text-white p-1  hover:text-cyan-500'
                    }>
                        Projects/
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive
                            ? 'text-cyan-600 font-bold p-1  hover:text-cyan-500'
                            : 'text-white p-1  hover:text-cyan-500'
                    }>About/</NavLink>
                    <NavLink to="/blog" className={({ isActive }) =>
                        isActive
                            ? 'text-cyan-600 font-bold p-1  hover:text-cyan-500'
                            : 'text-white p-1  hover:text-cyan-500'
                    }>Blog/</NavLink>
                </nav>
            </div>
            <main>
                <Matrixbg />
                <Outlet />
            </main>
            <footer><div className="flex justify-center text-zinc-200"> ©hEndrIk</div></footer>
        </div>

    );
}