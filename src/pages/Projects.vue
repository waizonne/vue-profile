<template>
    <div>
        <Navbar />
        <section class="projects">
            <h1 class="heading"> <span>my</span> projects </h1>
            <h3>Electrical appliances in smart hotel by web application</h3>
            <p>การออกแบบและสร้างอุปกรณ์เครื่องมือควบคุมเครื่องใช้ไฟฟ้าในแต่ละส่วนของห้องโรงแรม
                โดยสามารถควบคุมได้จากภายในห้องและจากส่วนกลาง</p>
            <div class="box-container">
                <iframe width="720" height="405" src="https://www.youtube.com/embed/603Hc7ycIS0"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar }
}
</script>

<style>

</style>