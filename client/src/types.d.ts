export interface ProductProps {
    name: string;
    normalPrice: number;
    discount: number;
    specialPrice: number;
    image: string;

  }

 export interface ProductDataProps extends ProductProps {
    _id: string;
  }

