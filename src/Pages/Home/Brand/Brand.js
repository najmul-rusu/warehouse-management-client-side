import React from "react";
import iPhone from "../../../Images/Phone Brand/iPhone.png";
import OnePlus from "../../../Images/Phone Brand/OnePlus.png";
import Samsung from "../../../Images/Phone Brand/Samsung.png";
import Xiaomi from "../../../Images/Phone Brand/Xiaomi.png";
import Nokia from "../../../Images/Phone Brand/Nokia.png";
import Oppo from "../../../Images/Phone Brand/Oppo.png";
import Vivo from "../../../Images/Phone Brand/Vivo.png";
import Realme from "../../../Images/Phone Brand/Reaalme.png";
import Walton from "../../../Images/Phone Brand/Walton.png";
import Infinix from "../../../Images/Phone Brand/Infinix.png";

const Brand = () => {
  return (
    <div className="container my-3">
      <h3 className="text-center fs-1  bg-light p-3">Find by Brand</h3>
      <div className="d-flex">
        <div className="">
          <img className="w-75" src={iPhone} alt="iPhone" />
        </div>
        <div>
          <img className="w-75" src={OnePlus} alt="OnePlus" />
        </div>
        <div>
          <img className="w-75" src={Samsung} alt="Samsung" />
        </div>
        <div>
          <img className="w-75" src={Xiaomi} alt="Xiaomi" />
        </div>
        <div>
          <img className="w-75" src={Nokia} alt="Nokia" />
        </div>
      </div>
      <div className="d-flex mt-5">
        <div>
          <img className="w-75" src={Oppo} alt="Oppo" />
        </div>
        <div>
          <img className="w-75" src={Walton} alt="Walton" />
        </div>
        <div>
          <img className="w-75" src={Vivo} alt="Vivo" />
        </div>
        <div>
          <img className="w-75" src={Infinix} alt="Infinix" />
        </div>
        <div>
          <img className="w-75" src={Realme} alt="Realme" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
