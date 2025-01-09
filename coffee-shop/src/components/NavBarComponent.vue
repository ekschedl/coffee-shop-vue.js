<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <li class="header__item">
                <router-link to="/">
                    <img src="@/assets/logo/Logo.svg" alt="logo">
                </router-link>
            </li>

            <li class="header__item">
                <router-link to="/our-coffee">
                    Our Coffee
                </router-link>
            </li>
            
            <li class="header__item">
                <router-link to="/goods">
                    For your pleasure
                </router-link>
            </li>

            <li class="header__item">
                <router-link to="/contact">
                    Contact us
                </router-link>
            </li>

        </ul>
    </header>
</template>