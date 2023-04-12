interface CountInStock {
  type: Number;
  required: true;
  min: 0;
  max: 255;
}

interface Category {
  name: string;
  icon: string;
  color: string;
}

export interface Products {
  name: string;
  description: string;
  richDescription?: string | '';
  image?: string | '';
  images?: string;
  brand?: string | '';
  price?: number | 0;
  countInStock: CountInStock;
  category?: Category;
  rating?: number | 0;
  numReviews?: number | 0;
  isFeatured?: boolean | false;
  dateCreated?: Date;
}
