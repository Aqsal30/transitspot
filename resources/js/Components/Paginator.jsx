import { Link } from "@inertiajs/react";

const Paginator = ({meta}) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url ;
    const current = meta.current_page;

    return (
        <div className="w-full h-[15%] flex items-center justify-center">
          {prev && <Link href={prev} className="btn bg-transparent text-white rounded-full border-2 border-white text-[20px]">«</Link>}
          <div className="w-[2%]"></div>
          {next && <Link href={next} className="btn bg-transparent text-white rounded-full border-2 border-white text-[20px]">»</Link>}
          
        </div>
    )
}

export default Paginator;
