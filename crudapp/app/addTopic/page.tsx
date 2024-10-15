"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("https://crudbe10x.vercel.app/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Add a New Topic
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          type="text"
          placeholder="Topic Title"
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Topic Description"
          rows={4}
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition-colors duration-300 font-bold text-white py-2 rounded"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}
