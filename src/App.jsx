// import React from 'react';

// components
import Form from './components/form';
import DataBoard from './components/dataBoard';
import Map from './components/map';

const App = () => {
  return (
    <main className="grid grid-rows-[max-content_1fr] border min-h-screen bg-white">
      <section className="flex gap-6 flex-col items-center bg-cover bg-no-repeat p-6 w-full h-[46vh] bg-[url('./assets/pattern-bg-mobile.png')]">
        <h1 className="font-rubik text-white font-medium text-[1.5rem] -tracking-tighter">
          IP Address Tracker
        </h1>
        <Form />
        <div className="w-full relative">
          <DataBoard />
        </div>
      </section>
      <section className="w-full bg-gray-600 min-h-full">
        <Map />
      </section>
    </main>
  );
};

export default App;
