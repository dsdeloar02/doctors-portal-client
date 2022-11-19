import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey:['appointmentOptions', date],
        queryFn : async() => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
        // queryFn: () => fetch('http://localhost:5000/appointmentOptions')
        // .then(res => res.json())
    });
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
             <p className='text-center text-secondary font-bold'>You have selected date :  {format(selectedDate, 'PP')}</p>
             <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment && 
                <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
}

export default AvailableAppointments;
