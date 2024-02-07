const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-500">
      <div className="flex items-center justify-between mx-10">
        <div className="flex flex-col justify-center items-start h-1/2">
          <h1 className="text-6xl font-bold text-gray-800 mt-10 text-center">React con Firebase</h1>
          <p className="text-lg text-gray-600 ml-8 mt-10">Proyecto DWEC</p>
        </div>
        <div>
          <video id="video-firebase"
          className="w-1/2"
          autoPlay
          loop 
          muted>
            <source
          </video>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
