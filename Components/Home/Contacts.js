import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col">
        <div className="lg:w-1/2 lg:px-20 md:px-5 w-full py-10 flex">
          <div className="my-auto lg:ml-auto md:mx-0 mx-auto">
            <h1 className="text-5xl md:text-8xl text-orange-500  font-sansita italic mb-10">
              Contacts
            </h1>
            <div className="flex flex-row my-5">
              <div className="h-full my-auto mx-3">
                <h1 className="text-yellow-300 text-2xl">
                  <FaMapMarkerAlt />
                </h1>
              </div>
              <div>
                <p className="font-bold text-lg text-gray-300">ADDRESS</p>
                <p className="text-gray-300">
                  HOUSE#3/D, ROAD#04, BLOCK#B, MIRPUR-2, DHAKA
                </p>
              </div>
            </div>

            <div className="flex flex-row my-5">
              <div className="h-full my-auto mx-3">
                <h1 className="text-yellow-300 text-2xl">
                  <BsFillTelephoneFill />
                </h1>
              </div>
              <div>
                <p className="font-bold text-lg text-gray-300">PHONE</p>
                <p className="text-gray-300">018 6368 9582 </p>
              </div>
            </div>

            <div className="flex flex-row my-5">
              <div className="h-full my-auto mx-3">
                <h1 className="text-yellow-300 text-2xl">
                  <MdEmail />
                </h1>
              </div>
              <div>
                <p className="font-bold text-lg text-gray-300">EMAIL</p>
                <p className="text-gray-300">admin@superhostel.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6228.405300513983!2d90.34992892028484!3d23.806636438534323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c15d795803ef%3A0xb95b5220821682de!2sSuper%20Hostel-05%20(Mirpur%20Male%20Branch-Student%2CJob%20holder%2Cetc)%203%20times%20meal%2C%20AC%2C%20Laundryi%20%26%2030%2B%20facilities%20(AKA%20Super%20Home-05)!5e0!3m2!1sen!2sbd!4v1676290171323!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full aspect-square max-h-[550px] my-auto"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
