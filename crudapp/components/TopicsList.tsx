"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

interface Topic {
  _id: string;
  title: string;
  description: string;
}

const getTopics = async (): Promise<{ topics: Topic[] }> => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] };
  }
};

const TopicsList: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { topics } = await getTopics();
      setTopics(topics);
    };

    fetchData();
  }, []);

  const handleRemoveFromState = (id: string) => {
    setTopics((prevTopics) => prevTopics.filter((topic) => topic._id !== id)); // Remove the topic from state
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {topics.length === 0 ? (
        <p className="text-center text-gray-500">No topics available</p>
      ) : (
        topics.map((t) => (
          <div
            key={t._id}
            className="p-6 border border-slate-300 my-4 bg-white rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="font-bold text-xl text-gray-800">{t.title}</h2>
                <p className="text-gray-600">{t.description}</p>
              </div>

              <div className="flex gap-2">
                <RemoveBtn
                  id={t._id}
                  onRemove={() => handleRemoveFromState(t._id)} // Pass callback to remove topic from state
                />
                <Link href={`/editTopic/${t._id}`} aria-label="Edit Topic">
                  <HiPencilAlt
                    size={24}
                    className="text-gray-500 hover:text-green-600 transition duration-200"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TopicsList;
