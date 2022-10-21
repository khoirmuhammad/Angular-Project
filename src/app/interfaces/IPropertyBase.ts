export interface IPropertyBase{
  Id:number | null,
  SellRent:number | null,
  Name:string,
  PropertyType:string | null,
  FurnitureType: string | null,
  Bhk: number | null,
  BuiltArea: number | null,
  City: string | null,
  Price:number | null,
  RTM: number | null,
  Image?:string
}
