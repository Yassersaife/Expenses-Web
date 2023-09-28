import React, { useEffect, useState } from 'react';
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts';




export default function Index(props) {
  const [monthlyTotalss, setmonthlyTotalss] = useState([]);
  const [Monthly, setMonthly] = useState([]);
  
  console.log(props.month)

  useEffect(() => {
    const monthlyTotals={};
    setMonthly(props.month);
    Monthly.forEach((item) => {
        
        const dateParts = item.date.split("-");
        const monthYear = `${dateParts[1]}`;
  
        if (!monthlyTotals[monthYear]) {
          monthlyTotals[monthYear] = { monthYear, total: 0 };
        }
  
        monthlyTotals[monthYear].total += parseInt(item.amount,10);
      });
  
      
  
      setmonthlyTotalss(Object.values(monthlyTotals));
  
  }, [monthlyTotalss]);

  return (
    <BarChart
      width={800}
      height={300}
      data={monthlyTotalss}
      margin={{
        top: 10,
        right: 20,
        left: 10,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="monthYear"  scale="point" padding={{ left: 20 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="total" fill="#472d7c" background={{ fill: '#eee' }} />
    </BarChart>
  );
}
