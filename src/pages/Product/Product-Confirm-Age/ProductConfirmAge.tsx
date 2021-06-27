import './ProductConfirmAge.scss';

import { useState } from 'react';

export default function ProductConfirmAge(props: any) {
  const [isUnderage, setIsUnderage] = useState(false);

  const { goToMain } = props;

  return (
    <div className="confirm-age">
      <h1>Confirm your age</h1>
      <p>Are you 21 or older?</p>

      <button className="yes" onClick={() => goToMain()}>Yes</button>
      <button className="no" onClick={() => setIsUnderage(true)}>No</button>

      {isUnderage &&
        <p className="error">You must be 21+ to visit this site</p>
      }
    </div>
  );
}