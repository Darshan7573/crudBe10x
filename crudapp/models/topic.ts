import mongoose, { Schema, Document } from "mongoose";

// Define an interface for the Topic document
interface ITopic extends Document {
  title: string;
  description: string;
}

// Create the schema
const topicSchema: Schema<ITopic> = new Schema(
  {
    title: {
      type: String,
      required: true, // Optional: Add validation as needed
    },
    description: {
      type: String,
      required: true, // Optional: Add validation as needed
    },
  },
  {
    timestamps: true,
  }
);

// Create the model
const Topic =
  mongoose.models.Topic || mongoose.model<ITopic>("Topic", topicSchema);

export default Topic;
