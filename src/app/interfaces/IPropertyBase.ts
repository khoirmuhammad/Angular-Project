export interface IPropertyBase{
  Id:number,
  SellRent:number | null,
  Name:string,
  PropertyType:string,
  FurnitureType: string,
  Bhk: number,
  BuiltArea: number,
  City: string,
  Price:number,
  RTM: number,
  Image?:string
}
