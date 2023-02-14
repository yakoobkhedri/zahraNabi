<template>
   <div class="xl:ml-36 lg:ml-10">
            <h3 class="font-bold text-2xl text-danger-1 pb-4 mb-8 border-b-4 border-danger">جستجو پرواز</h3>
            <form>
                <div class="flex">
                    <div class="flex-1">
                        <label for="#from" class="font-normal text-secondary-1 mb-2 block pr-4">مبدا</label>
                        <div class="relative h-16">
                            <img src="../assets/img/selectFromCity.svg" alt="flyIcon" class="absolute w-5 right-6 top-6">
                            <input id="from" class="w-full h-full bg-secondary-2 border-2 border-secondary-3 pr-14 placeholder:text-lg font-normal outline-none" placeholder="انتخاب شهر">
                        </div>
                    </div>
                    <div class="flex-1">
                        <label for="#to" class="font-normal text-secondary-1 mb-2 block">مقصد</label>
                        <div class="relative h-16">
                            <img src="../assets/img/selectToCity.svg" alt="flyIcon" class="absolute w-5 right-6 top-6">
                            <input id="to" class="w-full h-full bg-secondary-2 border-2 border-secondary-3 pr-14 placeholder:text-lg font-normal outline-none" placeholder="انتخاب شهر">
                        </div>
                    </div>
                </div>
                <div class="flex mt-8">
                    <div class="flex-1">
                        <label for="#fromdate" class="font-normal text-secondary-1 mb-2 block pr-4">تاریخ رفت</label>
                        <div class="relative h-16">
                            <img src="../assets/img/date.svg" alt="dateIcon" class="absolute w-5 right-6 top-5">
                            <input id="fromdate" class="w-full h-full bg-secondary-2 border-2 border-secondary-3 pr-14 placeholder:text-lg font-normal outline-none" placeholder="انتخاب تاریخ">
                        </div>
                    </div>
                    <div class="flex-1">
                        <label for="#todate" class="font-normal text-secondary-1 mb-2 block">تاریخ برگشت</label>
                        <div class="relative h-16">
                            <input id="todate" class="w-full h-full bg-secondary-2 border-2 border-secondary-3 pr-4 placeholder:text-lg font-normal outline-none" placeholder="انتخاب تاریخ">
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <div>
                        <label for="#passengerNum" class="font-normal text-secondary-1 mb-2 block pr-4">تعداد مسافران</label>
                        <div class="relative h-16">
                            <img src="../assets/img/passenger.svg" alt="passengerIcon" class="absolute w-5 right-6 top-5">
                            <input id="passengerNum" class="w-full h-full bg-secondary-2 border-2 border-secondary-3 pr-14 placeholder:text-lg font-normal outline-none" placeholder="انتخاب مسافران">
                        </div>
                    </div>
                </div>
                <button class="mt-6 bg-danger-1 text-sm font-medium cursor-pointer text-white w-full h-16 flex items-center justify-center gap-3" type="submit">
                    <img src="../assets/img/search.svg" alt="searchIcon w-5">
                    <p>جستجو پرواز</p>
                </button>
            </form>
            <img src="../assets/img/banner2.PNG" alt="sidebarBanner" class="mt-10 mb-5 w-full">
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>