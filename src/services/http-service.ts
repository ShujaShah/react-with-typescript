import apiClient from "./api-client";

interface Entity{
    id: number;
}

class HttpService{
    endpoint: string;
    constructor( endpoint: string){
        this.endpoint = endpoint;
    }
    getAllUsers<T>(){
        const controller = new AbortController();
       const request =  apiClient
      .get<T[]>(this.endpoint +"/", { signal: controller.signal })
      return {request, cancel:()=>{controller.abort()}}
    }

    create<T>(entity: T){
        return apiClient.post(this.endpoint+"/", entity)
    }

    update<T extends Entity>(entity: T){
       return  apiClient.patch(this.endpoint + "/" + entity.id, entity)
    }

    delete(id: number){
        return apiClient.delete(this.endpoint + "/" + id);
    }
}


const create = (endpoint: string)=> new HttpService(endpoint)
export default create;