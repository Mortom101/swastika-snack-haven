
export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const reviews: Review[] = [
  {
    name: "Ramesh Sharma",
    rating: 5,
    comment: "Phurandana is exactly like my grandmother used to make. The authentic taste brings back so many memories!",
    date: "March 15, 2023"
  },
  {
    name: "Anita Gurung",
    rating: 5,
    comment: "I order the baked peanuts every month. They're so addictive and much healthier than store-bought snacks.",
    date: "January 28, 2023"
  },
  {
    name: "Sunil Thapa",
    rating: 4,
    comment: "Great quality products. The packaging keeps everything fresh for months. Will definitely order again.",
    date: "April 10, 2023"
  }
];
