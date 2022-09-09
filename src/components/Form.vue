<template>
    <form action="" @submit.prevent="submit" class="p-3 row w-100" >
        <!-- hiển thị thông báo -->
        <div class="notification" v-if="notification">
            <div class="content">
                <h2 class="py-3">GỬI THÔNG TIN THÀNH CÔNG!</h2>
                <button class="btn btn-primary w-50" @click.prevent="notification = false">xác nhận</button>
            </div>
        </div>
        <!-- hiển thị thông báo -->

        <div class="col-12 col-sm-6">
                <div class="form-items ">
                    <label for="firstName" >
                        FIRST NAME 
                        <span>*</span>
                    </label>
                    <input type="text" v-model="form.firstName" class="mt-2" :class="{' border border-danger form-control is-invalid': error.firstName}" @blur="validation1" @keyup="validation1">
                    <span v-if="error.firstName" class="invalid-feedback ">{{error.firstName}}</span>
                </div>
                <div class="form-items mt-3">
                    <label >
                        LAST NAME 
                        <span>*</span>
                    </label>
                    <input type="text" class="mt-2" v-model="form.lastName" :class="{' border border-danger form-control is-invalid': error.lastName}" @blur="validation2" @keyup="validation2">
                    <span v-if="error.lastName" class="invalid-feedback">{{error.lastName}}</span>
                    
                </div>
                <div class="form-items mt-3">
                    <label >
                        COMPANY 
                        <span>*</span>
                    </label>
                    <input type="text" class="mt-2" v-model="form.company" :class="{' border border-danger form-control is-invalid': error.company}" @blur="validation3" @keyup="validation3">
                    <span v-if="error.company" class="invalid-feedback">{{error.company}}</span>
                </div>
                <div class="form-items mt-3">
                    <label >
                        EMAIL 
                        <span>*</span>
                    </label>
                    <input type="text" class="mt-2" v-model="form.email" :class="{' border border-danger form-control is-invalid': error.email}" @blur="validation4" @keyup="validation4">
                    <span v-if="error.email" class="invalid-feedback">{{error.email}}</span>
                </div>
                <div class="form-items mt-3">
                    <label >
                        PHONE NUMBER 
                        <span>*</span>
                    </label>
                    <input type="text" class="mt-2" v-model="form.phoneNumber" :class="{' border border-danger form-control is-invalid': error.phoneNumber}" @blur="validation5" @keyup="validation5">
                    <span v-if="error.phoneNumber" class="invalid-feedback">{{error.phoneNumber}}</span>
                </div>
            </div>
            <div class="col-12 col-sm-6">
                <div class="form-items ">
                    <label for="firstName" >
                        GENDER 
                        <span>*</span>
                    </label>
                    <select name="gender" class="mt-2" v-model="form.gender" :class="{'border border-danger form-control is-invalid': error.gender}" @blur="validation6" @change="validation6">
                        <option value=""></option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="other">Other</option>
                    </select>
                    <span v-if="error.gender" class="invalid-feedback ">{{error.gender}}</span>
                </div>
                <div class="form-items mt-3 mb-1">
                    <label >
                        PAYMENT MODE 
                        <span>*</span>
                    </label>
                    <div class="radiobtn-group d-flex justify-content-between align-items-center " :class="{'is-invalid': error.payMode}">
                        <label class="radio-item">Visa
                            <input type="radio"  name="payMode" v-model="form.payMode" value="visa" @change="validation7()">
                            <span class="checkmark" :class="{'error':error.payMode}"></span>
                        </label>
                        <label class="radio-item">Mastercard
                            <input type="radio"  name="payMode" v-model="form.payMode" value="mastercard" @change="validation7()">
                            <span class="checkmark" :class="{'error':error.payMode}"></span>
                        </label>
                        <label class="radio-item">Amex
                            <input type="radio"  name="payMode" v-model="form.payMode" value="amex" @change="validation7()">
                            <span class="checkmark" :class="{'error':error.payMode}"></span>
                        </label>
                    </div>
                    <span v-if="error.payMode" class="invalid-feedback">{{error.payMode}}</span>
                </div>
                <div class="form-items mt-3">
                    <label >
                        CARD NUMBER 
                        <span>*</span>
                    </label>
                    <input type="text" class="mt-2" v-model="form.cardNumber" :class="{' border border-danger form-control is-invalid': error.cardNumber}" @blur="validation8" @keyup="validation8">
                    <span v-if="error.cardNumber" class="invalid-feedback">{{error.cardNumber}}</span>
                </div>
                <div class="form-items mt-3">
                    <label >
                        EXPINATION
                        <span>*</span>
                    </label>
                    <input type="text" class="mt-2 date" v-model="form.expination" :class="{' border border-danger form-control is-invalid': error.expination}" @blur="validation9" @keyup="validation9">
                    <span v-if="error.expination" class="invalid-feedback">{{error.expination}}</span>
                </div>
                <div class="form-items mt-3">
                    <label >
                        CVN
                        <span>*</span>
                    </label>
                    <input type="text" class="mt-2 date" v-model="form.cvn" :class="{' border border-danger form-control is-invalid': error.cvn}" @blur="validation10" @keyup="validation10">
                    <span v-if="error.cvn" class="invalid-feedback">{{error.cvn}}</span>
                </div>
            </div>
            <div class="donate ">
                <div class="form-donate mt-3">
                    <label >
                        DONATE
                        <span>*</span>
                    </label>
                    <input type="range" class=" donate my-4" min="0" max="1000" v-model="form.donate" :class="{'is-invalid': error.donate}" @blur="validation11"  @change="validation11">

                    <span v-if="error.donate" class="invalid-feedback">{{error.donate}}</span>
                    <!-- el giả hiển thị độ dài donate -->
                    <span class="range" :style="rangeStyle" :key="form.donate">
                        <!-- ô hiển thị giá trị donate -->
                        <span class="donate-value" :class="{'error':error.donate}">{{form.donate}} $</span>
                        <!-- ô hiển thị giá trị donate -->    
                    </span>
                    <!-- el giả hiển thị độ dài donate -->
                </div>
            </div>
            <div class="button d-flex justify-content-end py-3">
                <button class="btn btn-success mx-2 w-25">submit</button>
                <button class="btn btn-outline-secondary mx-2 w-25" @click.prevent="resetForm">reset</button>
                <button class="btn btn-outline-primary mx-2 w-25" @click.prevent="this.$router.push(`/list`)">User List</button>


            </div>
        </form>
