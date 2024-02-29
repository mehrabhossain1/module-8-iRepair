import { getServices } from '@/api/admin/service/service.api';
import { useQuery } from '@tanstack/react-query';

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  console.log({ data, isLoading, isError });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      {data?.data?.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ServiceList;
