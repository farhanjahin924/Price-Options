import axios from "axios";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const Phone = () => {
  const [phone, setphone] = useState([]);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //   .then(res => res.json())
    //   .then(data => setphone(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const fakePhoneData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setphone(fakePhoneData);
        // console.log(fakePhoneData);
      });
  }, []);
  return (
    <div>
      <p className="text-2xl font-semibold text-center py-8">
        {" "}
        Phone : {phone.length}{" "}
      </p>
      <p className="text-2xl text-center">Phone data pie chart :</p>
      <PieChart className="border rounded-sm" width={800} height={800}>
          <Pie
            dataKey="name"
            isAnimationActive={false}
            data={phone}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="price" data={phone} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
          <legend></legend>
        </PieChart>
    </div>
  );
};

export default Phone;
