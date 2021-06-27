import './ProductDetails.scss';

export default function ProductDetails(props: any) {
  const { details, goToMain } = props;

  function DetailsList() {
    return (
      <ul>
        {Object.entries<string>(details).map((arr) => (
          <li>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="product-details">
      <button onClick={() => goToMain()}>
        <span className="material-icons-outlined">
          arrow_back
        </span>
        <span> Back</span>
      </button>

      <DetailsList />
    </div>
  );
}