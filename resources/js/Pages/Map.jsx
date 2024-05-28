import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import logo from '../Components/images/logo.png';

export default function Map(props){
    
    const [select, setselect] = useState('');
    const [lati, setlati] = useState(null)
    const [longi, setlongi] = useState(null)
    var set = props.set;
    var lat = useState(null);
    var long = useState(null);
    function Fungsi(){
      const peta = useMap();
      peta.locate();

      useMapEvents({
        locationfound:(location)=>{
          lat = location.latitude
          long = location.longitude
        }
      })
      const tekan = () =>{
        peta.flyTo([lat,long], 18)
        console.log(lat,long)
      }
      return (
      <>
      <button className="absolute w-[48px] h-[48px] top-[200px] left-[80px] flex items-center justify-center z-[900] rounded-lg bg-white" onClick={tekan}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className='w-[30px] h-[30px]'><path fill="#FF570A" fill-rule="evenodd" d="M11.291 21.706 12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"/></svg>
      </button>

      </>
      ) 
    }

    function Daftar(){
      const peta = useMap();
      const [cari, setcari] = useState('');
      const tekan = (lati,longi) =>{
        peta.flyTo([lati,longi], 18)
      }
      return(
        <>
        
        <label className="absolute flex top-20 items-center z-[900] left-20">
            <input type="text" className="grow border-none font-plex focus:ring-0 bg-white rounded-l-lg w-[400px] h-[48px] text-black" placeholder="Cari Stasiun" onChange={(e) => setcari(e.target.value)}/>
            <button className='w-10 h-[48px] bg-oren flex items-center justify-center rounded-r-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-5 h-5"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </button>
          </label>
              <div className='w-[440px] h-[100px] absolute z-[900] bg-transparent top-[130px] left-20'>
              {set.filter((data) => {
                return cari === '' ? data : data.Stasiun.includes(cari);
              }).
              map((data, i) =>{  
                    return(
                      <>
                      {cari != "" ?
                      
                      <div>
                      <label className="w-[440px] h-[50px] z-seribu font-plex font-bold text-[15px] bg-white flex text-black items-center hover:bg-oren hover:text-white"onClick={()=>{tekan(data.Latitude,data.Longitude); setcari("")}}><p className='ml-10'>{data.Stasiun}</p></label>
                      </div> 
                        : <></>}
                            
                      </>
                )})}
              </div>
          </>
      )
    }
    return (
        <MapContainer center={[-6.1822261,106.795265]} zoom={13} scrollWheelZoom={true} style={{width:'100vw', height:'100vh'}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <div className="h-screen absolute z-seribu bg-red-600">
          {props.set ? props.set.map((data, i) =>{  
                return(
                  <>
                        <div key={i}>
                        <Marker position={[data.Latitude,data.Longitude]}>
                        <Popup>
                            <div className='w-4/5 h-[24px]'>
                              <p className='font-bold text-lg'>{data.Stasiun}</p>
                            </div>
                            <div className='w-full h-[80px]'>
                              <p className='font-bold text-sm'>{data.Alamat}</p>
                            </div>
                            <div className="drawer-content">
                            <label htmlFor="my-drawer" className="w-full h-[24px] flex justify-center items-center text-oren"onClick={()=>{setselect(data.Stasiun);}}>Klik Artikel</label>
                            </div> 
                        </Popup>
                      </Marker>
                      </div>
                      {data.Stasiun == select ? 
                        <>
                      <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side">
                          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                          <div className="menu w-96 m-0 p-0 min-h-full bg-white text-base-content">
                            <div className='w-full h-[80px] bg-oren'></div>
                            <div className='ml-5 mt-4 mb-3'>
                              <p className='text-3xl text-black font-bold'>{data.Stasiun}</p>
                            </div>
                            <div className='flex justify-center mb-3'>
                              <img className='w-80 object-cover border-2' src={'/gambar/' + data.Gambar} />
                            </div>
                            <div className='mb-3 flex justify-center'>
                              <p className='w-[85%] text-black'>{data.Deskripsi}</p>
                            </div>
                            <div className='mb-3 flex justify-center'>
                              <p className='w-[85%] text-black'>{data.Alamat}</p>
                            </div>
                            <div className='mb-3 flex justify-center'>
                              <p className='w-[85%] text-black'>{data.Sejarah}</p>
                            </div>
                          </div>
                        </div>
                      </div>
              </>:<></>
                      }
              </>)
            }):<></>}
            </div>
            <Link href='/' className='absolute z-seribu w-[200px] h-[200px] bg-transparent top-1 right-1'>
              <img src={logo} className='h-full object-contain'></img>
            </Link>
            
        <Fungsi/>
        <Daftar/>
        </MapContainer>
    );
}