export interface ApiCollectionDto<T> {
  "@context": string;
  "@id": string;
  "@type": string;
  totalItems: number;
  member: T[];
}
