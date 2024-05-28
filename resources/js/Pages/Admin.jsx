import { Head, Link} from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
export default function Admin(props) {
    console.log(props)
    return(
        <div className='bg-white'>
        <div className="navbar bg-white border-b-2 border-oren">
      <div className="flex-1">
        <Link href='/admin' className="btn btn-ghost bg-transparent text-black text-xl hover:text-oren hover:bg-transparent">Transitspot</Link>
      </div>
      <div className="flex-none">
      <Link href='/admin/input' as='button' className='btn mr-5 bg-oren border-0 text-black hover:text-white'>Tambah Stasiun</Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-oren hover:bg-base-100">
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-oren text-white hover:text-black rounded-box w-52">
            <li><Link className='bg-oren' method="post" href={route('logout')} as="button">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="overflow-x-auto bg-white ">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className='border-1 border-oren text-black text-base'>
        <th>Nama Stasiun</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Alamat</th>
        <th>Deskripsi</th>
        <th>Sejarah</th>
        <th>Gambar</th>
        <th></th>
      </tr>
    </thead>
    <tbody className='border-1 border-oren text-black'>
    {props.artikel ? props.artikel.map((data, i) =>{  
                        return(
                            <>
                              <tr key={i} className="hover hover:text-white border-oren">
                                <td><label>{data.Stasiun}</label></td>
                                <td><label>{data.Latitude}</label></td>
                                <td><label>{data.Longitude}</label></td>
                                <td><label>{data.Alamat}</label></td>
                                <td><label>{data.Deskripsi}</label></td>
                                <td><label>{data.Sejarah}</label></td>
                                <td><img className='w-20 h-20' src={'/gambar/' + data.Gambar}></img></td>
                                <td><Link href={route('edit')} method='get' className='btn bg-oren border-0 text-black hover:text-white' data={{id: data.id}} as='button'>Edit</Link></td>
                                <td><Link href={route('hapus')} method='post' className='btn bg-oren border-0 text-black hover:text-white' data={{id: data.id}} as='button'>Hapus</Link></td>
                              </tr>
                            </>
                        )
                            
                    })
                    :<></>
                    }
                    </tbody>
                   </table>
                    </div>
      
      </div>
    )
}