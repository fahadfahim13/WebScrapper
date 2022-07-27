import { Card, CardContent, Drawer, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { PropertyDetails } from 'shared/types';
import { GoogleMap, Marker } from "react-google-maps";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const PropertyDetailsContainer = (props: {open: boolean, property: PropertyDetails, onClose: () => void}) => {
  const {open, property, onClose} = props;

//   const [lat, setLat] = useState('0');
//   const [lng, setLng] = useState('0');

//   useEffect(() => {
//     if(!property.map || property.map === ''){
//         return;
//     }
//     setLat(property.map.split('&')[1].split('q=')[1].split(',')[0] ?? '0')
//     setLng(property.map.split('&')[1].split('q=')[1].split(',')[1] ?? '0')
//   }, [property.map]);

  console.log(property.map && (property.map.split('&')[1].split('q=')[1].split(',')[0] ?? '0'));

  return (
    <React.Fragment>
    <Drawer
      anchor={'right'}
      open={open}
      onClose={onClose}
    >
      <Card>
        <CardContent>
        {/* {property.map && parseInt(property.map.split('&')[1].split('q=')[1].split(',')[0] ?? '0') && parseInt(property.map.split('&')[1].split('q=')[1].split(',')[1] ?? '0') && <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: parseInt(property.map.split('&')[1].split('q=')[1].split(',')[0]), lng: parseInt(property.map.split('&')[1].split('q=')[1].split(',')[1]) }}
        >
        </GoogleMap>} */}

        <iframe width="600" height="500" id="gmap_canvas" src={property.map}></iframe>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            City: {property.city} State {property.county}
        </Typography>
        <Typography variant="h5" component="div">
            <Link href={property.link} target='_blank'>{property.name}</Link>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {property.phone}
        </Typography>
        <Typography variant="body2">
            {property.address}
        </Typography>
        </CardContent>
      </Card>
    </Drawer>
  </React.Fragment>
  )
}

export default PropertyDetailsContainer