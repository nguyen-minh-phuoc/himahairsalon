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

          <table className="table-auto w-full">
            <thead>
              <tr>
                <th colSpan={2} className="bg-pink-200">
                  DỊCH VỤ NHUỘM
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">Nhuộm cơ bản</td>
                <td>500 - 600 - 700k</td>
              </tr>
              <tr>
                <td>Nhuộm dưỡng</td>
                <td>700 - 800 - 900k</td>
              </tr>
              <tr>
                <td>Nhuộm cao cấp</td>
                <td>800 - 1000 - 1200k</td>
              </tr>
              <tr>
                <td>Nâng tone</td>
                <td>350 - 400 - 450k</td>
              </tr>
              <tr>
                <td>Nhuộm chân</td>
                <td>350 - 500k</td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto w-full mt-10">
            <thead>
              <tr>
                <th colSpan={2} className="bg-pink-200">
                  UỐN TÓC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">Uốn mái</td>
                <td>150 - 200k</td>
              </tr>
              <tr>
                <td>Uốn / Bấm phồng</td>
                <td>300 - 500k</td>
              </tr>
              <tr>
                <td>Uốn dưỡng Korea</td>
                <td>700 - 800 - 900k</td>
              </tr>
              <tr>
                <td>Uốn cao cấp Japan</td>
                <td>800 - 1000 - 1200k</td>
              </tr>
              <tr>
                <td>Uốn xù mì & sóng</td>
                <td>800 - 1000 - 1200k</td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto w-full mb-10 mt-10">
            <thead>
              <tr>
                <th colSpan={2} className="bg-pink-200">
                  DUỖI TÓC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[70%]">Duỗi mái</td>
                <td>150 - 200k</td>
              </tr>
              <tr>
                <td>Duỗi chân</td>
                <td>400 - 500k</td>
              </tr>
              <tr>
                <td>Duỗi Schwarzkopf/Korea</td>
                <td>700 - 800 - 900k</td>
              </tr>
              <tr>
                <td>Duỗi cao cấp Japan</td>
                <td>800 - 1000 - 1200k</td>
              </tr>
              <tr>
                <td>Duỗi + Uốn</td>
                <td>800 - 1000 - 1200k</td>
              </tr>
            </tbody>
          </table>

          <div className="text-sm text-red-600 pb-10">
            <p>
              * Giá tóc tùy thuộc vào độ ngắn dài hoặc nhiều theo size S/M/L
              (nếu vượt trội sẽ cộng thêm phí 100-200k)
            </p>
            <p>* Báo giá rõ ràng không phát sinh.</p>
            <p>* Có thể yêu cầu xem thuốc trước khi dùng.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PriceList;
