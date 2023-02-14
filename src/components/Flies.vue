<template>
   <div class="flex-grow">
            <div class="grid 2xl:grid-cols-2 gap-x-28 gap-y-10">
                <div v-for="item in 6" :key="item">
                    <h3 class="font-bold text-2xl text-secondary-4 pb-4 border-b-4 border-secondary-4">تهران به</h3>
                    <ul class="h-[26.25rem] mt-1 overflow-y-auto">
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">اصفهان</p>
                                <p class="text-danger-2">12.000.000.000 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">مشهد</p>
                                <p class="text-secondary-1">654.000.569 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">اسفراین</p>
                                <p class="text-success">12.000.000.000 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">رشت</p>
                                <p class="text-secondary-1">654.000.569 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">کرمانشاه</p>
                                <p class="text-secondary-1">654.000.569 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">بابل</p>
                                <p class="text-secondary-1">654.000.569 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">ساری</p>
                                <p class="text-secondary-1">654.000.569 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">اهواز</p>
                                <p class="text-secondary-1">654.000.569 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">تنکابن</p>
                                <p class="text-secondary-1">654.000.569 $</p>
                            </a>
                        </li>
                        <li class="cursor-pointer hover:bg-secondary-3 py-4 px-2">
                            <a href="#" class="flex items-center justify-between text-lg font-normal">
                                <p class="text-secondary-1">تبریز</p>
                                <p class="text-secondary-1">654.000.569 $</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>