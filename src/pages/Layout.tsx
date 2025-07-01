import { Link, Outlet } from 'react-router-dom';
import githubIcon from '../assets/github-mark-white.svg';

const Layout = () => {
    return (
        <>
            <div style={{ zIndex: 9999, position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' , display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'black'}}>
                <a target='_blank' href='https://github.com/AZAM-Fabien/fluid-effect-maskeffect-lazyloading'>
                    <img style={{ width: '2rem', height: '2rem' }} src={githubIcon} alt="github" />
                </a>

                <nav className='nav' style={{ paddingLeft: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', background: 'black'}}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>example 1</Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/example2NoMask'>example 2</Link>
                </nav>
            </div>

            <Outlet />
        </>
    );
};

export default Layout;
