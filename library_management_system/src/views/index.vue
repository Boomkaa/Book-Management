<template>
    <div class="box">
        <div class="wrap">
            <h1 class="title">图书管理系统</h1>
            <el-form :model="form" label-width="auto">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="账号">
                    <el-input v-model="form.passwrod" />
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({
    name: '',
    passwrod: '',
})

</script>

<style lang="scss">
.box {
    width: 100vw;
    height: 100vh;
    background: url('@/assets/bg.jpg');
    background-size: 100% 100%;
}

.wrap {
    position: fixed;
    width: 40rem;
    height: 20rem;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
}

.title {
    font-weight: bold;
    font-size: 3rem;
}
</style>