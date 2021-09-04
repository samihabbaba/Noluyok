export interface Category {
  id: string | null;
  categoryName: string | null;
  parentId: string | null;
  itemsCount: number | null;
  childNodes: Category[] | null;
}
