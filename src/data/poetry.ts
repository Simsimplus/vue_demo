import axios from "axios";

export class Poetry{
    title:string = "";
    chapter:string = "";
    section:string = "";
    content:Array<string> = []
}

export function getRandomPoetry(
  onResponse:(p:Poetry)=>void
) {
    axios.get<Poetry>("http://192.168.29.114:8000/poetry/random",).catch(
      (e) => alert(e)
    ).then(
      (r) => {
        if(r){
          onResponse(r.data)
        }
      }
    )
  }