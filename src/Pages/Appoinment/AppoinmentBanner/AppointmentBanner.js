import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate}) => {
    
  return (
    <div>
      <div className="hero my-8">
        <div className=" w-[90%] md:w-[60%]  mx-auto flex flex-col justify-between lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className='shadow-md bg-slate-100 my-4 md:my-0'>
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
