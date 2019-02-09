const initState = {
    cars: [
        {
            "Name": "Hyundai Grand i10",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517236166_1509779915_152_i10.webp",
            "Price": 1301,
            "Location": "Koramangala",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Petrol",
            "Transmission": "Automatic",
            "Car_Type": "Hatchback"
        },
        {
            "Name": "Mahindra TUV300",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1508769709_tuv300_CARDIMENSION%282%29.png",
            "Price": 1360,
            "Location": "Koramangala",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 7,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "SUV"
        },
        {
            "Name": "Hyundai i20 Magna",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517235691_1503654158_i20_magna_carimage_1_.webp",
            "Price": 1430,
            "Location": "Koramangala",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "Hatchback"
        },
        {
            "Name": "Mahindra Verito",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1539321232_mahindra_Vertio_new_final.webp",
            "Price": 1440,
            "Location": "Koramangala",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "Sedan"
        },
        {
            "Name": "Honda Amaze 2018",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1545022905_amaze2018.webp",
            "Price": 1570,
            "Location": "Koramangala",
            "Availability": ["Sat", "Sun"],
            "Seats": 5,
            "Fuel_Type": "Diesel",
            "Transmission": "Automatic",
            "Car_Type": "Sedan"
        },
        {
            "Name": "Hyundai Creta",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517236391_1511333933_creta_CARDIMENSION.webp",
            "Price": 1700,
            "Location": "Koramangala",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "Mini SUV"
        },
        {
            "Name": "Maruti Ritz",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505295259_1500892807_ritz2%281%29.webp",
            "Price": 1180,
            "Location": "HSR Layout",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Petrol",
            "Transmission": "Manual",
            "Car_Type": "Hatchback"
        },
        {
            "Name": "Tata Bolt",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505297592_1500892399_bolt.webp",
            "Price": 1150,
            "Location": "HSR Layout",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "Hatchback"
        },
        {
            "Name": "Hyundai Xcent",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505390422_1500896796_xcent.webp",
            "Price": 1450,
            "Location": "HSR Layout",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "Sedan"
        },
        {
            "Name": "Suzuki Vitara Brezza",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1522147962_vitarabrezza-final_CARDIMENSION.webp",
            "Price": 1580,
            "Location": "HSR Layout",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "Mini SUV"
        },
        {
            "Name": "Tata Hexa XE",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1525356832_tatahexa.png",
            "Price": 1980,
            "Location": "HSR Layout",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 7,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "SUV"
        },
        {
            "Name": "Maruti Suzuki Ertiga",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505393064_1500892647_etriga.webp",
            "Price": 2000,
            "Location": "HSR Layout",
            "Availability": ["Sat", "Sun"],
            "Seats": 7,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "SUV"
        },
        {
            "Name": "Hyundai Eon",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505389673_1500892609_eon.webp",
            "Price": 1100,
            "Location": "Indiranagar",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Petrol",
            "Transmission": "Manual",
            "Car_Type": "Hatchback"
        },
        {
            "Name": "Ignis",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1526893284_ignis.webp",
            "Price": 1150,
            "Location": "Indiranagar",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Petrol",
            "Transmission": "Automatic",
            "Car_Type": "Hatchback"
        },
        {
            "Name": "Maruti Suzuki Baleno",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517234251_1503651026_balenoimage_carimage.webp",
            "Price": 1433,
            "Location": "Indiranagar",
            "Availability": ["Mon","Tue", "Wed", "Thu", "Fri"],
            "Seats": 5,
            "Fuel_Type": "Diesel",
            "Transmission": "Manual",
            "Car_Type": "Hatchback"
        },
        {
            "Name": "Honda Jazz",
            "Photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505393385_1504243587_jazz_CARDIMENSION.webp",
            "Price": 1500,
            "Location": "Indiranagar",
            "Availability": ["Sat", "Sun"],
            "Seats": 5,
            "Fuel_Type": "Petrol",
            "Transmission": "Manual",
            "Car_Type": "Hatchback"
        }
    ],
    filters: {
        location: '',
        startDate: "",
        transmissionType: '',
        carType: '',
        fuel: ''
    },
    order: 1,
    limit: 6
};

const carReducer = (state= initState, action) => {
    switch(action.type) {
        case 'FILTER_CARS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.data
                }
            }
        case 'CHANGE_LIMIT_OF_CARS':
            return {
                ...state,
                limit: action.data
            }
        case 'SORT_CARS':
            return {
                ...state,
                order: action.data
            }
        default:
            return initState;
    }
};

export default carReducer;