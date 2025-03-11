
export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export type ReviewFormData = Omit<Review, 'id' | 'date'>;
