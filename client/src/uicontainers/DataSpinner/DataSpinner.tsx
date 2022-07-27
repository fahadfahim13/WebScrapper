import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'store/hooks';
import { selectSearchProperties } from 'store/SearchProperties/selectors';

const DataSpinner = () => {
  const properties = useAppSelector(selectSearchProperties);

  const [loader, setloader] = useState(false);

  useEffect(() => {
    if(properties.status !== 'loading'){
        setloader(false);
    } else{
        setloader(true);
    }
  }, [properties.status])
  
  return (
    <Loader open={loader} />
  )
}

export default DataSpinner