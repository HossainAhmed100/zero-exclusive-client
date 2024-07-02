import { useEffect, useState } from "react"
import AnimatingNumber from "../number-counter/animating-number";

function OfferTimer({ duration }) {
  // State to keep track of remaining time in milliseconds
  const [time, setTime] = useState(duration);

  useEffect(() => {
    // Function to decrement the time by 1000 milliseconds (1 second)
    const decrementTime = () => {
      setTime(prevTime => prevTime - 1000);
    };

    // Set an interval to call decrementTime every 1000 milliseconds
    const timerId = setInterval(decrementTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  // Get the time in days, hours, minutes, and seconds
  const [days, hours, minutes, seconds] = getMilTime(time);

  return (
    <div>
      <div className="flex items-start justify-center gap-4 count-down-main">
        <TimeSlot time={days} title={"days"} />
        <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
        <TimeSlot time={hours} title={"hours"} />
        <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
        <TimeSlot time={minutes} title={"minutes"} />
        <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
        <TimeSlot time={seconds} title={"seconds"} />
      </div>
    </div>
  );
}

const TimeSlot = ({ time, title }) => {
  return (
    <div>
        <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-blue-600 text-center">
          <AnimatingNumber value={time}/>
          {/* {time} */}
        </h3>
      <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">{title}</p>
    </div>
  );
};

// Function to convert milliseconds into days, hours, minutes, and seconds
function getMilTime(milliseconds) {
  let total_seconds = Math.floor(milliseconds / 1000);
  let total_minutes = Math.floor(total_seconds / 60);
  let total_hours = Math.floor(total_minutes / 60);
  let days = Math.floor(total_hours / 24);

  let seconds = total_seconds % 60;
  let minutes = total_minutes % 60;
  let hours = total_hours % 24;

  return [days, hours, minutes, seconds];
}

export default OfferTimer;
