const LoadingMessage = ({ message = "Loading..." }) => {
  return (
    <div className="p-12 text-center">
      <p className="text-4xl font-bold dark:text-white">{message}</p>
    </div>
  );
};

export default LoadingMessage;
