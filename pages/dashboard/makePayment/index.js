import AuthCheck from "../../../Components/Firebase/AuthCheck";
import MainLayout from "../../../Components/MainLayout/MainLayout";

const makePayment = () => {
  return (
    <MainLayout>
      <div>
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/mF5GQj9/image.png')] bg-no-repeat bg-cover bg-center ">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Payment
          </h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default AuthCheck(makePayment);
