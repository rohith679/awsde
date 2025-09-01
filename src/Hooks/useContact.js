"use client";

import { useState, useEffect } from "react";
import ConfigAPIURL from "../../src/config/ConfigAPIURL";
import APIRequest from "../utils/APIRequest";
import useAlert from "./useAlert";

export default function contactHook() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { publishNotification } = useAlert();

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await APIRequest.request(
        "GET",
        ConfigAPIURL.ListContacts
      );
      if (response?.data?.responseCode === 109) {
        setContacts(response?.data?.contacts);
      }
    } catch (err) {
      setError("Error fetching contacts");
    } finally {
      setLoading(false);
    }
  };

  // Create new contact
  // useContact.js
  const createContact = async (contactData) => {
    try {
      setLoading(true); // start spinner
      const response = await APIRequest.request(
        "POST",
        ConfigAPIURL.CreateContact,
        JSON.stringify(contactData)
      );

      if (response?.data?.responseCode === 109) {
        publishNotification("Message sent successfully", "success");
        return true;
      } else {
        publishNotification("Failed to send message", "error");
        return false;
      }
    } catch (err) {
      publishNotification("Error sending message", "error");
      return false;
    } finally {
      setLoading(false); // ⬅️ this ensures the button goes back to normal
    }
  };

  // Update contact (optional)
  const updateContact = async (id, contactData) => {
    try {
      const response = await APIRequest.request(
        "PUT",
        `${ConfigAPIURL.UpdateContact}/${id}`,
        contactData
      );
      if (response?.data?.responseCode === 109) {
        setContacts((prev) =>
          prev.map((c) => (c._id === id ? response.data.result : c))
        );
      }
    } catch (err) {
      setError("Error updating contact");
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      const response = await APIRequest.request(
        "DELETE",
        `${ConfigAPIURL.DeleteContact}?id=${id}`
      );
      if (response?.data?.responseCode === 109) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
      }
    } catch (err) {
      setError("Error deleting contact");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return {
    contacts,
    loading,
    error,
    createContact,
    fetchContacts,
    updateContact,
    deleteContact,
  };
}
