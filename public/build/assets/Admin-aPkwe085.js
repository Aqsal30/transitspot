import{j as e,a as t}from"./app-XUt0aydd.js";import"./index-BVcWpv6S.js";function d(s){return console.log(s),e.jsxs("div",{className:"bg-white",children:[e.jsxs("div",{className:"navbar bg-white border-b-2 border-oren",children:[e.jsx("div",{className:"flex-1",children:e.jsx(t,{href:"/admin",className:"btn btn-ghost bg-transparent text-black text-xl hover:text-oren hover:bg-transparent",children:"Transitspot"})}),e.jsxs("div",{className:"flex-none",children:[e.jsx(t,{href:"/admin/input",as:"button",className:"btn mr-5 bg-oren border-0 text-black hover:text-white",children:"Tambah Stasiun"}),e.jsxs("div",{className:"dropdown dropdown-end",children:[e.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle avatar",children:e.jsx("div",{className:"w-10 rounded-full bg-oren hover:bg-base-100"})}),e.jsx("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-oren text-white hover:text-black rounded-box w-52",children:e.jsx("li",{children:e.jsx(t,{className:"bg-oren",method:"post",href:route("logout"),as:"button",children:"Logout"})})})]})]})]}),e.jsx("div",{className:"overflow-x-auto bg-white ",children:e.jsxs("table",{className:"table ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-1 border-oren text-black text-base",children:[e.jsx("th",{children:"Nama Stasiun"}),e.jsx("th",{children:"Latitude"}),e.jsx("th",{children:"Longitude"}),e.jsx("th",{children:"Alamat"}),e.jsx("th",{children:"Deskripsi"}),e.jsx("th",{children:"Sejarah"}),e.jsx("th",{children:"Gambar"}),e.jsx("th",{})]})}),e.jsx("tbody",{className:"border-1 border-oren text-black",children:s.artikel?s.artikel.map((r,n)=>e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"hover hover:text-white border-oren",children:[e.jsx("td",{children:e.jsx("label",{children:r.Stasiun})}),e.jsx("td",{children:e.jsx("label",{children:r.Latitude})}),e.jsx("td",{children:e.jsx("label",{children:r.Longitude})}),e.jsx("td",{children:e.jsx("label",{children:r.Alamat})}),e.jsx("td",{children:e.jsx("label",{children:r.Deskripsi})}),e.jsx("td",{children:e.jsx("label",{children:r.Sejarah})}),e.jsx("td",{children:e.jsx("img",{className:"w-20 h-20",src:"/gambar/"+r.Gambar})}),e.jsx("td",{children:e.jsx(t,{href:route("edit"),method:"get",className:"btn bg-oren border-0 text-black hover:text-white",data:{id:r.id},as:"button",children:"Edit"})}),e.jsx("td",{children:e.jsx(t,{href:route("hapus"),method:"post",className:"btn bg-oren border-0 text-black hover:text-white",data:{id:r.id},as:"button",children:"Hapus"})})]},n)})):e.jsx(e.Fragment,{})})]})})]})}export{d as default};