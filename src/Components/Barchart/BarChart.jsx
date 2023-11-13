import {
  BarChart as BChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const BarChart = () => {
  const finalresult = [
    {
      student: "A",
      physics: 85,
      chemistry: 90,
      biology: 78,
    },
    {
      student: "B",
      physics: 92,
      chemistry: 88,
      biology: 95,
    },
    {
      student: "C",
      physics: 78,
      chemistry: 85,
      biology: 80,
    },
    {
      student: "D",
      physics: 88,
      chemistry: 93,
      biology: 87,
    },
    {
      student: "E",
      physics: 95,
      chemistry: 91,
      biology: 89,
    },
    {
      student: "F",
      physics: 82,
      chemistry: 79,
      biology: 75,
    },
    {
      student: "G",
      physics: 90,
      chemistry: 87,
      biology: 92,
    },
    {
      student: "H",
      physics: 86,
      chemistry: 94,
      biology: 91,
    },
    {
      student: "I",
      physics: 89,
      chemistry: 96,
      biology: 85,
    },
    {
      student: "J",
      physics: 94,
      chemistry: 89,
      biology: 93,
    },
  ];

  return (
    <div>
      <p>Bar chart of same date : </p>
      <BChart width={800} height={400} data={finalresult}>
      <Tooltip />
        <Legend />
        <Bar
          dataKey={"physics"}
          fill="blue"
         
        >
          {" "}
        </Bar>
        <Bar
          dataKey={"chemistry"}
          fill="red"
         
        >
          {" "}
        </Bar>
        <Bar dataKey={"biology"} fill="green">
          {" "}
        </Bar>
        <XAxis dataKey={"student"}></XAxis>
        <YAxis> </YAxis>
        
      </BChart>
    </div>
  );
};

export default BarChart;
