import React from "react";
import Card from "./Card";

export default function PeopleContainer() {
  return (
    <div>
      <h1 className="bg-teal-500 text-xl p-4 font-bold flex-row">Beste Serie</h1>
      <div className="w-1/5">
          <div className="py-3.5 px-3.5"><Card
          imageUri="https://images.tvtoday.de/files/images/201910/1/1651934,222297_aufmacher_640.jpg"
          name="Weihnachtsmann"
          title="Mann"
        />
        </div>
        
        <div className="py-3.5 px-3.5">
        <Card
          name="Trixi"
          title="Elfe"
          imageUri="https://i0.wp.com/www.comicschau.de/wp-content/uploads/2022/12/Screenshot-2022-12-13-at-13-50-59-Weihnachtsmann-Co.-KG-Folge-4-Rudolph-ist-verschwunden-Ganze-Folge-TOGGO-Serien-YouTube1.png?resize=500%2C281&ssl=1"
        />
        </div>
        
        <div className="py-3.5 px-3.5">
        <Card
          name="Jordi"
          title="Elf"
          imageUri="https://images.plus.rtl.de/watch/556491/default/2r-81-qd-kq/fliegen-muesste-man-koennen"
        />
        </div>
        
        <div className="py-3.5 px-3.5">
        <Card
          name="Gilfi"
          title="Elf"
          imageUri="https://m.media-amazon.com/images/S/aplus-media-library-service-media/904501bf-e3a1-4172-8ed7-15aa2931c8af.__CR0,0,600,450_PT0_SX600_V1___.png"
        />
        </div>
        
        <div className="py-3.5 px-3.5"><Card
          name="Balbo"
          title="Eisbär"
          imageUri="https://sendungen.fra1.cdn.digitaloceanspaces.com/super_rtl_weihnachtsmann_und_co._kg_13112023.jpg"
        />
        </div>
        
      </div>
    </div>
  );
}
