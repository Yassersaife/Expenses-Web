import React, { useEffect, useState } from 'react';
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts';




export default function Index(props) {
  const monthString = [
    "January", "February", "March", "April", "May",
     "June", "July", "August", "September", "October", 
     "November", "December"];

  const [monthlyTotalss, setmonthlyTotalss] = useState([]);
  const [Monthly, setMonthly] = useState(props.month);
  
  useEffect(() => {
 
    const monthlyTotals={};
    console.log(Monthly);

    Monthly.forEach((item) => {
        
        const dateParts = item.date.split("-");
        var parsedIndex = parseInt(dateParts[1], 10);
        const monthStr = monthString[parsedIndex-1];

        if (!monthlyTotals[parsedIndex]) {
           monthlyTotals[parsedIndex] = {parsedIndex, monthStr, total: 0 };
        }
  
        monthlyTotals[parsedIndex].total += parseInt(item.amount,10);
      });
  
      console.log(monthlyTotals);
  
      setmonthlyTotalss(Object.values(monthlyTotals));
  
  }, [Monthly]);

  return (
    <BarChart
className='w-4/5'    
  width={700}
      height={300}
      data={monthlyTotalss}
      margin={{
        top: 20,
        right: 10,
        left: 10,
        bottom: 5,
      }}
      barSize={30}
    >
      <XAxis dataKey="monthStr"  scale="point" padding={{ left: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="10 10" />
      <Bar dataKey="total" fill="#5a2bea" background={{ fill: '#eee6fc' }} />
    </BarChart>
  );
}
