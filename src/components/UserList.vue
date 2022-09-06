<template>
    <div class="list w-100">
        <div class="notification " v-if="userDetail">
            <div class="content user-detail w-75">
                <div className="row ps-5">
              <div className="col-12 col-md-6 user-detail-line">
                <p>Họ và tên: {{userDetail.firstName}} {{userDetail.lastName}}</p>
                <p>Công ty: {{userDetail.company}}</p>
                <p>SĐT: {{userDetail.phoneNumber}}</p>
                <p>Email: {{userDetail.email}}</p>
                <p>Giới tính: {{userDetail.gender}}</p>
              </div>
              <div className="col-12 col-md-6 user-detail-line">
                <p>Thanh toán: {{userDetail.payMode}}</p>
                <p>Số thẻ: {{userDetail.cardNumber}}</p>
                <p>Ngày hết hạn: {{userDetail.expiration}}</p>
                <p>CVN: {{userDetail.cvn}}</p>
                <p>Donate: {{userDetail.donate}}</p>
              </div>
            </div>
                <button class="btn btn-primary w-50" @click.prevent="userDetail = null">xác nhận</button>
            </div>
        </div>
        <div class="notification" v-if="notification">
            <div class="content">
                <h2 class="py-3">XÓA NGƯỜI DÙNG THÀNH CÔNG!</h2>
                <button class="btn btn-primary w-50" @click.prevent="notification = false">xác nhận</button>
            </div>
        </div>
        <input type="text" v-model="input" placeholder="User name..." @keyup="filterByInput">
        <div class="user-list">
            <h2 class="w-100 text-center" v-if="this.userListFilter.length === 0">danh sách trống</h2>
            <table class="table" v-if="this.userListFilter.length !== 0">
                <thead>
                    <tr>
                        <th scope="col" >#</th>
                        <th scope="col" class="title">NAME</th>
                        <th scope="col" class="title">COMPANY</th>
                        <th scope="col" class="title"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in this.userListFilter">
                        <th scope="row">{{user.id}}</th>
                        <td>{{user.firstName}} {{user.lastName}}</td>
                        <td>{{user.company}}</td>
                        <td class="d-flex justify-content-between align-items-center">
                            <button @click="userDetail = user" class="btn btn-outline-success">detail</button>
                            <button @click="this.setUserUpdate(user)" class="btn btn-outline-primary">update</button>
                            <button @click="this.deleteUserAction(user.id)" class="btn btn-outline-danger">delete</button>
                        </td>
                    </tr>
            </tbody>
        </table>
        </div>
        <button class="btn btn-primary w-25" @click="$router.push(`/`)">Thêm người dùng</button>
    </div>
</template>

<script>
    import {useFormStore} from "../stores/store"
    import {storeToRefs} from "pinia"
    export default {
        setup() {
            const store = useFormStore()
            const { userList } = storeToRefs(store)
            const{deleteUser,setUserUpdateAction} = store
            return {userList,deleteUser,setUserUpdateAction}
    },
    data() {
        return {
            input: "",
            userListFilter:this.userList,
            userDetail: null,
            notification:false
            
        }
    },
    methods: {
        // sự kiện lọc theo tên khi nhập vào input 
        filterByInput() {
            if (this.input) {
                this.userListFilter = this.userList.filter((item) => {
                    const name = String(`${item.firstName}${item.lastName}`)
                    if (name.toUpperCase().indexOf(String(this.input.toUpperCase())) === 0) {
                        return item
                    }
                    return
                })
                return
            }
            this.userListFilter = this.userList;
        },
        // xóa user
        deleteUserAction(id) {
            this.deleteUser(id);
            this.notification=true
        },
        // chuyển sang trang update
        setUserUpdate(user) {
            this.setUserUpdateAction(user),
            this.$router.push(`/detail`)
            console.log('abc')
        }
    }
    }
</script>

<style lang="scss" scoped>
    .list{
        display: flex;
        flex-direction: column;
        align-items: end;
        input{
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border: solid .1rem rgba(0, 0, 0,.2);
            outline:  none;
            margin-bottom: 20px;
        }
        .user-list{
            height: 480px;
            overflow-y: scroll;
            width: 100%;
            
        }
        .title{
            width: 30%;
        }
        .notification{
            position: fixed;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0,.2);
            top: 0;
            left: 0;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            .content{
                background-color: #fff;
                padding: 40px;
                max-width: 600px;
                border-radius: 14px;
                text-align: center;
                &.user-detail{
                    max-width: 800px;
                    .user-detail-line{
                        text-align: start;
                    }
                }
            }
        }
        & >button{
            margin-top: 10px;
            margin-right: 10px;
        }
    }
</style>