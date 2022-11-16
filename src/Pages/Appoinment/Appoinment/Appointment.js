import React, { useState } from 'react';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableApoinments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
}

export default Appointment;
