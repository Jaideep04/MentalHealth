import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import dayjs from "dayjs"; // For date formatting

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MoodChart = ({ moodHistory }) => {
  // Prepare data for Bar chart with formatted dates
  const data = {
    labels: moodHistory.map(
      (entry) => dayjs(entry.timestamp).format("YYYY-MM-DD HH:mm") // Format timestamp
    ),
    datasets: [
      {
        label: "Mood",
        data: moodHistory.map((entry) => entry.mood), // Ensure mood values are consistent
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Mood Tracker",
      },
    },
  };

  return (
    <div>
      <h2>Mood History</h2>
      {moodHistory.length === 0 ? (
        <p>No mood history available.</p>
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
};

MoodChart.propTypes = {
  moodHistory: PropTypes.array.isRequired, // Expect moodHistory as an array
};

export default MoodChart;
