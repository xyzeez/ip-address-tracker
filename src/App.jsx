import { useEffect, useReducer } from 'react';

// components
import Form from './components/form';
import DataBoard from './components/dataBoard';
import Map from './components/map';

// Loader component
import { squircle } from 'ldrs';
squircle.register('l-loader');

// helpers
import { getIpData } from './helpers';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'setIsLoading':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case 'setIP':
      return {
        ...state,
        userIP: action.userIP,
      };
    case 'setData':
      return {
        ...state,
        userCoords: [
          action.userData.location.lat,
          action.userData.location.lng,
        ],
        userData: action.userData,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    userIP: '',
    userCoords: [0, 0],
    isLoading: true,
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        dispatch({ type: 'setIsLoading', isLoading: true });

        const newData = await getIpData(state.userIP);

        if (!newData) throw new Error();

        dispatch({ type: 'setData', userData: newData });
      } catch (error) {
        dispatch({ type: 'setData', userData: null });
        console.error(error);
      } finally {
        dispatch({ type: 'setIsLoading', isLoading: false });
      }
    };

    getUserData();
  }, [state.userIP]);

  return (
    <main className="grid grid-rows-[max-content_1fr] border min-h-screen bg-white">
      <section className="flex gap-6 flex-col items-center bg-cover bg-no-repeat p-6 w-full h-[max(46vh,20rem)] md:h-[min(46vh,16rem)] bg-[url('./assets/pattern-bg-mobile.png')]  sm:bg-[url('./assets/pattern-bg-desktop.png')]">
        <h1 className="font-rubik text-white font-medium text-[1.5rem] -tracking-tighter">
          IP Address Tracker
        </h1>
        <Form formHandler={(ip) => dispatch({ type: 'setIP', userIP: ip })} />
        <div className="w-full max-w-5xl z-[9999] bg-white grid grid-cols-1 grid-rows-1 p-6 md:p-8 rounded-2xl">
          {state.isLoading ? (
            <div className="flex min-h-20 flex-row items-center justify-center">
              <l-loader size={45} color="black"></l-loader>
            </div>
          ) : (
            <DataBoard data={state.userData} />
          )}
        </div>
      </section>
      <section className="w-full bg-gray-600 h-full min-h-[max(60vh,20rem)]">
        <Map userCoords={state.userCoords} />
      </section>
    </main>
  );
};

export default App;
