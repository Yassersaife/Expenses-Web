import React, { useEffect, useState } from 'react';
import Chart from '../../components/Chart';
import { firestore } from "./../../Firebase";
import { collection, getDocs } from '@firebase/firestore';

export default function Index() {
  const [data, setData] = useState([]);

  const [totalValue, setTotalValue] = useState(0);
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(firestore, 'title');
        const querySnapshot = await getDocs(dataCollection);
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
         setData(dataArray);
         console.log('data',data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const total = data.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.amount,10), 0);
    setTotalValue(total);
       
    const amounts = data.map((item) => item.amount);
    setMaxAmount(Math.max(...amounts));
    setMinAmount(Math.min(...amounts));
  }, [data]);

console.log('render')
  return (
    <>
      <div className="body grid grid-cols-1 place-items-center">
        <p className='sm:p-8 md:p-4 text-2xl lg:text-center '>Monthly Expenses</p>

        <div className='w-3/5  sm:w-min items-center content-center container '>
          {data.length === 0 ? 
          (<div className='text-indigo-700	text-center'> Loading...</div>):
          
          ( <Chart month={data} />)   }
         
        </div>
        <div className='lg:text-start my-10 '>
          <p className='sm:p-8 my-8 text-xl lg:text-start text-indigo-900'>Summary</p>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2  lg:gap-20">
            <div className='flex-1 flex-col border-2 border-indigo-500 justify-center items-center border-collapse px-10 py-5 gap-5 rounded-lg shadow hover:bg-indigo-500'>
              <p className='sm:p-8 md:p-4 text-xl lg:text-center text-red-800 '>Total</p>
              <h1 className='sm:p-8 md:p-4 text-x lg:text-center tx '>{totalValue} $</h1>
            </div>

            <div className='flex-1 flex-col border-2 border-indigo-500 justify-center items-center border-collapse px-10 py-5 gap-5 rounded-lg shadow hover:bg-indigo-500'>
              <p className='sm:p-8 md:p-4 text-xl lg:text-center text-red-800 '>Average</p>
              <h1 className='sm:p-8 md:p-4 text-x lg:text-center tx '>{totalValue / data.length} $</h1>
            </div>

            <div className='flex-1 flex-col border-2 border-indigo-500 justify-center items-center border-collapse px-10 py-5 gap-5 rounded-lg shadow hover:bg-indigo-500'>
              <p className='sm:p-8 md:p-4 text-xl lg:text-center text-red-800 '>Min Amount</p>
              <h1 className='sm:p-8 md:p-4 text-x lg:text-center tx '>{minAmount} $</h1>
            </div>

            <div className='flex-1 flex-col border-2 border-indigo-500 justify-center items-center border-collapse px-10 py-5 gap-5 rounded-lg shadow hover:bg-indigo-500'>
              <p className='sm:p-8 md:p-4 text-xl lg:text-center text-red-800 '>Max Amount</p>
              <h1 className='sm:p-8 md:p-4 text-x lg:text-center tx '>{maxAmount} $</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
