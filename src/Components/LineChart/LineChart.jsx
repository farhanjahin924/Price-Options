import { LineChart as LChart, Line ,XAxis,YAxis} from "recharts";
const LineChart = () => {
  const finalMarks = [
    {
      "student": "A",
      "physics": 85,
      "chemistry": 90,
      "biology": 78
    },
    {
      "student": "B",
      "physics": 92,
      "chemistry": 88,
      "biology": 95
    },
    {
      "student": "C",
      "physics": 78,
      "chemistry": 85,
      "biology": 80
    },
    {
      "student": "D",
      "physics": 88,
      "chemistry": 93,
      "biology": 87
    },
    {
      "student": "E",
      "physics": 95,
      "chemistry": 91,
      "biology": 89
    },
    {
      "student": "F",
      "physics": 82,
      "chemistry": 79,
      "biology": 75
    },
    {
      "student": "G",
      "physics": 90,
      "chemistry": 87,
      "biology": 92
    },
    {
      "student": "H",
      "physics": 86,
      "chemistry": 94,
      "biology": 91
    },
    {
      "student": "I",
      "physics": 89,
      "chemistry": 96,
      "biology": 85
    },
    {
      "student": "J",
      "physics": 94,
      "chemistry": 89,
      "biology": 93
    }
  ];

  return (
    <div>
      {/* <LChart width={600} height={300} data={finalMarks}>
        <Line type="monotone" dataKey="physics" stroke="#8884d8" />
      </LChart> */}
      <p className="text-2xl font-semibold text-center py-8">Line chart of some students  marks : </p>

      <LChart width={800}  height={400} data={finalMarks}>
        <Line type={"monotone"} dataKey={"physics"} stroke="red"> </Line>
        <Line type={"monotone"} dataKey={"chemistry"} stroke="green"> </Line>
        <Line type={"monotone"} dataKey={"biology"} stroke="blue"> </Line>
        <XAxis dataKey="student"> </XAxis>
        <YAxis></YAxis>
      </LChart>
    </div>
  );
};

export default LineChart;
