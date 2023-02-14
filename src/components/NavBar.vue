
<template>
<navbar class="flex items-center justify-between py-9 md:px-20 px-5 shadow-xl font-bold">
    <div class="flex items-end gap-16">
        <h1 class="text-2xl text-danger-1">زهره الدبی</h1>
        <ul class="xl:flex hidden items-center gap-14 text-[#3D3D3D]">
            <li class="text-danger-1 cursor-pointer hover:text-danger-1 transition-all duration-200"><a href="#">الصفحة الرئيسية</a></li>
            <li class="cursor-pointer hover:text-danger-1 transition-all duration-200"><a href="#">قوانين الشراء</a></li>
            <li class="cursor-pointer hover:text-danger-1 transition-all duration-200"><a href="#">متابعة / إلغاء</a></li>
            <li class="cursor-pointer hover:text-danger-1 transition-all duration-200"><a href="#">من نحن</a></li>
            <li class="cursor-pointer hover:text-danger-1 transition-all duration-200"><a href="#">اتصل بنا</a></li>
        </ul>
    </div>
    <div class="xl:flex hidden items-center gap-10">
        <div class="flex items-center gap-3 cursor-pointer">
            <img src="../assets/img/Vector.svg" alt="arrow">
            <p class="text-[#1E2A38] text-xl">English</p>
        </div>
        <a href="#" class="text-danger-1 cursor-pointer">ورود به حساب کاربری</a>
        <a href="#" class="text-danger-1 cursor-pointer border-danger-1 border py-2 px-4 transition-all duration-100 hover:bg-danger-1 hover:text-white"> ثبت نام در سایت </a>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list text-danger-1 cursor-pointer xl:hidden" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
</navbar>
</template>

