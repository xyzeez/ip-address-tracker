// Components
const DataBoard = ({ data }) => {
  const emptyData = {
    ip: '---.---.---.---',
    location: '---, ---',
    timezone: '---',
    isp: '---',
  };

  const renderData = data
    ? {
        ip: data.ip,
        location: `${data.location.city}, ${data.location.region}`,
        timezone: `UTC${data.location.timezone}`,
        isp: data.isp || '---',
      }
    : emptyData;

  return (
    <div className="w-full grid grid-cols-1 grid-rows-1">
      <ul className="font-rubik text-xl md:text-2xl text-gray-900 font-bold grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-4 gap-4 md:gap-8 sm:text-left text-center w-full">
        <li className="relative sm:after:absolute sm:after:w-[1px] sm:after:-right-2 sm:after:top-[15%] sm:after:h-[70%] sm:after:bg-gray-600">
          <span className="block text-xs mb-2 text-gray-600">IP ADDRESS</span>
          {renderData.ip}
        </li>
        <li className="relative sm:after:absolute sm:after:w-[1px] sm:after:-right-2 sm:after:top-[15%] sm:after:h-[70%] sm:after:bg-gray-600">
          <span className="block text-xs mb-2 text-gray-600">LOCATION</span>
          {renderData.location}
        </li>
        <li className="relative sm:after:absolute sm:after:w-[1px] sm:after:-right-2 sm:after:top-[15%] sm:after:h-[70%] sm:after:bg-gray-600">
          <span className="block text-xs mb-2 text-gray-600">TIMEZONE</span>
          {renderData.timezone}
        </li>
        <li>
          <span className="block text-xs mb-2 text-gray-600">ISP</span>
          {renderData.isp}
        </li>
      </ul>
    </div>
  );
};

export default DataBoard;
