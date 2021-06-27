import './ProductMain.scss';

export default function ProductMain(props: any) {
  const { image, name, sku, details, goToDetails } = props;

  return (
    <div className="product-main">
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      
      <h1>{name}</h1>
      <h2>{sku}</h2>

      {details &&
        <button onClick={() => goToDetails()}>Product Details</button>
      }
    </div>
  );
}