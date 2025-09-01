"use client";

import { useState, useEffect } from "react";
import ConfigAPIURL from "../../src/config/ConfigAPIURL";
import APIRequest from "../utils/APIRequest";
import useAlert from "./useAlert";

export default function quickService() {
  const [quickServices, setQuickServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { publishNotification } = useAlert();

  // Fetch all reviews
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await APIRequest.request(
        "GET",
        ConfigAPIURL.ListQuickServices
      );
      if (response?.data?.responseCode === 109) {
        setQuickServices(response?.data?.requests);
      }
    } catch (err) {
      setError("Error fetching reviews");
    } finally {
      setLoading(false);
    }
  };

  // Create new review
  const createService = async (ServicesData) => {
    try {
      setLoading(true); // start spinner

      const response = await APIRequest.request(
        "POST",
        ConfigAPIURL.CreateQuickServices,
        // `${ConfigAPIURL.CreateQuickServices}?hero=${hello}`,
        JSON.stringify(ServicesData)
      );
      if (response?.data?.responseCode === 109) {
        publishNotification("Service Created Successfully", "success");
        console.log(response?.data);
        return true;
        // return { success: true, message: response?.data?.message };
      }
      setLoading(false);
    } catch (err) {
      return { success: false, message: "Error submitting review" };
    }
  };
  const updateService = async (id, serviceData) => {
    try {
      const response = await APIRequest.request(
        "PUT",
        `${ConfigAPIURL.UpdateQuickService}/${id}`,
        serviceData
      );
      if (response?.data?.responseCode === 109) {
        setQuickServices((prev) =>
          prev.map((s) => (s._id === id ? response.data.result : s))
        );
      }
    } catch (err) {
      setError("Error updating service");
    }
  };
  const deleteService = async (id) => {
    try {
      const response = await APIRequest.request(
        "DELETE",
        `${ConfigAPIURL.DeleteQuickServices}?id=${id}`
      );

      console.log("response: ", response);

      if (response?.data?.responseCode === 109) {
        setQuickServices((prev) => prev.filter((s) => s._id !== id));
      }
    } catch (err) {
      setError("Error deleting service");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    quickServices,
    loading,
    error,
    createService,
    fetchServices,
    updateService,
    deleteService,
  };
}
