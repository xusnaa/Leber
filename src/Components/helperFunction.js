import { data } from "./Constant";

export const HandleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
};

export const filterdata= data.filter((item) => item.verwendung ==='v');