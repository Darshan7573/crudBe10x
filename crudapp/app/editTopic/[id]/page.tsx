import EditTopicForm from "@/components/EditTopicForm";

interface Topic {
  title: string;
  description: string;
}

const getTopicById = async (id: string): Promise<Topic> => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error for further handling if needed
  }
};

interface EditTopicProps {
  params: {
    id: string;
  };
}

export default async function EditTopic({ params }: EditTopicProps) {
  const { id } = params;
  const topic = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
