import { Head, Link} from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
export default function Dashboard(props) {
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
          Stasiun, Latitude, Longitude, Alamat, Deskripsi, Sejarah, Gambar
      }
      Inertia.post('/upload',data)
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
    return (
      <><div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><Link method="post" href={route('logout')} as="button">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
        <div>{notif && props.flash.message}</div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Nama Stasiun" onChange={(Stasiun) => setStasiun(Stasiun.target.value)}/>
          </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="number" className="grow" placeholder="Latitude"  onChange={(Latitude) => setLatitude(Latitude.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="number" className="grow" placeholder="Longitude"  onChange={(Longitude) => setLongitude(Longitude.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Alamat"  onChange={(Alamat) => setAlamat(Alamat.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Deskripsi"  onChange={(Deskripsi) => setDeskripsi(Deskripsi.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Sejarah"  onChange={(Sejarah) => setSejarah(Sejarah.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type='file' name='Gambar' id='Gambar' onChange={handleFileChange}></input>
        </label>
        <button className='btn' onClick={()=> Submit()}>Submit</button>
      </>
    );
}
