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
                <td>100 - 150</td>
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
                <td>70</td>
              </tr>
              <tr>
                <td>
                  Gội cao cấp <br /> (dầu gội cao cấp Davines - Ý)
                </td>
                <td>100</td>
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
                  Gói 1 (nhuộm dưỡng): AFINAGE, RG <br />
                  (Size S/M/L/XL)
                </td>
                <td>500 - 800</td>
              </tr>
              <tr>
                <td>
                  Gói 2 (nhuộm phục hồi): DAVINES, ERAYBA, MIBON <br />
                  (Size S/M/L/XL)
                </td>
                <td>700 - 1000</td>
              </tr>
              <tr>
                <td>Làm nền / nâng tông</td>
                <td>200 - 400</td>
              </tr>
              <tr>
                <td>Giậm chân tóc</td>
                <td>200 - 400</td>
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
                <td>Uốn mái</td>
                <td>100</td>
              </tr>
              <tr>
                <td className="w-[70%]">Uốn phồng / Dập phòng</td>
                <td>300 - 400</td>
              </tr>
              <tr>
                <td>
                  Uốn hoặc Duỗi (Size S/M/L)
                  <br /> Uốn + Duỗi (thêm phí duỗi 200)
                </td>
                <td>600 - 900</td>
              </tr>
              <tr>
                <td>Uốn xù, uốn sóng (Size S/M/L)</td>
                <td>700 - 1000</td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto w-full mb-20">
            <thead>
              <tr>
                <th scope="col" colSpan={2} className="bg-secondary">
                  Dịch vụ khác
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">
                  Hấp dưỡng <br /> (Morocanoil)
                </td>
                <td>200 - 400</td>
              </tr>
              <tr>
                <td className="w-[70%]">
                  Phục hồi <br /> (Morocanoil, Nhật)
                </td>
                <td>300 - 600</td>
              </tr>
              <tr>
                <td>Tẩy tóc / bóc màu (Size S/M/L)</td>
                <td>500 - 800 - 1000</td>
              </tr>
              <tr>
                <td>Móc light sợi</td>
                <td>200 - 500</td>
              </tr>
              <tr>
                <td>Móc light mảng</td>
                <td>500 - 800</td>
              </tr>
              <tr>
                <td>Tẩy balayage</td>
                <td>2000 - 3000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2} className="text-right">
                  * ĐVT: ngàn đồng
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PriceList;
