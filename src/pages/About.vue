<template>
    <div>
        <Navbar />

        <section class="about">

            <h1 class="heading"> about <span>me</span> </h1>

            <div class="row">

                <div class="info-container">

                    <h1>personal info</h1>

                    <div class="box-container">

                        <div class="box">
                            <h3> <span>name : </span> Abhisit Ukham </h3>
                            <h3> <span>age : </span> 29 </h3>
                            <h3> <span>email : </span> abhisit@ukham.com </h3>
                            <h3> <span>address : </span> Nontaburi, Thailand 11110 </h3>
                        </div>

                        <div class="box">
                            <h3> <span>freelance : </span> available </h3>
                            <h3> <span>skill : </span> Full Stack Engineer </h3>
                            <h3> <span>experience : </span> 6 years </h3>
                            <h3> <span>language : </span> thai </h3>
                        </div>

                    </div>

                    <a href="/profilewithcss/files/resume.pdf" class="btn"> download CV <i class="fas fa-download"></i>
                    </a>

                </div>

                <div class="count-container">

                    <div class="box">
                        <h3>5+</h3>
                        <p>years of experience</p>
                    </div>

                    <div class="box">
                        <h3>10+</h3>
                        <p>happy clients</p>
                    </div>

                    <div class="box">
                        <h3>20+</h3>
                        <p>project completed</p>
                    </div>

                    <div class="box">
                        <h3>5+</h3>
                        <p>Certificates</p>
                    </div>

                </div>

            </div>

        </section>

        <!-- about section ends -->

        <!-- skills section starts  -->

        <section class="skills">

            <h1 class="heading"> <span>my</span> skills </h1>

            <div class="box-container">
                <div class="box">
                    <img src="images/icon-1.png">
                    <h3>html</h3>
                </div>
                <div class="box">
                    <img src="images/icon-2.png">
                    <h3>css</h3>
                </div>
                <div class="box">
                    <img src="images/icon-3.png">
                    <h3>javascript</h3>
                </div>
                <div class="box">
                    <img src="images/icon-4.png">
                    <h3>sass</h3>
                </div>
                <div class="box">
                    <img src="images/icon-5.png">
                    <h3>angular</h3>
                </div>
                <div class="box">
                    <img src="images/icon-6.png">
                    <h3>react.js</h3>
                </div>
            </div>

        </section>

        <!-- skills section ends -->

        <!-- education section starts  -->

        <section class="education">

            <h1 class="heading"> <span>my</span> experience </h1>

            <div class="box-container">

                <div class="box">
                    <i class="fas fa-briefcase"></i>
                    <span>2016 - 2017</span>
                    <h3>INTER EXPRESS LOGISTICS PRIVATE LIMITED</h3>
                    <p>Assist the system analyst in conduct analysis, architecture, design database model for the new
                        application.</p>
                </div>

                <div class="box">
                    <i class="fas fa-briefcase"></i>
                    <span>2017 - 2018</span>
                    <h3>PTT Digital Solutions Company Limited</h3>
                    <p>Front-end coding to develop web applications follows by mock-up screen design. And back-end
                        coding
                        and test to configuration workflows and business processes.</p>
                </div>

                <div class="box">
                    <i class="fas fa-briefcase"></i>
                    <span>2018 - 2018</span>
                    <h3>Thai Beverage PLC</h3>
                    <p>Develop new features to facilitate related procedures and tools if necessary, Troubleshoot, test,
                        and
                        maintain the core product software and databases to ensure strong optimization and
                        functionality.
                    </p>
                </div>

                <div class="box">
                    <i class="fas fa-briefcase"></i>
                    <span>2019 - 2020</span>
                    <h3>Cigna</h3>
                    <p>Assist the system analyst in conduct analysis, architecture, design database model for the new
                        application.</p>
                </div>

                <div class="box">
                    <i class="fas fa-briefcase"></i>
                    <span>2019 - 2020</span>
                    <h3>EMETWORKS</h3>
                    <p>Develop new features to facilitate related procedures and tools if necessary.</p>
                </div>

                <div class="box">
                    <i class="fas fa-briefcase"></i>
                    <span>2020 - 2021</span>
                    <h3>uTech Solutions</h3>
                    <p>Assist the system analyst in conduct analysis, architecture, design database model for the new
                        application.</p>
                </div>

            </div>

        </section>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
    components: { Navbar }
}
</script>

<style>

</style>