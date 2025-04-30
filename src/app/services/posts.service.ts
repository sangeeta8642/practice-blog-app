import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { POST_ENDPOINT } from "../utils/constants";
import { Observable } from "rxjs";
import { postInterface } from "../utils/type.interface";

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    constructor(private http: HttpClient) { }


    // MAKING HTTP REQUESTS
    // GET REQUEST

    // RxJS
    getAllPosts(): Observable<postInterface[]> {
        return this.http.get<postInterface[]>(POST_ENDPOINT)
    }

    // GET BY ID REQUEST

    // RxJS
    getPost(id: number): Observable<postInterface> {
        return this.http.get<postInterface>(`${POST_ENDPOINT}/${id}`)
    }

    // POST REQUEST

    // RxJS
    addPost(post: postInterface) {
        return this.http.post(POST_ENDPOINT, post)
    }

    // PUT REQUEST

    // RxJS
    updatePost(id: number | undefined, post: postInterface) {
        return this.http.put(`${POST_ENDPOINT}/${id}`, post)
    }

    // DELETE REQUEST 

    // RxJS
    deletePost(id?: number) {
        return this.http.delete(`${POST_ENDPOINT}/${id}`)
    }
}

