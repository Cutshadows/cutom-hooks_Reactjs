import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
    
    const isMounted = useRef(true);
    
    const [state, setState] = useState({
        data:null,
        loading:true,
        error:null
    })
    useEffect(() => {
        return()=>{
            isMounted.current=false;
        }
    }, [])

    useEffect(() => {
        setState({
            data:null,
            loading:true,
            error:null
        })
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                    // setTimeout(()=>{
                        if(isMounted.current){
                                setState({
                                    loading:false,
                                    error:null,
                                    data
                                })
                        }
                    // }, 3000)
            }).catch(()=>{
                setState({
                    data:null,
                    loading:false,
                    error:'No se pudo cargar la información'
                })  
            })
    }, [url])

    return state;

}

//https://www.breakingbadapi.com/api/
 
export default useFetch;