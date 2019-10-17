import axios from "axios";

const client = axios.create({
  baseURL: "http://private-bc245d-brewoptixv2.apiary-mock.com/",
  json: true
});

export default {
  async execute(method, resource, data) {
    return client({
      method,
      url: resource,
      data
    }).then(res => {
      return res.data;
    });
  },
  getBrands() {
    return this.execute("get", "/brands");
  },
  getBrand(entity_id) {
    return this.execute("get", `/brands/${entity_id}`);
  },
  createBrand(data) {
    return this.execute("post", "/brands", data);
  },
  updateBrand(entity_id, data) {
    return this.execute("put", `/brands/${entity_id}`, data);
  },
  deleteBrand(entity_id) {
    return this.execute("delete", `/brands/${entity_id}`);
  }
};
