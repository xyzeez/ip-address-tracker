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
      <ul className="font-rubik text-xl text-gray-900 font-bold flex flex-col gap-4 items-center text-center w-full">
        <li className="">
          <span className="block text-xs mb-2 text-gray-600">IP ADDRESS</span>
          {renderData.ip}
        </li>
        <li>
          <span className="block text-xs mb-2 text-gray-600">LOCATION</span>
          {renderData.location}
        </li>
        <li>
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
