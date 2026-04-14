// Simple in-memory database using JSON
export const db = {
  posts: [] as any[],
  
  async getPosts() {
    return this.posts;
  },
  
  async getPostById(id: string) {
    return this.posts.find((p) => p.id === id);
  },
  
  async createPost(data: any) {
    const post = { ...data, id: Date.now().toString(), createdAt: new Date(), updatedAt: new Date() };
    this.posts.push(post);
    return post;
  },
};

