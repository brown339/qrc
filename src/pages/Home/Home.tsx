import './Home.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import APIResponse from '../../models/APIResponse';
import Product from '../Product/Product';

export default function Home() {
  const [state, setState] = useState<APIResponse>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`/api/v1/${id}`)
      .then(response => response.json())
      .then(json => setState(json));
  }, [id]);

  return (
    <>
      {state?.data
        ? <Product response={state} />
        : 'Invalid Tag'
      }
    </>
  )
}