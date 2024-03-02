import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';

const AddService = () => {
  const [serviceName, setServiceName] = useState('');

  // ক্যাশ invalidate এর জন্য
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch('http://localhost:5000/api/v1/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },

    // ক্যাশ invalidate এর জন্য
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
    },
  });
  // এখানে, Mutation এর পরে যখন success হচ্ছে তখন invalidateQueries করে দেও

  console.log({ isError, isSuccess });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceData = {
      name: serviceName,
      description: 'Replace broken screens',
      devices: ['Smartphone', 'Laptop', 'Tablet'],
      price: 100.0,
    };
    console.log(serviceData);

    await mutateAsync(serviceData);

    console.log('done');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
