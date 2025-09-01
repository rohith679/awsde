"use client";

import { useState, useEffect } from "react";
import ConfigAPIURL from "../../../../config/ConfigAPIURL";
import APIRequest from "../../../../utils/APIRequest";
import useAlert from "../../../../Hooks/useAlert";

export default function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [reviewsAgree, setReviewsAgree] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { publishNotification } = useAlert();

  // Fetch all reviews
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch(ConfigAPIURL.getReviews, { method: "GET" });
      const data = await res.json();
      if (res.ok) {
        setReviews(data?.data?.reviews || []);
      } else {
        setError(data.message || "Failed to fetch reviews");
      }
    } catch (err) {
      setError("Error fetching reviews");
    } finally {
      setLoading(false);
    }
  };
  // ✅ Fetch Only Agreed Reviews
  const fetchReviewsAgree = async () => {
    try {
      setLoading(true);
      const res = await fetch(ConfigAPIURL.getReviewsAgree, { method: "GET" });
      const data = await res.json();
      if (res.ok) {
        setReviewsAgree(data?.data?.reviews || []);
      } else {
        setError(data.message || "Failed to fetch reviews");
      }
    } catch (err) {
      setError("Error fetching reviews");
    } finally {
      setLoading(false);
    }
  };
  // Create new review
  const createReview = async (reviewData) => {
    try {
      const res = await fetch(ConfigAPIURL.createReview, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });
      console.log("ConfigAPIURL.createReview: ", ConfigAPIURL.createReview);
      console.log("API response:", res);

      const data = await res.json();
      if (res.ok) {
        publishNotification("Review Created Successfully", "success");
        setReviews((prev) => [data.review, ...prev]); // add new review on top
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      return { success: false, message: "Error submitting review" };
    }
  };

  const deleteReview = async (id) => {
    try {
      const response = await APIRequest.request(
        "DELETE",
        `${ConfigAPIURL.deleteReview}?id=${id}`
      );

      if (response?.data?.responseCode === 109) {
        setReviews((prev) => prev.filter((r) => r._id !== id));
        return { success: true, message: "Review deleted successfully" };
      } else {
        return {
          success: false,
          message: response?.data?.message || "Failed to delete review",
        };
      }
    } catch (err) {
      console.error("Error deleting review:", err);
      return { success: false, message: "Error deleting review" };
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    loading,
    error,
    reviewsAgree,
    deleteReview,
    createReview,
    fetchReviews,
    fetchReviewsAgree,
  };
}
