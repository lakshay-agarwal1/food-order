import "./shimmer.css";


const ShimmerElement = () => {
  return (
    <div className="shim-container">
      <div className="shim-card">
        <div className="shim-img"></div>
        <div className="shim-title"></div>
        <div className="shim-subtitle"></div>
        <div className="shim-subtitle"></div>
        <div className="shim-subtitle"></div>

        <div className="shim-price"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shim-body">
      <ShimmerElement />
      <ShimmerElement />
      <ShimmerElement />
      <ShimmerElement />
      <ShimmerElement />
      <ShimmerElement />
      <ShimmerElement />
      <ShimmerElement />
      <ShimmerElement />
      <ShimmerElement />
    </div>
  );
};

export default Shimmer;
