import { Link, Head } from '@inertiajs/react';
import bg1 from '../Components/images/bg1.png';
import icon1 from '../Components/images/icon1.png';
import icon2 from '../Components/images/icon2.png';
import logo from '../Components/images/logo.png';
import home from '../Components/images/home.png';
import artikel from '../Components/images/artikel.png';
import login from '../Components/images/login.png';
import peta from '../Components/images/peta.png';
import sdg from '../Components/images/sdg.png';
export default function Welcome(props) {
    console.log(props)
    return (
        <div className='w-full h-screen bg-cover flex flex-col' style={{backgroundImage: `url(${bg1})`}}>
                <div className='w-full h-[20%] flex'>
                    <Link href='/' className='w-[25%] flex justify-center items-center'>
                    <img src={logo} className='h-full object-contain'></img>
                    </Link>
                    <div className='w-[50%] flex justify-center items-center'>
                    <label className=' text-white place-self-center text-[60px] font-bold font-plex'>Transitspot</label>
                    </div>
                    <div className='w-[25%] justify-between'></div>
                </div>
                <div className='w-full h-[60%] flex items-center justify-between'>
                    <div className='w-[45%] h-[70%] ml-10 bg-white/10 flex justify-center items-center flex-col'>
                        <div className='text-white  font-inter text-[32px] w-[90%] h-[80%] flex flex-col justify-between'>
                            Selamat datang di TransitSpot: Temukan stasiun kereta terdekat dengan mudah! TransitSpot adalah sistem informasi geografis interaktif yang memungkinkan Anda menemukan stasiun kereta terdekat di sekitar lokasi Anda.
                            <Link href='/artikel' className="btn border-0 w-[200px] h-[40px] rounded-xl bg-oren text-white flex flex-row justify-center items-center">
                                <p className='font-plex font-semibold text-[18px] mr-3'>Lihat Artikel</p>
                            </Link>
                        </div>
                    </div>
                    <div className='h-full w-[12%] flex justify-center items-center'>
                    <div className="drawer-content">
                                <label htmlFor="my-drawer-4" className="drawer-button btn border-0 rounded-full w-[90px] h-[90px] bg-oren flex justify-center items-center">
                                <img src={icon2} className='h-[70%] object-cover'></img>
                                </label>
                            </div> 
                        
                    </div>
                    
                </div>
                <div className='w-full h-[20%] flex justify-center items-center'>
                    <Link href='/map' className="btn border-0 w-[250px] h-[40px] rounded-lg bg-oren text-white flex flex-row justify-center items-center">
                    <p className='font-plex font-semibold text-[18px] mr-3'>Cari Stasiun</p>
                    <img src={icon1} className='h-[50%] object-contain'></img>
                    </Link>
                </div>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-side" >
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className="menu w-[25%] h-full bg-transparent p-0 justify-center">
                            <div className='w-full h-[70%] bg-white rounded-l-3xl flex flex-col justify-around items-center'>
                                <div className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={home} className='h-[70%] w-[20%] ml-10 object-contain mr-5 '></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Home</p>
                                </div>
                                <Link href='/map' className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={peta} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Peta</p>
                                </Link>
                                <Link href='/artikel' className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={artikel} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Artikel</p>
                                </Link>
                                <div className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={sdg} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>SDG's</p>
                                </div>
                                <Link href={route('login')} className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={login} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Login</p>
                                </Link>
                                
                            </div>
                        </ul>
                    </div>
                </div>
        </div>
    );
}
