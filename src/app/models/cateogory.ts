export interface Category {
  id: string;
  categoryName: string;
  parentId: string | null;
  itemsCount: number | null;
  childNodes: Category[] | null;
}
