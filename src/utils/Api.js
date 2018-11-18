import axios from "axios";

export default {
  // Gets all cat
  getCats: function() {
    return axios.get("/api/cats");
  },
  // Gets the book with the given id
  getCat: function(id) {
    return axios.get("/api/cats/" + id);
  },
  // Deletes the book with the given id
  deleteCats: function(id) {
    return axios.delete("/api/cats/" + id);
  },
  // Saves a cat to the database
  saveCat: function(catData) {
    return axios.post("/api/CatForm", catData);
  },
  saveOwner: function(ownerData){
    return axios.post("api/OwnerForm", ownerData);
  },
  saveFoster: function(fosterData){
    return axios.post("api/OwnerForm", fosterData);
  },
  updateCats: function(id){
    return axios.put("api/catList" + id);
  }

  
};


