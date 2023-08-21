// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
    
// const useFetch = () => {
//     const [ data ,setData] =  useState([]);
//     const [loading,setLoading] = useState(false)
//     const [error,setError] =  useState(null);

//     const fetchData = async () => {
//         setLoading(true);
        
//         try {
//             const response = await axios.get ('http://localhost:3000/api/products/');
//              // Await this line
//             setData(response.data);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setLoading(false);
//         }
//     }
    

//     useEffect(()=>{
//         fetchData();
//     },[])

//     const refetch = () => {
//         setLoading(true)
//         fetchData()
//     }

//   return { data , loading ,error,refetch}
// }

// export default useFetch

import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]); // Run the effect whenever the URL changes

    const refetch = () => {
        fetchData();
    }

    return { data, loading, error, refetch };
}

export default useFetch;
