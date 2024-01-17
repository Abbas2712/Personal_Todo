import { useState, useEffect } from "react"

const DisplayDate = ()=>{
    const [currentdate, setcurrentdate] = useState('')
    useEffect(()=>{
        
        const getCurrentDate=()=>{

            const options ={
                weekday: 'long',
                day: 'numeric',
                month: 'long',
            }
        
            const currentData = new Date()
            const formattedDate = currentData.toLocaleString('en-US', options)
            
            setcurrentdate(formattedDate)
        }

        getCurrentDate()

        const interval = setInterval(getCurrentDate, 60000)

        return () => clearInterval(interval)

    },[])

        return currentdate
}

export default DisplayDate;