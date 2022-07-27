import PropertyTable from 'components/PropertyTable'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectSearchProperties } from 'store/SearchProperties/selectors';
import PropertyDetailsContainer from 'uicontainers/PropertyDetailsContainer';
import useSearchInputs from 'uicontainers/SearchInputContainer/hook';

const PropertyTableContainer = () => {
    const dispatch = useAppDispatch();
  const properties = useAppSelector(selectSearchProperties);
  const { getPropertyDetails } = useSearchInputs();

  const [details, setDetails] = useState({
    open: false,
    property: properties.data[0],
    clicked: false,
  });

  useEffect(() => {
    if(properties.status === 'idle'){
      if(details.clicked){
        setDetails((prev) => ({
          ...prev,
          clicked: false,
          open: true
        }))
      }
    }
  }, [properties.status]);

  const handleDetailsClick = (id: number, detailsUrl: string) => {
    getPropertyDetails(id, detailsUrl);
    setDetails((prev) => ({
      ...prev,
      property: properties.data[id],
      clicked: true
    }))
  };

  const handleClose = () => {
    setDetails((prev) => ({
      ...prev,
      clicked: false,
      open: false
    }))
  }

  return <>
    {details.property && <PropertyDetailsContainer open={details.open} property={details.property} onClose={handleClose} />}
    {(properties.data && properties.data.length) ? <PropertyTable tableBody={properties.data} getPropertyDetails={handleDetailsClick} /> : null}
    </>
}

export default PropertyTableContainer