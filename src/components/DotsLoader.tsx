import "../styles/dots-loader.css";

interface DotsLoaderProps {
  className?: string;
}

const DotsLoader: React.FC<DotsLoaderProps> = ({ className }) => {
  return (
    <div className="dots-loader">
      <div className={`dot ${className}`}></div>
      <div className={`dot ${className}`}></div>
      <div className={`dot ${className}`}></div>
    </div>
  );
};

export default DotsLoader;
