import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/${currency}/usd.json`)
            .then((res) => res.json())
            .then((res) => setData(res))
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
