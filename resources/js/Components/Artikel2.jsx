const Modal = ({data}) => {
    console.log(data)

    return (
        <dialog id="my_modal_2" className="modal">
                                  <div className="modal-box">
                                    <h3 className="font-bold text-lg">{data.Stasiun}</h3>
                                    <p className="py-4">{data.Alamat}</p>
                                  </div>
                                  <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                  </form>
                                </dialog>
    )
}

export default Modal;
