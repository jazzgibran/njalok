'use client'
import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const timeZone = 'Asia/Makassar';
    const timeString = time.toLocaleTimeString('en-US', { timeZone: timeZone, hour12: false });
    const weekday = time.toLocaleDateString('en-US', { timeZone: timeZone, weekday: 'long' });
    const [hours, minutes] = timeString.split(':').map(part => part.slice(0, 2));

    // Calculate countdown to opening hours
    const currentTime = new Date(time);
    const openingTime = new Date(currentTime);
    openingTime.setHours(16, 30, 0);
    const closingTime = new Date(currentTime);
    closingTime.setHours(24, 0, 0); // Note: 24 will roll over to the next day at 00:00

    let countdown = '';

    if (currentTime < openingTime) {
        const diff = openingTime.getTime() - currentTime.getTime();
        const hoursLeft = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutesLeft = Math.floor((diff / (1000 * 60)) % 60);
        countdown = `${hoursLeft.toString().padStart(2, '0')}h ${minutesLeft.toString().padStart(2, '0')}m until open`;
    } else if (currentTime >= openingTime && currentTime < closingTime) {
        countdown = 'Open now';
    } else {
        countdown = 'Closed';
    }

    return (
        <div className="text-white items-center font-bold text-right flex gap-2 text-xl lg:text-5xl lg:block">
            <p>{weekday}</p>
            <h2>
                {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}
            </h2>
            <p className='text-sm md:text-base lg:text-lg'>{countdown}</p>
            
        </div>
    );
};

export default Clock;