import Modal from "react-modal";
import React from "react";
import moment from "moment/moment";
import parser from "html-react-parser";
import { MdClose } from "react-icons/md";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
    padding: "0",
    borderRadius: "20px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000099",
    zIndex: "99",
  },
};

function DetailModal ({ modalIsOpen, closeModal, data }) {
  let subtitle;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={100}
      >
        <div className="flex justify-between items-center py-2 pt-4 px-5">
          <h2 className="font-semibold text-2xl">Listing</h2>
          <div className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">
            <MdClose size={24} onClick={closeModal} />
          </div>
        </div>
        <hr className="mt-2 w-full" />
        <div className="px-10 pb-10">
          <h3 className="text-[24px] text-gray-900 font-semibold mt-5">
            {data?.title}
          </h3>
          <p className="text-[13px] text-gray-900 mt-1 font-light">
            {moment(data.created_at).format("DD MMM")}
          </p>
          <div className="flex gap-[2px] flex-wrap items-center mt-1">
            {data?.tags?.map((item, index) => (
              <p
                key={index}
                className="text-[14px] text-gray-900 font-light  hover:bg-gray-200 px-1 py-1 rounded-md cursor-pointer "
              >
                #{item}
              </p>
            ))}
          </div>
          <div className="content listing  text-gray-600 text-[16px] ">
            {parser(data?.processed_html || data)}
          </div>

          <div className="flex gap-3 items-center mt-4">
            <div className="w-[30px] h-[30px] rounded-full border overflow-hidden">
              <img src={data?.user?.profile_image_90} alt="" />
            </div>
            <div>
              <h6 className="text-[14px]">{data?.user?.name}</h6>
              <p className="text-[12px] text-gray-500">{data?.category}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DetailModal;
