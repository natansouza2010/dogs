import React, { useEffect, useState } from 'react'

const useMedia = (media) => {

    const [match, setMatch] = useState(null);

    useEffect(()=>{
        function changeMatch(){
            const {matches} = window.matchMedia(media);
            
            setMatch(matches);
            console.log(matches)
        }
        window.addEventListener('resize', changeMatch);
        return () => {
            window.removeEventListener('resize', changeMatch)
        }

    },[media])
    return (
        match
    )
}

export default useMedia