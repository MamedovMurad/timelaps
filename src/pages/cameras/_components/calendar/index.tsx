'use client';
import React, { useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

const CustomCalendar: React.FC<any> = ({getData}) => {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
console.log(selectedDate?.format('YYYY-MM-DD'), 'formatted selectedDate');
 
    

    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const startWeek = startOfMonth.startOf('week'); // Sunday
    const endWeek = endOfMonth.endOf('week');

    const calendarDays = [];
    let day = startWeek;

    while (day.isBefore(endWeek, 'day')) {
        calendarDays.push(day);
        day = day.add(1, 'day');
    }

    const isSameDay = (d1: Dayjs, d2: Dayjs) => d1.isSame(d2, 'day');

    const handleMonthChange = (value: number) => {
        setCurrentDate(currentDate.month(value));
    };

    const handleYearChange = (value: number) => {
        setCurrentDate(currentDate.year(value));
    };

    const years = Array.from({ length: 8 }, (_, i) => dayjs().year()  + i); // from -4 to +3
    const months = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
        'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr',
    ];


    useEffect(() => {
  if (selectedDate) {
      getData?.(selectedDate?.format('YYYY-MM-DD'))
  }
    }, [selectedDate])
    
    
    return (
        <div className="bg-transparent text-white px-4 ">
            <div className="bg- rounded-xl  w-full max-w-md shadow-lg">
                {/* Header with navigation + selects */}
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))}>
                        <LeftOutlined className="text-white hover:text-blue-400" />
                    </button>
                    <div className="flex gap-2">
                        <Select
                            value={currentDate.month()}
                            onChange={handleMonthChange}
                            className="bg-transparent text-white border-gray-600"
                            style={{ width: 120 }}
                        >
                            {months.map((month, index) => (
                                <Select.Option key={index} value={index}>
                                    {month}
                                </Select.Option>
                            ))}
                        </Select>
                        <Select
                         
                            value={currentDate.year()}
                            onChange={handleYearChange}
                            
                            className=" border-none outline-none text-white border-gray-600"
                            style={{ width: 120 }}
                        >
                            {years.map((year) => (
                                <Select.Option key={year} value={year}>
                                    {year}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>
                    <button onClick={() => setCurrentDate(currentDate.add(1, 'month'))}>
                        <RightOutlined className="text-white hover:text-blue-400" />
                    </button>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 text-center text-gray-400 mb-2">
                    {['B.E.', 'Ç.A.', 'Ç.', 'C.A.', 'C.', 'Ş.', 'B.'].map((d) => (
                        <div key={d}>{d}</div>
                    ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                    {calendarDays.map((dayItem) => {
                        const isCurrentMonth = dayItem.month() === currentDate.month();
                        const isToday = isSameDay(dayItem, dayjs());
                        const isSelected = selectedDate && isSameDay(dayItem, selectedDate);

                        return (
                            <div
                                key={dayItem.toString()}
                                onClick={() => {
                                    setSelectedDate(dayItem);
                            
                                    if (dayItem.month() !== currentDate.month()) {
                                     
                                        setCurrentDate(dayItem); // Switch to next/prev month if needed
                                    }
                                }}
                                className={`text-center py-2 rounded-lg cursor-pointer transition
                                        ${isCurrentMonth ? 'text-white' : 'text-gray-500'}
                                        ${isToday ? 'border border-blue-500' : ''}
                                        ${isSelected ? 'bg-blue-600' : 'hover:bg-[#2a2f40]'}`}
                            >
                                {dayItem.date()}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CustomCalendar;
