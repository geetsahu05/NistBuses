import React, { useState, useEffect } from "react";
import Card from './Card';

const URL = "https://script.googleusercontent.com/macros/echo?user_content_key=5bjY5A6cG86Zn7k-rlaJUKAqO0WGmTUWfG0vbbwaekzlm19D6uMPUNz87dDNmB5dOxVrNskDptDhbWQDg9T7oiHO2EWd_w9Um5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJhKbA3-iC0uxFVL458t7kCz4J9TG_0Yf5aTNqiVFCe3VJVsL-d5DNiGzQHLVoD5K0ZDBFxdtJqhObJkvtzj8bl3xCzM_1QEy9z9Jw9Md8uu&lib=M1-OxiSMtIQCzm1ohgKaHL0KzudcPnLyY";

const Body = () => {
    const [busData, setBusData] = useState([]);

    useEffect(() => {
        const fetchBusData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setBusData(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBusData();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-4 justify-items-center py-4">
            {busData.map((bus, index) => (
                <Card
                    key={index}
                    BusNumber={bus.Nist_Buses}
                    Location={bus.Locations}
                />
            ))}
        </div>
    );
};

export default Body;
