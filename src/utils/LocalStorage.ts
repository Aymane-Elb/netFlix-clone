import { MediaItem } from "@/types";

const handleAddToLocalStorage=(item: MediaItem)=>{
    const existingItems:MediaItem[]=JSON.parse(
        localStorage.getItem('favoriteItems')||'[]'
    )
    const isAlreadyInList =existingItems.some(
        (existingItems)=>{
            existingItems.id === item.id && existingItems.type === item.type
        }
    )
    if(!isAlreadyInList){
        existingItems.push(item)
        localStorage.setItem('favoriteItems',JSON.stringify(existingItems))
    }
};
const handleRemoveFromLoaclStorage=(item: MediaItem)=>{
    const existingItems:MediaItem[]=JSON.parse(
        localStorage.getItem('favoriteItems')||'[]'
    );
    const updatedItems = existingItems.filter((existingItems)=>{
        return existingItems.id !== item.id && existingItems.type !== item.type;
    });
    localStorage.setItem('favoriteItems',JSON.stringify(updatedItems));

}
const isItemInLocalStorage = (id:number, type:string):boolean =>{
    const existingItems:MediaItem[]=JSON.parse(
        localStorage.getItem('favoriteItems') || '[]'
    );
    return existingItems.some(
        (existingItems)=>existingItems.id === id && existingItems.type===type
    )
}
export default handleAddToLocalStorage;
export {handleRemoveFromLoaclStorage, isItemInLocalStorage};