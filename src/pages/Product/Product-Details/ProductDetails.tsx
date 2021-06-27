import './ProductDetails.scss';

export default function ProductDetails(props: any) {
  const { details } = props;

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
      <DetailsList />
    </div>
  );
}