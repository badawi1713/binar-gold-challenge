import { createContext, useReducer } from "react";
import { ApiGetRequest } from "services/Api";
import { SET_CARS } from "../constants";
import carsReducer from "./CarsReducer";
import { carsState } from "./CarsState";

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carsReducer, carsState);

  const setLoading = () => {
    dispatch({
      type: SET_CARS,
      payload: {
        loading: true,
      },
    });
  };

  const getCars = async () => {
    setLoading();
    
    try {
      const response = await ApiGetRequest(`/admin/car`);
      if (response?.error) {
        dispatch({
          type: SET_CARS,
          payload: {
            loading: false,
            isNotFound: false,
            error: true,
          },
        });
      } else {
        dispatch({
          type: SET_CARS,
          payload: {
            carsData: response?.data,
            loading: false,
            isNotFound: response?.data?.items?.length === 0 ? true : false,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: SET_CARS,
        payload: {
          loading: false,
          isNotFound: false,
          error: true,
        },
      });
    }
  };

  const clearCarsState = () => {
    dispatch({
      type: SET_CARS,
      payload: {
        carsData: [],
        loading: false,
        error: false,
      },
    });
  };

  const changeCars = (data) => {
    dispatch({
      type: SET_CARS,
      payload: data,
    });
  };

  return (
    <CarsContext.Provider
      value={{
        ...state,
        clearCarsState,
        changeCars,
        getCars,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContext;
