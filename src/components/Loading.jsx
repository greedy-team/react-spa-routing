const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      <span className="ml-3 text-lg text-gray-600">로딩중...</span>
    </div>
  );
};

export default Loading;
