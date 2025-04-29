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

    getAllPosts(): Observable<postInterface[]> {
        return this.http.get<postInterface[]>(POST_ENDPOINT)
    }

    getPost(id: number): Observable<postInterface> {
        return this.http.get<postInterface>(`${POST_ENDPOINT}/${id}`)
    }

    addPost(post: postInterface) {
        return this.http.post(POST_ENDPOINT, post)
    }

    updatePost(id: number | undefined, post: postInterface) {
        return this.http.put(`${POST_ENDPOINT}/${id}`, post)
    }

    deletePost(id?: number) {
        return this.http.delete(`${POST_ENDPOINT}/${id}`)
    }
}

