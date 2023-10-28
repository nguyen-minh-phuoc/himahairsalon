import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const PriceList = () => {
  return (
    <div className="page-price-list">
      <div className="pb-1 bg-neutral">
        <Navbar />
      </div>
      <div className="page-banner"></div>
      <div>
        <div className="container price-list">
          <h1 className="text-3xl font-bold py-5 text-primary">Bảng giá</h1>
          <table className="table-auto w-full first">
            <thead>
              <tr>
                <th scope="col" colSpan={2} className="bg-secondary">
                  Cắt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">Cắt tạo kiểu</td>
                <td>100 - 150k</td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto w-full">
            <thead>
              <tr>
                <th scope="col" colSpan={2} className="bg-secondary">
                  Gội sấy
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">
                  Gội thường <br /> (Rejoice, Pantene, Sunsilk, Dove...)
                </td>
                <td>70k</td>
              </tr>
              <tr>
                <td>
                  Gội cao cấp <br /> (dầu gội cao cấp Davines - Ý, Morocanoil)
                </td>
                <td>100k</td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto w-full">
            <thead>
              <tr>
                <th scope="col" colSpan={2} className="bg-secondary">
                  Nhuộm
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">
                  Gói nhuộm dưỡng: <br />
                  (Afinage, RG,...)
                </td>
                <td>600 - 900k</td>
              </tr>
              <tr>
                <td>
                  Gội nhuộm cao cấp <br />
                  (Morocanoil, Davines, Erayba, Mibon,...)
                </td>
                <td>800 - 1200k</td>
              </tr>
              <tr>
                <td>Làm nền / nâng tông</td>
                <td>200 - 400k</td>
              </tr>
              <tr>
                <td>Giậm chân tóc</td>
                <td>250 - 400k</td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th scope="col" colSpan={2} className="bg-secondary">
                  Uốn / Duỗi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">Uốn/Duỗi</td>
                <td>600 - 900k</td>
              </tr>
              <tr>
                <td>Uốn + Duỗi</td>
                <td>800 - 1100k</td>
              </tr>
              <tr>
                <td>Uốn xù mì, uốn sóng</td>
                <td>700 - 1000k</td>
              </tr>
              <tr>
                <td>Uốn phồng chân, dập phồng</td>
                <td>300 - 400k</td>
              </tr>
              <tr>
                <td>
                  Phục hồi tóc <br />
                  (Morocanoil, Davines,...)
                </td>
                <td>300 - 600k</td>
              </tr>
              <tr>
                <td>
                  Hấp dưỡng <br /> (Morocanoil, Davines,...)
                </td>
                <td>200 - 400k</td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th scope="col" colSpan={2} className="bg-secondary">
                  Tẩy tóc / Bóc màu
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">Móc light sợi, mảng</td>
                <td>200 - 800k</td>
              </tr>
              <tr>
                <td>Tẩy tóc / bóc màu (Size S/M/L)</td>
                <td>500 - 800 - 1000k</td>
              </tr>
              <tr>
                <td>Balayage</td>
                <td>2000 - 4000k</td>
              </tr>
              <tr>
                <td>Nối light</td>
                <td>80k/1 sợi</td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full mb-20">
            <thead>
              <tr>
                <th scope="col" colSpan={2} className="bg-secondary">
                  Dịch vụ cơ bản
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">Nhuộm cơ bản</td>
                <td>400 - 700k</td>
              </tr>
              <tr>
                <td>Uốn cơ bản</td>
                <td>500 - 800k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PriceList;
