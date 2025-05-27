import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [rooms, setRooms] = useState("");
  const [offset, setOffset] = useState(0);
  const [message, setMessage] = useState("");
  const [citycode, setcitycode] = useState("");
  const [hotels, sethotels] = useState([]);
  const [availability, setAvailability] = useState({});
       const navigate=useNavigate();
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = async () => {
    const hotelSearchData = {
      location: citycode,
      checkInDate:checkInDate,
      checkOutDate:checkOutDate,
      adults: Number(adults),
      children: Number(children),
      rooms: Number(rooms),
    };

    if (!citycode || !checkInDate || !checkOutDate || !adults || !rooms) {
      alert("Please fill all required fields before searching.");
      return;
    }

    if (checkInDate && checkOutDate && new Date(checkOutDate) <= new Date(checkInDate)) {
      alert("Check-out date must be after check-in date.");
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:3000/search-hotel", hotelSearchData);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to save search data.");
    }

    try {
      const response = await axios.get(`http://localhost:3000/api/static-hotels?location=${citycode}`);
      sethotels(response.data);
    } catch (err) {
      console.error(err);
      alert('Failed to load hotels');
    }

    try {
      const availabilityResponse = await axios.post("http://localhost:3000/api/available-rooms", {
        checkIn: checkInDate,
        checkOut: checkOutDate,
      });
      
      const availabilityMap = {};
      availabilityResponse.data.forEach((item) => {
        availabilityMap[item.name] = item.availableRooms;
      });
    
      setAvailability(availabilityMap);
    } catch (error) {
      console.error("Failed to fetch room availability", error);
    }
    
  };

  const calculatenights = () => {
    if (!checkInDate || !checkOutDate) return 0;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const difftime = checkOut - checkIn;
    const diffdays = Math.ceil(difftime / (1000 * 60 * 60 * 24));
    return diffdays > 0 ? diffdays : 0;
  };

  const handlebooking = async (hotel) => {
    const nights = calculatenights();
    const total = hotel.price * nights * (rooms || 1);
    const bookingData = {
      hotelname: hotel.name,
      totalprice: total,
      nights: nights,
      rooms: Number(rooms),
    };

    try {
      const response = await axios.post("http://localhost:3000/book-hotel", bookingData);
      console.log("booking response:", response.data);
  
    navigate("/payment");
    
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Failed to book hotel.");
    }
  };


  const checkAvailability = async (hotel) => {
    const res = await axios.get(
      `http://localhost:3000/hotel/${hotel._id}/availability`,
      {
        params: {
          checkIn: checkInDate,
          checkOut: checkOutDate,
        },
      }
    );
    return res.data.availableRooms;
  };
  
  


  return (
    <div className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="z-10 text-center">
        <h1
          className="text-5xl font-bold mb-4 transition-transform duration-500"
          style={{
            transform: `translateY(-${offset * 0.2}px)`,
          }}
        >
          Find Your Perfect Stay
        </h1>
        <p
          className="text-lg mb-6 transition-transform duration-500"
          style={{
            transform: `translateY(-${offset * 0.1}px)`,
          }}
        >
          Explore the best hotels at unbeatable prices!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <select
            className="p-3 h-20 rounded-lg text-white border border-amber-50"
            value={citycode}
            onChange={(e) => setcitycode(e.target.value)}
          >
            <option value="" className="text-black">
              Select location
            </option>
            <option value="Goa" className="text-black">
              Goa
            </option>
            <option value="Bangalore" className="text-black">
              Bangalore
            </option>
            <option value="Mumbai" className="text-black">
              Mumbai
            </option>
            <option value="Delhi" className="text-black">
              Delhi
            </option>
            <option value="Ooty" className="text-black">
              Ooty
            </option>
            <option value="Kashmir" className="text-black">
              Kashmir
            </option>
            <option value="Jaipur" className="text-black">
              Jaipur
            </option>
            <option value="Udaipur" className="text-black">
              Udaipur
            </option>
          </select>

          <div className="flex flex-col text-left">
            <label htmlFor="checkin" className="mb-1 text-sm text-white">
              Check-In Date
            </label>
            <input
              id="checkin"
              type="date"
              className="p-3 rounded-lg text-white border border-amber-50 bg-gray-800"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={today}
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="checkin" className="mb-1 text-sm text-white">
              Check-Out Date
            </label>
          <input
            id="checkout"
            type="date"
            className="p-3 rounded-lg text-white border border-amber-50"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            min={checkInDate || today}
          />
          </div>
          <input
            type="number"
            placeholder="No. of Adults"
            className="p-3 rounded-lg text-white border border-amber-50"
            value={adults}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (Number(value) >= 0 && !value.startsWith("-"))) {
                setAdults(value);
              }
            }}
            min="0"
          />
          <input
            type="number"
            className="p-3 rounded-lg text-white border border-amber-50"
            placeholder="No. of Children"
            value={children}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (Number(value) >= 0 && !value.startsWith("-"))) {
                setChildren(value);
              }
            }}
            min="0"
          />
          <input
            type="number"
            className="p-3 rounded-lg text-white border border-amber-50"
            placeholder="Rooms"
            value={rooms}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (Number(value) >= 0 && !value.startsWith("-"))) {
                setRooms(value);
              }
            }}
            min="0"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            onClick={handleSearch}
          >
            Search
          </button>
          {message && <p className="mt-4">{message}</p>}

          <div className="mt-6 overflow-x-auto">
            <div className="flex space-x-6">
              {hotels.map((hotel, index) => {
                const total = hotel.price * calculatenights() * (rooms || 1);
                return (
                  <div
                    key={index}
                    className="w-80 bg-white text-black rounded-2xl shadow-md p-4 flex-shrink-0"
                  >
                   <img
                  src={`/${hotel.image}`}
                  alt={hotel.name}
                  className="w-80 h-50 object-cover rounded-lg mb-4"
                 
                     />


                    <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                    <p className="text-gray-700">Starts with ₹{hotel.price}</p>
                    <p className="text-gray-800 font-semibold">Total: ₹{total}</p>
                    <p className="text-yellow-600">Rating: {hotel.rating}</p>
                    <p className="text-sm text-gray-600 mt-2">{hotel.description}</p>
                    <p className="text-green-600 font-semibold">
                     Available Rooms: {availability[hotel.name] ?? "Loading..."}
                    </p>

                    

                    <button
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                      onClick={() => handlebooking(hotel)}
                    >
                      Book Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
