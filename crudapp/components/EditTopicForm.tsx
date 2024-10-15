"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface EditTopicFormProps {
  id: string;
  title: string;
  description: string;
}

export default function EditTopicForm({
  id,
  title,
  description,
}: EditTopicFormProps) {
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newDescription, setNewDescription] = useState<string>(description);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://crudbe10x.vercel.app/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Edit Topic</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          type="text"
          placeholder="Topic Title"
        />

        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="border border-slate-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          placeholder="Topic Description"
          rows={4}
        />

        <button className="bg-green-600 font-bold text-white py-3 rounded-md hover:bg-green-700 transition duration-200">
          Update Topic
        </button>
      </form>
    </div>
  );
}
