export interface MenuCategoryItem {
  breadcrumb: string[];
  title: string;
  price: number;
  total: number;
  quantity: number;
  selected: boolean;
  icon: string;
  color?: string;
}
