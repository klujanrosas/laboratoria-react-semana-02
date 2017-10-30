class DataSource {
  constructor() {

  }

  getComments(user) {
    return [
      { id: 0, text: `[COMMENT]${user}: Hoy está nublado` },
      { id: 1, text: `[COMMENT]${user}: Hoy estoy feliz` },
      { id: 2, text: `[COMMENT]${user}: Mi internet está lento :s` }
    ]
  }

  getBlogPosts(user) {
    return [
      { id: 0, text: `[BLOG_POST]${user}: Post 1` },
      { id: 1, text: `[BLOG_POST]${user}: Post 2` },
      { id: 2, text: `[BLOG_POST]${user}: Post 3` }
    ]
  }
}

export default new DataSource()
