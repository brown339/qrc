import './ProductDetailsHeader.scss';

export default function ProductDetailsHeader(props: any) {
  const { goToMain } = props;

  return (
    <header className="product-details-header container">
      <button onClick={() => goToMain()}>
        <span className="material-icons-outlined">
          arrow_back
        </span>
        <span> Back</span>
      </button>

      <span className="title">Product Details</span>
    </header>
  );
}