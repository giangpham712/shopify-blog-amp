import axios, {AxiosInstance} from 'axios';
import humps from 'humps';

export default class ShopifyService {

  apiVersion = '2020-01';

  constructor() {
    this.httpClient = axios.create({
      baseURL: `https://100-pure.myshopify.com/admin/api/${this.apiVersion}/`,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async getArticleMetafields(blogId, articleId) {
    const path = `blogs/${blogId}/articles/${articleId}/metafields.json`;
    const response = await this.httpClient.get(path, {
      auth: {
        username: 'c3fc42d8b81382ea619dcf287bb18dbd',
        password: '0777486a78c2758d6ad6aaf7a3794032'
      }
    });
    return humps.camelizeKeys(response.data).metafields;
  }
}
