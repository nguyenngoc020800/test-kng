import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: function () {
    return {
      user: JSON.parse(localStorage.getItem("user")) || null,
      userList: JSON.parse(localStorage.getItem("userList")) || [],
    };
  },
  actions: {
    addToList(value) {
      this.userList.push(value);
      this.userList = this.userList.map((user, index) => {
        return { ...user, id: index };
      });
      localStorage.setItem("userList", JSON.stringify(this.userList));
    },
    deleteUser(id) {
      const list = [...this.userList];
      list.splice(id, 1);
      const list2 = list.map((user, index) => {
        return { ...user, id: index };
      });
      this.userList = list2;
      localStorage.setItem("userList", JSON.stringify(this.userList));
    },
    setUserUpdateAction(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    updateUser(user) {
      this.userList.splice(user.id, 1, user);
      localStorage.setItem("userList", JSON.stringify(this.userList));
    },
  },
});
