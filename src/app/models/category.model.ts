import { topic } from "./topic.model";

export interface category {
  name: string;
  icon: string;
  topics: [
    topic
  ];
}