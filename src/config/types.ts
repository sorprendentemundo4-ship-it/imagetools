export type Category = { id: string; label: string };
export type InformationPage = {
  path: string;
  title: string;
  description: string;
  readyToIndex: boolean;
};
export type ToolDefinition = {
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  symbol: string;
  keywords: string[];
  readyToIndex: boolean;
  explanation?: string;
  example?: string;
  limitations?: string;
  faqs?: { question: string; answer: string }[];
};