</template>

<script >
import { useFormStore } from "../stores/store";
export default {
    setup() {
        const store = useFormStore();
        // action 
        const { addToList } = store;
        // action 
        return {
            addToList
        }
        
        
        },
    data: function(){
        return {
                // thông báo lỗi validation
                error: {
                    firstName: "",
                    lastName: "",
                    company:"",
                    email: "",
                    phoneNumber: "",
                    gender: "",
                    cardNumber: "",
                    payMode: "",
                    expination: "",
                    cvn: "",
                    donate:0
                },
                // giá trị input
                form: {
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phoneNumber: "",
                    gender: "",
                    cardNumber: "",
                    payMode: "",
                    expination:"",
                    cvn: "",
                    donate:0
                },
                // giá trị input

                // biến hiển thị thông báo
                notification:false
            }
        },
    computed: {
        // hàm tính độ dành thanh donate 
        rangeStyle() {
            const width = (Number(this.form.donate) / 1000) * 100;
      return {
        'width':`${width -2}%`
        };
    }
        // hàm tính độ dành thanh donate 
    
  },
    methods: {
        // validation cho từng ô input
        validation1() {
            this.error = {...this.error,firstName:""}
            let valid = true
            if (!this.form.firstName) {
                this.error.firstName = "không được bỏ trống ô này"
                valid=false
            } else {
                if (this.form.firstName.length < 5 || this.form.firstName.length > 20) {
                    this.error.firstName = "phải từ 5 đến 20 kí tự"
                    valid = false
                }

            }
            return valid
        },
        validation2() {
            this.error = {...this.error,lastName:""}
            let valid = true
            if (!this.form.lastName) {
                this.error.lastName = "không được bỏ trống ô này"
                valid = false
            } else {
                if (this.form.lastName.length < 5 || this.form.lastName.length > 20) {
                    this.error.lastName = "phải từ 5 đến 20 kí tự"
                    valid = false
                }
            }
            return valid
        },
        validation3() {
            this.error = {...this.error,company:""}
            let valid = true
            if (!this.form.company) {
                this.error.company = "không được bỏ trống ô này"
                valid=false
            } else {
                if (this.form.company.length < 5 || this.form.company.length > 20) {
                    this.error.company = "phải từ 5 đến 20 kí tự"
                    valid = false
                }

            }
            return valid
        },
        validation4() {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            this.error = {...this.error,email:""}
            let valid = true
            if (!this.form.email) {
                this.error.email = "không được bỏ trống ô này"
                valid=false
            } else {
                 if (!this.form.email.match(regex)) {
                    this.error.email = "không đúng định dạng email"
                    valid = false
                }

            }
            return valid
        },
        validation5() {
            const regex = /^[0-9][A-Za-z0-9 -]*$/;
            this.error = {...this.error,phoneNumber:""}
            let valid = true
            if (!this.form.phoneNumber) {
                this.error.phoneNumber = "không được bỏ trống ô này"
                valid=false
            } else {
                 if (!this.form.phoneNumber.match(regex)) {
                    this.error.phoneNumber = "không đúng định dạng số"
                    valid = false
                } else if(this.form.phoneNumber.length < 10 || this.form.phoneNumber.length > 11)
                this.error.phoneNumber = " chỉ được 10 hoặc 11 kí tự"
            }
            return valid
        },
        validation6() {
            this.error = {...this.error,gender:""}
            let valid = true
            if (!this.form.gender) {
                this.error.gender = "không được bỏ trống ô này"
                valid=false
            }
            return valid
        },
        validation7() {
            this.error = {...this.error,payMode:""}
            let valid = true
            if (!this.form.payMode) {
                this.error.payMode = "không được bỏ trống ô này"
                valid = false
            }
            return valid
        },
        validation8() {
            const regex = /^[0-9][A-Za-z0-9 -]*$/;
            this.error = {...this.error,cardNumber:""}
            let valid = true
            if (!this.form.cardNumber) {
                this.error.cardNumber = "không được bỏ trống ô này"
                valid=false
            } else {
                 if (!this.form.cardNumber.match(regex)) {
                    this.error.cardNumber = "không đúng định dạng số"
                    valid = false
                } else if(this.form.cardNumber.length < 9 || this.form.cardNumber.length > 14)
                this.error.cardNumber = " chỉ được 9 hoặc 14 kí tự"
            }
            return valid
        },
        validation9() {
            const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            this.error = {...this.error,expination:""}
            let valid = true
            if (!this.form.expination) {
                this.error.expination = "không được bỏ trống ô này"
                valid=false
            } else {
                 if (!this.form.expination.match(regex)) {
                    this.error.expination = "không đúng định dạng dd/mm/yyyy"
                    valid = false
                }

            }
            return valid
        },
        validation10() {
            const regex = /^[0-9][A-Za-z0-9 -]*$/;
            this.error = {...this.error,cvn:""}
            let valid = true
            if (!this.form.cvn) {
                this.error.cvn = "không được bỏ trống ô này"
                valid=false
            } else {
                 if (!this.form.cvn.match(regex)) {
                    this.error.cvn = "không đúng định dạng số"
                    valid = false
                } else if(this.form.cvn.length !== 3)
                this.error.cvn = " chỉ được 3 kí tự"
            }
            return valid
        },
        validation11() {
            this.error = {...this.error,donate:0}
            let valid = true
            if (Number(this.form.donate)===0) {
                this.error.donate = "không được để ô này bằng 0"
                valid = false
            } 
            return valid
        },
        //kết thúc validation cho từng ô input
        // hàm khi submit
        submit() {
            //validation khi có sự kiện submit
            this.validation1()
            this.validation2()
            this.validation3()
            this.validation4()
            this.validation5()
            this.validation6()
            this.validation7()
            this.validation8()
            this.validation9()
            this.validation10()
            this.validation11()

            // hàm khi validation hợp lệ
            if( this.validation1() &&
            this.validation2()&&
            this.validation3()&&
            this.validation4()&&
            this.validation5()&&
            this.validation6()&&
            this.validation7()&&
            this.validation8()&&
            this.validation9()&&
            this.validation10()&&
            this.validation11()) {
                this.addToList(this.$data.form)
                this.form = {
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phoneNumber: "",
                    gender: "",
                    cardNumber: "",
                    payMode: "",
                    expination:"",
                    cvn: "",
                    donate:0
            }
            this.error = {
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phoneNumber: "",
                    gender: "",
                    cardNumber: "",
                    payMode: "",
                    expination:"",
                    cvn: "",
                    donate:0
                }
                this.notification = true
            }
            //hàm khi validation hợp lệ
        },
        // sự kiện reset form 
        resetForm() {
            this.form = {
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phoneNumber: "",
                    gender: "",
                    cardNumber: "",
                    payMode: "",
                    expination:"",
                    cvn: "",
                    donate:0
            }  
            this.error = {
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phoneNumber: "",
                    gender: "",
                    cardNumber: "",
                    payMode: "",
                    expination:"",
                    cvn: "",
                    donate:0
            }
        },
        // sự kiện reset form 
    }
}
</script>

