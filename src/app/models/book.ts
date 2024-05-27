export interface Book {
  id?: string;
  title: string;
  author: string;
  summary: string;
  price: number;
  imageURL: string;
  genres: string[];
  featured: boolean;
  bestSeller: boolean;
  totalQty: number;
}
