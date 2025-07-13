const ErrorMessage = ({ message }) => {
  return (
    <div className="p-4 text-center text-red-500 dark:text-red-400">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
