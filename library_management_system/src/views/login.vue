<template>
    <div class="box">
        <div class="wrap">
            <h1 class="title">图书管理系统</h1>
            <el-form :model="form" label-width="auto">
                <el-form-item label="用户名">
                    <el-input style="width: 240px" v-model="form.name" placeholder="请输入用户名" clearable />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input style="width: 240px" type="password" show-password maxlength="8" v-model="form.passwrod"
                        placeholder="请输入密码" clearable />
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="onSubmit">登录</el-button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from "vue-router"
const router = useRouter()
const form = reactive({
    name: '',
    passwrod: '',
})

// 点击登录按钮
const onSubmit = () => {
    router.push('/');
}

</script>

<style lang="scss">
.box {
    width: 100vw;
    height: 100vh;
    background-color: rgb(12, 193, 120);
}

.wrap {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
}

.title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10px;
}
</style>