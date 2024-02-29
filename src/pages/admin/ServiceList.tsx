import { useGetServices } from '@/api/admin/service/service.hook';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Trash2 } from 'lucide-react';

const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetServices();

  // console.log({ data, isLoading, isError });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  // const services = data.data.map((item) => ({
  //   id: item._id,
  //   name: item.name,
  //   description: item.description,
  //   price: item.price,
  // }));

  console.log(services);
  // {data?.data?.map((item) => (
  //   <p key={item._id}>{item.name}</p>
  // ))}

  return (
    <Container className="mt-20 border p-0 rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" className="p-2">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Services</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default ServiceList;
