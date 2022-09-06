<template>
    <div class="w100v d-flex justify-content-center align-items-center p-0">
        <div class="page-content container-fluid row p-md-0 p-3 my-3 my-sm-0">
            <div class="col-md-3 d-none p-0 d-md-flex align-items-center img">
                <img src="../assets/bg.jpeg" alt="hinh anh">
            </div>
            <div class="col-md-9 col-12 d-flex align-items-center" ><RouterView></RouterView></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.page-content{
    width: 80%;   
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-height:658px;
}
.img{
    height: 658px;
    position: sticky;
    img{
        width: 100%;
        height: 100%;
    }
}
@media screen and (max-width:'576px') {
    .page-content{
        max-height: unset;
    }
    .w100v{
        height: fit-content;
    }
}

</style>