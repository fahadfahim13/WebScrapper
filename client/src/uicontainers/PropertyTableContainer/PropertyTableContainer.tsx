import PropertyTable from 'components/PropertyTable'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectSearchProperties } from 'store/SearchProperties/selectors';

const PropertyTableContainer = () => {
    const dispatch = useAppDispatch();
  const properties = useAppSelector(selectSearchProperties);

  return <>
    {(properties.data && properties.data.length) ? <PropertyTable tableBody={properties.data} /> : null}
    </>
}

export default PropertyTableContainer