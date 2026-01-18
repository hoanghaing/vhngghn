<template>
  <UPage class="bg-[#120f0e] min-h-screen relative overflow-hidden">
    <div class="absolute top-0 left-0 p-8 z-50">
      <span class="text-2xl font-bold text-white tracking-tighter">VHNGGHN</span>
    </div>

    <UPageBody class="p-0">
      <div class="flex flex-col md:flex-row min-h-screen">
        
        <div class="w-full md:w-[40%] h-[40vh] md:h-screen relative">
          <img 
            src="/images/vhngghn.jpg" 
            alt="em yeu"
            class="absolute inset-0 w-full h-full object-cover opacity-100"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#120f0e]/20 to-[#120f0e] hidden md:block" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#120f0e] to-transparent md:hidden" />
        </div>

        <div class="w-full md:w-[60%] relative flex flex-col items-center justify-end pb-4 overflow-hidden">
          
          <div class="absolute inset-0 z-0">
            <img 
              src="/images/saigon.jpg" 
              class="w-full h-full object-cover opacity-100" 
            >
            <div class="absolute inset-0 bg-[#120f0e]/70"/>
          </div>

          <div class="relative z-10 text-center space-y-12 md:space-y-16">
            <div class="flex justify-center scale-90 md:scale-110 drop-shadow-2xl">
              <Countdown date="2026-02-25T08:00:00" />
            </div>
          </div>

        </div>

      </div>
    </UPageBody>
  </UPage>
</template>

<style>
/* Reset mặc định của Nuxt UI Pro để layout chiếm trọn màn hình */
.u-page-body {
  padding: 0 !important;
  max-width: none !important;
}

body {
  background-color: #120f0e !important;
  margin: 0;
  overflow-x: hidden;
}
</style>