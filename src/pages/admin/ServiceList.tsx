import { getServices } from '@/api/admin/service/service.api';
import { useQuery } from '@tanstack/react-query';

const ServiceList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data);

  return (
    <div>
      {data?.data?.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default ServiceList;
