<template>
    <el-container>
        <el-header class="book-hd">
            <div class="book-hd__lt">
                <img src="https://pro.upload.logomaker.com.cn/temp24h/logo/b985912a-f96b-4f68-8f09-fc970bfca74b.png?x-oss-process=image/crop,x_400,y_0,w_400,h_300"
                    class="book-logo" />
                <span>图书管理系统</span>
                <div @click="store.handleChangeFold" class="book-btn_menu">
                    <el-icon v-if="store.isCollapse" size="30" color="#fff">
                        <Fold />
                    </el-icon>
                    <el-icon v-else size="30" color="#fff">
                        <Expand />
                    </el-icon>
                </div>
            </div>
            <div class="book-hd__rt">
                <div class="book-hd__other">
                    <el-badge is-dot class="book-bell">
                        <el-icon size="30" color="#fff" class="book-bell__icon">
                            <Bell />
                        </el-icon>
                    </el-badge>
                </div>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <span class="book-user">用户11</span>
                <el-icon size="16" color="#fff">
                    <ArrowDown />
                </el-icon>
            </div>
        </el-header>
        <el-container class="book-main">
            <el-aside>
                <el-menu :collapse="store.isCollapse" class="book-menu" default-active="0">
                    <template v-for="(item, index) in List" :key="item.name">
                        <el-sub-menu v-if="item.childrens && item.childrens.length > 0" :index="String(index)">
                            <template #title>
                                <el-icon>
                                    <component :is="item.icon" />
                                </el-icon>
                                <span>{{ item.name }}</span>
                            </template>
                            <el-menu-item-group v-for="(el, i) in item.childrens" :key="item.name">
                                <el-menu-item :index="index + '-' + i" @click="handleJump(el.url)">{{ el.name
                                }}</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-menu-item v-else :index="String(index)" @click="handleJump(item.url)">
                            <el-icon>
                                <component :is="item.icon" />
                            </el-icon>
                            <template #title>{{ item.name }}</template>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <slot></slot>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import List from '@/assets/js/menu';
import { useMenusStore } from '@/stores/menuStores'
const store = useMenusStore();
</script>

<style lang="scss">
.book-hd {
    background-color: #409EFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.book-hd__lt,
.book-hd__rt {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 30px;
}

.book-logo {
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 10px;
}

.book-btn_menu {
    width: 30px;
    height: 30px;
    margin-left: 10px;
}

.book-hd__other {
    margin-right: 30px;
    display: flex;
    align-items: center;
}

.book-search {

    width: 240px;
    margin-right: 10px;
}

.book-bell {
    position: relative;
    width: 30px;
    height: 30px;
}

.book-bell__icon {
    position: absolute;
    left: 0;
    top: 0;
}

.book-user {
    font-size: 18px;
    margin-left: 10px;
}

.book-main {
    height: calc(100vh - 60px);
}

.book-menu {
    height: 100%;
}
</style>