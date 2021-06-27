import { useEffect, useState } from 'react';

import ProductConfirmAge from './Product-Confirm-Age/ProductConfirmAge';
import ProductDetails from './Product-Details/ProductDetails';
import ProductDetailsHeader from './Product-Details/ProductDetailsHeader';
import ProductMain from './Product-Main/ProductMain';

enum Pages {
  Undefined = 1,
  ConfirmAge,
  Main,
  Details,
}

export default function Product(props: any) {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Undefined);

  const { image, name, sku, ageRestricted, details } = props.response.data.tag.product;
  const { name: brandName } = props.response.data.tag.brand;

  useEffect(() => {
    if (ageRestricted) {
      setCurrentPage(Pages.ConfirmAge);
    } else {
      setCurrentPage(Pages.Main);
    }
  }, [ageRestricted]);

  function goTo(page: Pages) {
    setCurrentPage(page);
  }

  return (
    <>
      {currentPage !== Pages.Details
        ? <header className="container">{brandName}</header>
        : <ProductDetailsHeader goToMain={() => goTo(Pages.Main)} />}

      <main className="container">
        {/* ==== CONFIRM AGE ==== */}
        {(currentPage === Pages.ConfirmAge) &&
          <ProductConfirmAge
            goToMain={() => goTo(Pages.Main)}
          />
        }

        {/* ==== MAIN PRODUCT PAGE ==== */}
        {(currentPage === Pages.Main) &&
          <ProductMain
            image={image}
            name={name}
            sku={sku}
            details={details}
            goToDetails={() => goTo(Pages.Details)}
          />
        }

        {/* ==== DETAILS PAGE ===== */}
        {(currentPage === Pages.Details) &&
          <ProductDetails
            details={details}
          />
        }
      </main>
    </>
  );
}