import React from 'react'

export default function Card(props) {
    return (
        <section className='card'>
            <div className='card--file'>
                <img src={props.item.imageUrl} className='card--image'/>
                <div className='image--info'>
                    <div className='card-location'>
                        <img src='../images/icons8-maps-48.png' className='location--png' />
                        <span className='location--text'>{props.item.location}</span>
                        <span className='location--map'>
                        <a href={props.item.googleMapsUrl}>
                        View on Google Maps</a>
                        </span>
                    </div>
                    <h2 className='card--title'>{props.item.title}</h2>
                    <span className='card--date'>{props.item.startDate} - {props.item.endDate}</span>
                    <p className='card--desc'>{props.item.description}</p>
                </div>
            </div>
        </section>
    )
}