<style lang="scss" scoped>
    .form-items{
        position: relative;
    /* css cho label */
        & >label{
            font-weight: 900;
            font-size: 13px;
            padding-left: 3px;
            position: relative;
            // css dấu sao
            span{
                font-size: 16px;
                color: #c70518;
                transform: translate(1px, 1px);
                display: inline-block;
            }
        }
        input{
            width: 100%;
            outline: none;
            padding: 10px;
            border-radius: 6px;
            border: solid 0.1rem rgba(0, 0, 0,.1);
            border-width: .1rem !important;
        }
        select{
            width: 100%;
            outline: none;
            padding: 10px;
            border-radius: 6px;
            border: solid 0.1rem rgba(0, 0, 0,.1);
            background: transparent;
            background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
            background-repeat: no-repeat;
            background-position-x: 100%;
            background-position-y: 12px;
            appearance: none;
            cursor: pointer;
            border-width: .1rem !important;
        }
        // css feedback
        &>span{
            position: absolute;
            left:0;
            bottom: -22px;
            margin-top: 0 !important;
        }
        .radiobtn-group{
            margin-top: 19px;
            .radio-item {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 16px;
                font-weight: bold;
                input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                    &:checked{
                        &~ .checkmark{
                            background-color: #fff;
                            border: solid 2px green; 
                            &::after{
                                display: block;
                            }
                        }
                    }
                }
                .checkmark {
                    position: absolute;
                    top: 3px;
                    left: 6px;
                    height: 19px;
                    width: 19px;
                    background-color: #fff;
                    border: solid 2px rgba(0, 0, 0,.1); 
                    border-radius: 50%;
                    transition: all ease-in .2s;
                    &.error{
                        border-color: #c70518 !important;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        display: none;
                        top: 1px;
                        left: 1px;
                        width: 13px;
                        height: 13px;
                        border-radius: 50%;
                        background: green;
                    }
                }
                &:hover{
                    input{
                        &~ .checkmark{
                            background-color: #fff;
                            border: solid 2px green; 
                        }
                    }
                }
            }
        }
    }
        // css riêng cho input donate
        .form-donate{
            position: relative;
            /* css cho label */
            & >label{
                width: 100%;
                font-weight: 900;
                font-size: 13px;
                padding-left: 3px;
                position: relative;
                // css dấu sao
                span{
                    font-size: 16px;
                    color: #c70518;
                    transform: translate(1px, 1px);
                    display: inline-block;
                }

            }
            &>span{
                position: absolute;
                left:0;
                bottom: -13px;
                margin-top: 0 !important;
            }  
            .donate{
                -webkit-appearance: none;  
                appearance: none;
                width: 110%; 
                height: 8px; 
                border-radius: 6px;
                background-color: transparent;
                outline: none;
                position: relative;
                -webkit-appearance: none;
                appearance: none;
                &::-webkit-slider-thumb{
                    -webkit-appearance: none;
                    appearance: none;
                    width: 100px;
                    height: 40px;
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                    border-radius: 8px;
                }
                &::before{
                    z-index: -2;
                    content: "";
                    top: 0;
                    left: 0;
                    position: absolute;
                    width: 90%;
                    height: 8px;
                    background: rgb(211, 211, 211,.3); 
                    border-radius: 8px;
                }
            } 
            .range{
                z-index: -1;
                position: absolute;
                left: 0;
                top: 48px;
                background-color: green;
                height: 10px;
                display: block;
                border-radius: 6px;
                .donate-value{
                    z-index: -1;
                    position: absolute;
                    width: 70px;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    top: -16px;
                    right: -50px;
                    display: flex;
                    border-radius: 8px;
                    z-index: -1;
                    background-color: green;
                    color: #fff;
                    font-weight: bolder;
                    &.error{
                        background-color: red !important;
                    }
                }
            }
    }
    .button{
        button{
            font-weight: bold;
        }
    } 
    // css riêng cho thông báo 
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
        }
    }
</style>