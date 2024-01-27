import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import macbook from '@/assets/images/macbook-exposed.png';

// ctrl + x = del entire line

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div>
        <h1 className="text-5xl lg:text-8xl font-bold text-nowrap">
          <span className="text-gray ">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="max-w-[50ch] mt-10 mb-5 text-lg">
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of
          <span>Macbook repairs</span> and diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>

      <div className="mt-10 w-3/4 lg:w-full mx-auto">
        <img
          className="-rotate-[35deg] h-[95%] object-contain"
          src={macbook}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
