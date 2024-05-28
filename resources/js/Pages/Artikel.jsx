import { Link, Head } from '@inertiajs/react';
import bg1 from '../Components/images/bg1.png';
import bg2 from '../Components/images/bg2.jpg';
import icon1 from '../Components/images/icon1.png';
import icon2 from '../Components/images/icon2.png';
import logo from '../Components/images/logo.png';
import home from '../Components/images/home.png';
import artikel from '../Components/images/artikel.png';
import login from '../Components/images/login.png';
import peta from '../Components/images/peta.png';
import sdg from '../Components/images/sdg.png';
import Paginator from '@/Components/Paginator';
import titik from '../Components/images/titik.png'
import { useState } from 'react';
export default function Welcome(props) {
    const [select, setselect] = useState('');
    const test = select;
    console.log(test);
    console.log('props:', props)
    console.log('props:', props.artikel)
    return (
        <div className='w-full h-screen bg-cover flex flex-col bg-center' style={{backgroundImage: `url(${bg2})`}}>
            <div className='bg-black/50 w-full h-full'>
                <div className='w-full h-[20%] flex'>
                    <Link href='/' className='w-[25%] flex justify-center items-center'>
                    <img src={logo} className='h-full object-contain'></img>
                    </Link>
                    <div className='w-[50%] flex justify-center items-center'>
                    <p className=' text-white place-self-center text-[60px] font-bold font-plex'>Artikel Stasiun</p>
                    </div>
                    <div className='w-[25%] justify-between'></div>
                </div>
                <div className='w-full h-[60%] relative flex items-center justify-center'>
                    <div className='w-[60%] h-[75%] bg-oren flex flex-col items-center'>
                    <div className='w-full h-[85%] grid grid-rows-3 grid-flow-col items-center'>
                    {props.artikel.data ? props.artikel.data.map((data, i) =>{  
                        return(
                            <>
                            <div key={i}>
                                    <label htmlFor="my_modal_7" className='btn w-[85%] border-0 bg-transparent ml-auto mr-auto flex justify-start hover:bg-transparent hover:border-b-4 hover:border-r-4 hover:border-white' onClick={()=>{setselect(data.Stasiun);}}>
                                        <img src={titik} className='ml-3'></img>
                                        <p className='text-[36px] text-white font-bold font-plex'>{data.Stasiun}</p> 
                                    </label>
                            </div>
                            {data.Stasiun == select ? 
                            <>
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal w-full h-screen" role="dialog">
                              <div className="modal-box w-[1200px] overflow-hidden h-[650px] p-0 max-w-7xl flex flex-col bg-white">
                                <div className='w-full h-[25%] flex justify-center items-center '>
                                <h3 className="font-bold text-[40px] text-black font-plex">{data.Stasiun}</h3>
                                </div>
                                <div className='w-full h-[75%] flex flex-row '>
                                    <div className='w-[40%] h-full flex justify-center '>
                                        <div className='w-[400px] h-[300px]'>
                                            <img className='w-full h-full object-cover object-center mt-5' src={'/gambar/' + data.Gambar}></img>
                                        </div>
                                    </div>
                                    <div className='w-[60%] h-full  flex flex-col items-center mt-3'>
                                        <p className="text-black font-inter m-0 text-[20px] w-[90%]">{data.Sejarah} {data.Deskripsi}</p>
                                        <div className='flex flex-row w-[90%] mt-5'>
                                        <p className='font-bold text-black text-[20px] font-inter'>Alamat:</p>
                                        <p className='text-black text-[20px] font-inter'>{data.Alamat}</p>
                                        </div>
                                        
                                    </div>
                                
                                </div>
                                
                              </div>
                              <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                            </div>
                            </>
                            :
                            <>
                            
                            </>}
                            
                            </>

                        )
                            
                    })
                    :<></>
                    }
                    </div>
                    <Paginator meta={props.artikel.meta} />
                    </div>
                    
                    <div className='h-full w-[12%] absolute right-0 flex justify-center items-center'>
                    <div className="drawer-content">
                                <label htmlFor="my-drawer-4" className="drawer-button btn border-0 rounded-full w-[90px] h-[90px] bg-oren flex justify-center items-center">
                                <img src={icon2} className='h-[70%] object-cover'></img>
                                </label>
                            </div> 
                        
                    </div>
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
                                <div className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={artikel} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Artikel</p>
                                </div>
                                <div className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={sdg} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>SDG's</p>
                                </div>
                                <div className='btn w-[90%] bg-white border-none h-[15%] flex flex-row justify-start group items-center rounded-none'>
                                    <img src={login} className='h-[70%] w-[20%] ml-10 object-contain mr-5'></img>
                                    <p className='w-[20%] font-plex font-bold text-[40px] text-oren'>Login</p>
                                </div>
                                
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
