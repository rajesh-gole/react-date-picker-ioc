import React, { useState } from 'react';
export interface DatePickerProps {
    onChange?: (date: Date) => void;
    defaultDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({ onChange, defaultDate }) => {
    const [date, setDate] = useState(defaultDate || new Date());

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = new Date(event.target.value);
        setDate(newDate);
        if (onChange) {
            onChange(newDate);
        }
    };
    return (
        <input type="date" value={date.toISOString().substr(0,10)} onChange={handleDateChange}/>
    )
}