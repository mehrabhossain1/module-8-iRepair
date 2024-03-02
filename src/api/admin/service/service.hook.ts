import { useQuery } from '@tanstack/react-query';
import { getServices } from './service.api';

export const useGetServices = () => {
  const servicesData = useQuery({
    queryKey: ['services'],
    queryFn: getServices,

    // ডাটা ফেচ হয়ে আসার পরে মডিফিকেশনের দরকার হলে #select
    select: (data) => {
      const services = data.data.map((item) => ({
        // এখানে filter চালায়া কিছু বাদও দেয়া যাবে
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));

      return services;
    },

    // ক্যাশ ধরে রাখার টাইম, by default ৫ মিনিট
    // gcTime: 5000,

    // fresh অবস্থায় রাখে, এতক্খুন latest ডাটা দেখাবেনা
    // staleTime: 30000,
    // staleTime: Infinity -> এটার ফলে আর request করবেনা
  });

  return servicesData;
};
