const ShopAPI = {
  GetRequestURL: function (category: string) {
    return process.env.BASE_URL + `/api/products/?category=${category}`;
  },
  GetRequestOptions: {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  },
};

export default ShopAPI;
