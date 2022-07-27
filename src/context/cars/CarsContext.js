import { createContext, useReducer } from "react";
import { ApiGetRequest, ApiPostRequest } from "services/Api";
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

  const getCarList = async (data) => {
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
            carsData: response?.data || [],
            loading: false,
            isNotFound: response?.data?.items?.length === 0 ? true : false,
            error: false,
            showResults: true,
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
          showResults: false,
        },
      });
    }
  };

  const getCars = async (data) => {
    setLoading();

    try {
      const response = await ApiPostRequest(`/admin/car`, data);
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
            showResults: true,
            carsData: response?.data || [],
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
          showResults: false,
          loading: false,
          isNotFound: false,
          error: true,
        },
      });
    }
  };

  const getCarDetails = async (id) => {
    setLoading();

    try {
      const response = await ApiGetRequest(`/admin/car/${id}`);
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
        const data = (await response?.data) || {};
        dispatch({
          type: SET_CARS,
          payload: {
            carDetails: data || {},
            loading: false,
            isNotFound: Object.keys(data).length === 0,
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
      payload: carsState,
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
        getCarDetails,
        getCarList,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContext;
