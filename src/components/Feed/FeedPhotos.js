import React, { useEffect } from 'react'
import FeedPhotosItem from './FeedPhotosItem.js'
import {useFetch} from '../../hooks/useFetch.js'
import { PHOTOS_GET } from '../../api.js';
import { Erro } from '../Helper/Erro.js';
import Loading from '../Helper/Loading.js';
import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {

    const {data, loading, error, request} = useFetch();
    
    useEffect(()=>{
        async function fetchPhotos(){
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
            const {response, json}= await request(url,options)
            console.log(json)
            
        }
        fetchPhotos();
    }, [request])

    if(error) return <Erro erro={error}/>
    if(loading) return <Loading/>
    if(data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                 {data.map((photo) => (
                <FeedPhotosItem
                    key={photo.id}
                    photo={photo}
                    
                />
        ))}
                
            </ul>
        )
    else return null;
}

export default FeedPhotos