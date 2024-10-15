"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface RemoveBtnProps {
  id: string;
  onRemove: () => void; // Accept onRemove prop to handle UI update
}

export default function RemoveBtn({ id, onRemove }: RemoveBtnProps) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        onRemove(); // Remove topic from the state immediately
        router.refresh(); // Optional: Still refresh to get fresh data if needed
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
