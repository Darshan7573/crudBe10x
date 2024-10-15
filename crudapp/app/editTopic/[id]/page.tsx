import EditTopicForm from "@/components/EditTopicForm";

interface Topic {
  _id: string;
  title: string;
  description: string;
}

const getTopicById = async (id: string): Promise<Topic | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json();
    return data.topic;
  } catch (error) {
    console.log(error);
    return null; // Return null in case of an error
  }
};

interface Params {
  id: string;
}

export default async function EditTopic({ params }: { params: Params }) {
  const { id } = params;
  const topic = await getTopicById(id);

  // Check if the topic is null before destructuring
  if (!topic) {
    return <div>Error: Topic not found</div>;
  }

  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
