import { useCallback } from "react";
import { DataContext } from "../Context/data.context"

export const FetchDatosDentista = () => {
    const {data, setData} = useContext(DataContext);

    const hayData = useCallback(() => {
        setData()
    }, [setData])

    return (
        // hayDentista: ()
        //hayData
    )
    }

export default FetchDatosDentista

//https://www.youtube.com/watch?v=VT5S9Y49SYs, en minuto 28.37