import { Head, Link} from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
export default function Edit(props) {
  console.log(props)
  const [Stasiun, setStasiun] = useState('');
  const [Latitude, setLatitude] = useState('');
  const [Longitude, setLongitude] = useState('');
  const [Alamat, setAlamat] = useState('');
  const [Deskripsi, setDeskripsi] = useState('');
  const [Sejarah, setSejarah] = useState('');
  const [Gambar, setGambar] = useState('');
  const [notif, setnotif] = useState(false)
  
  const Submit = () => {
      const data = {
        id:props.data.id,  Stasiun, Latitude, Longitude, Alamat, Deskripsi, Sejarah, Gambar
      }
      Inertia.post('/admin/update',data)
      setnotif(true)
      setStasiun('')
      setLatitude('')
      setLongitude('')
      setAlamat('')
      setDeskripsi('')
      setSejarah('')

  }
  const handleFileChange = (e) => {
      setGambar(e.target.files[0]);
  }
    return(
      <div className='bg-white h-screen'>
      <div className="navbar bg-base-100 border-b-2 border-oren absolute z-1">
      <div className="flex-1">
      <Link href='/admin' className="btn btn-ghost bg-transparent text-white text-xl hover:text-oren hover:bg-transparent">Transitspot</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-oren text-white hover:text-black rounded-box w-52">
            <li><Link className='bg-oren' method="post" href={route('logout')} as="button">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center text-white  h-full bg-base-100'>
        <label className="input input-bordered flex items-center mt-2 w-[30%] border-oren">
          <input type="text" className="grow border-none  placeholder:text-white focus:ring-0 " placeholder={props.data.Stasiun} onChange={(Stasiun) => setStasiun(Stasiun.target.value)}/>
          </label>
        <label className="input input-bordered flex items-center mt-2 w-[30%] border-oren">
          <input type="number" className="grow border-none  placeholder:text-white focus:ring-0 " placeholder={props.data.Latitude}  onChange={(Latitude) => setLatitude(Latitude.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center mt-2 w-[30%] border-oren">
          <input type="number" className="grow border-none  placeholder:text-white focus:ring-0 " placeholder={props.data.Longitude}  onChange={(Longitude) => setLongitude(Longitude.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center mt-2 w-[30%] border-oren">
          <input type="text" className="grow border-none  placeholder:text-white focus:ring-0 " placeholder={props.data.Alamat}  onChange={(Alamat) => setAlamat(Alamat.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center mt-2 w-[30%] border-oren">
          <input type="text" className="grow border-none  placeholder:text-white focus:ring-0 " placeholder={props.data.Deskripsi}  onChange={(Deskripsi) => setDeskripsi(Deskripsi.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center mt-2 w-[30%] border-oren">
          <input type="text" className="grow border-none  placeholder:text-white focus:ring-0 " placeholder={props.data.Sejarah}  onChange={(Sejarah) => setSejarah(Sejarah.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center mt-2 w-[30%] border-oren">
          <input type='file' name='Gambar' id='Gambar' onChange={handleFileChange}></input>
        </label>
        <button className='btn mt-5 w-32 bg-oren border-none text-white hover:bg-white hover:text-black' onClick={()=> Submit()}>Update</button>
      </div>
    </div>
    )
}