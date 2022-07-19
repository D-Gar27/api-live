import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  service_name: {
    type: String,
    required: true,
  },
  business_name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: {},
    unique: false,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  desc_myan: {
    type: String,
    required: true,
  },
  desc_eng: {
    type: String,
    required: true,
  },
  image: String,
  services: [
    {
      name: String,
      time: String,
      price: String,
      desc: String,
    },
  ],
});

export default mongoose.model("service", ServiceSchema);
