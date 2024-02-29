import { useEffect, useState } from 'react';

const ServiceList = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/services')
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div>
      <h1>This is ServiceList component</h1>
    </div>
  );
};

export default ServiceList;
