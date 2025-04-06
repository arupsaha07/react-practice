import config from "../config/config";

import { Client, ID, Databases, Storage } from "appwrite";

export class StorageService {

    client = new Client();
    databases;
    storage;
    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async createPost(title, slug, content, featuredImage, status, userId) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {title,content, featuredImage, status, userId})
        } catch (error) {
            console.log("service:: createPost", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {title, content, featuredImage, status})
        } catch (error) {
            console.log("service::updatePost", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
            return true;
        } catch (error) {
            console.log("service:: deletepost", error);
        }
    }

    
}

const service = new StorageService();
export default service;

